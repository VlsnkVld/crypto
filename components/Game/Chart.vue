<template>
  <div class="game-chart" :class="{ 'game-chart--desktop': desktop }">
    <span class="game-chart__header">
      <slot name="header" />
    </span>
    <chart-chartjs
      ref="chart"
      :chart-data="cartData"
      :options="chartOptions"
      class="game-chart__chart"
    />
    <game-chart-background
      v-if="!desktop"
      ref="background"
      v-resize="onResize"
    />
    <game-chart-desktop-background
      v-else
      ref="background"
      v-resize="onResize"
    />
    <canvas ref="canvas" />
    <!-- Tooltip -->
    <div
      v-show="!tooltip.hidden"
      class="game-chart__tooltip"
      :style="{
        '--color': tooltip.color,
        left: tooltip.position[0],
        top: tooltip.position[1],
      }"
    >
      <div v-text="tooltip.date" />
      <div class="game-chart__tooltip-value">
        <img :src="require('~/static/images/bull.png')" alt="Bull" />
        {{ tooltip.rate.toLocaleString() }}
      </div>
    </div>
  </div>
</template>

<script>
import GameChartBackground from './ChartBackground'
import GameChartDesktopBackground from './ChartDesktopBackground'
import ChartChartjs from './ChartChartjs'

const PREDICT_DOWN_COLOR = '#F5433D'
const PREDICT_UP_COLOR = '#90D650'

export default {
  name: 'GameChart',
  components: {
    GameChartBackground,
    GameChartDesktopBackground,
    ChartChartjs,
  },
  props: {
    desktop: {
      type: Boolean,
      default: () => false,
    },
  },
  data() {
    return {
      tooltip: {
        hidden: true,
        color: PREDICT_UP_COLOR,
        date: '00:00:00',
        rate: 0,
        position: [0, 0],
      },
      data: [],
      labels: [],
      pointColor: [],
    }
  },
  computed: {
    chartOptions() {
      return {
        tooltips: {
          enabled: false,
          custom: this.updateTooltip,
        },
        responsive: true,
        maintainAspectRatio: false,
        aspectRatio: 0.9,
        legend: {
          display: false,
        },
        scales: {
          yAxes: [
            this.desktop
              ? {
                  display: true,
                  ticks: {
                    display: true,
                    maxTicksLimit: 9,
                    minTicksLimit: 9,
                    fontColor: 'white',
                    fontSize: 12,
                    fontFamily: 'roc-grotesk',
                  },
                  scaleLabel: {},
                  gridLines: {
                    color: 'rgba(255, 255, 255, 0.1)',
                    zeroLineWidth: 1,
                    zeroLineColor: 'rgba(255, 255, 255, 0.1)',
                    drawTicks: true,
                  },
                }
              : { display: false },
          ],
          xAxes: [
            {
              ...(this.desktop
                ? {
                    display: true,
                    ticks: {
                      minTicksLimit: 35,
                      maxTicksLimit: 35,
                      // maxTicksLimit: 30,
                      fontColor: 'white',
                      fontSize: 12,
                      fontFamily: 'roc-grotesk',
                      callback: (date, index) =>
                        index % 2 ? date.toISOString().substr(11, 8) : '',
                    },
                    gridLines: {
                      color: 'rgba(255, 255, 255, 0.1)',
                      zeroLineWidth: 1,
                      zeroLineColor: 'rgba(255, 255, 255, 0.1)',
                      drawTicks: true,
                      drawBorder: false,
                    },
                  }
                : { display: false }),
            },
          ],
        },
      }
    },
    cartData() {
      return {
        labels: this.labels,
        datasets: [
          {
            label: 'rate',
            labels: this.labels,
            data: this.data,
            borderColor: '#8DD9FC',
            borderWidth: 2,
            fill: this.desktop,
            backgroundColor: 'rgba(141, 217, 252, 0.1)',
            cubicInterpolationMode: 'monotone',
            tension: 0.4,
            pointHitRadius: 20,
            shadowOffsetX: 0,
            shadowOffsetY: 5,
            shadowBlur: 10,
            shadowColor: '#8DD9FC',
            pointBackgroundColor: this.pointColor,
            pointHoverBackgroundColor: this.pointColor,
            pointBorderColor: this.pointColor,
            pointRadius: 2.5,
            pointHoverRadius: 4,
          },
        ],
      }
    },
  },
  watch: {
    '$rate.rates': {
      immediate: true,
      handler() {
        const { data, labels } = this.cartData.datasets[0]
        for (const { createdAt, rate } of this.$rate.rates) {
          const prevData = data[data.length - 1]
          const prevLabel = labels[labels.length - 1]
          if (data.length === 0 || prevLabel.getTime() < createdAt.getTime()) {
            const color =
              prevData && rate > prevData
                ? PREDICT_UP_COLOR
                : PREDICT_DOWN_COLOR

            this.data.push(rate)
            this.labels.push(createdAt)
            this.pointColor.push(color)

            // Limit 30
            if (this.data.length > 30) {
              this.data.splice(0, this.data.length - 30)
              this.labels.splice(0, this.labels.length - 30)
              this.pointColor.splice(0, this.pointColor.length - 30)
            }
          }
        }
        // console.log(data)
        // this.$set(this.cartData, 'cartData', this.cartData)
        // this.$forceUpdate()

        //         onRefresh: (chart) => {
        //   const {
        //     data,
        //     pointBackgroundColor,
        //     pointHoverBackgroundColor,
        //     pointBorderColor,
        //   } = chart.data.datasets[0]
        //   for (const { createdAt, rate } of this.$rate.rates) {
        //     const prevData = data[data.length - 1]
        //     if (
        //       data.length === 0 ||
        //       prevData.x.getTime() < createdAt.getTime()
        //     ) {
        //       const color =
        //         prevData && rate > prevData.y
        //           ? PREDICT_UP_COLOR
        //           : PREDICT_DOWN_COLOR
        //       data.push({ x: createdAt, y: rate })
        //       pointBackgroundColor.push(color)
        //       pointHoverBackgroundColor.push(color)
        //       pointBorderColor.push(color)
        //     }
        //   }
        // },
      },
    },
  },
  mounted() {
    const ctx = this.$refs.canvas.getContext('2d')
    const gradient = ctx.createLinearGradient(0, 0, 0, 400)
    gradient.addColorStop(0, 'rgba(141, 217, 252, 0.3)')
    gradient.addColorStop(1, 'rgba(141, 217, 252, 0)')

    this.cartData.datasets[0].backgroundColor = gradient
  },
  methods: {
    onResize() {
      this.height = this.$refs.background.$el.clientHeight
    },
    updateTooltip(tooltipModel) {
      // Visable status
      this.$set(this.tooltip, 'hidden', !tooltipModel.opacity)

      // Point
      const point = tooltipModel.dataPoints?.[0]

      if (point) {
        const dataset = {
          y: this.cartData.datasets[0].data[point.index],
          x: this.cartData.datasets[0].labels[point.index],
        }
        const prevDataset = {
          y: this.cartData.datasets[0].data[point.index - 1],
          x: this.cartData.datasets[0].labels[point.index - 1],
        }

        // Color
        this.$set(
          this.tooltip,
          'color',
          dataset.y > prevDataset.y ? PREDICT_UP_COLOR : PREDICT_DOWN_COLOR
        )

        // Date
        this.$set(
          this.tooltip,
          'date',
          new Date(dataset.x).toISOString().substr(11, 8)
        )

        // Rate
        this.$set(this.tooltip, 'rate', dataset.y)

        // Position
        this.$set(this.tooltip.position, 0, tooltipModel.caretX + 'px')
        this.$set(this.tooltip.position, 1, tooltipModel.caretY + 'px')
      }
    },
  },
}
</script>

<style lang="scss">
.game-chart {
  position: relative;
  display: block;
  min-width: 230px;
  max-width: 230px;
  max-height: 193px;
  z-index: 1;

  canvas {
    height: 100%;
  }

  &__header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    text-align: center;
    z-index: 2;
  }

  &__chart {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 173px;
    max-height: 173px;
    margin-top: 20px;
  }

  &__tooltip {
    pointer-events: none;
    position: absolute;
    z-index: 1;
    width: 150px;
    text-align: center;
    background: #1a1f34;
    border: 1px solid var(--color);
    padding: 8px;
    font-size: 0.75rem;
    box-sizing: border-box;
    border-radius: 36px;
  }

  &__tooltip-value {
    font-size: 1rem;
    font-weight: 500;

    img {
      width: 23px;
      height: 23px;
      margin-bottom: -7px;
    }
  }

  &--desktop {
    --height: 300px;

    min-width: 100%;
    max-width: 100%;
    min-height: var(--height);
    max-height: var(--height);

    .game-chart__chart {
      min-height: unset;
      max-height: unset;
      margin-top: 0;
      width: calc(100% + 35px);
      height: calc(var(--height) - 11px);
    }
  }
}
</style>
