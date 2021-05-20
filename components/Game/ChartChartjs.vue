<script>
import { Line, mixins } from 'vue-chartjs'

export default {
  extends: Line,
  mixins: [mixins.reactiveProp],
  // eslint-disable-next-line vue/require-prop-types
  props: ['chartData', 'options'],
  mounted() {
    this.renderChart(this.chartData, this.options)
  },
}
</script>
