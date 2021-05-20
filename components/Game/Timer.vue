<template>
  <div class="game-timer">
    <div class="game-timer__value">
      <span class="game-timer__text">
        <span v-for="[v, i] of seconds" :key="i" v-text="v" />
      </span>
      <span class="game-timer__line" />
      <span class="game-timer__text">
        <span v-for="[v, i] of miliseconds" :key="i" v-text="v"
      /></span>
    </div>
    <svg class="game-timer__svg" :fill="color" viewBox="0 0 208 208">
      <g transform="translate(-63,-62)">
        <filter
          id="timer_a"
          color-interpolation-filters="sRGB"
          filterUnits="userSpaceOnUse"
          height="216"
          width="244"
          x="43"
          y="58"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            mode="normal"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx="16" dy="4" />
          <feGaussianBlur stdDeviation="14" />
          <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"
          />
          <feBlend in2="shape" mode="overlay" result="effect1_innerShadow" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx="-24" dy="-4" />
          <feGaussianBlur stdDeviation="10" />
          <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"
          />
          <feBlend
            in2="effect1_innerShadow"
            mode="overlay"
            result="effect2_innerShadow"
          />
        </filter>
        <filter
          id="timer_b"
          color-interpolation-filters="sRGB"
          filterUnits="userSpaceOnUse"
          height="156"
          width="156"
          x="81"
          y="81"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            mode="normal"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx="-16" dy="-16" />
          <feGaussianBlur stdDeviation="10" />
          <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"
          />
          <feBlend in2="shape" mode="overlay" result="effect1_innerShadow" />
        </filter>
        <filter
          id="timer_c"
          color-interpolation-filters="sRGB"
          filterUnits="userSpaceOnUse"
          height="333"
          width="333"
          x="0"
          y="0"
        >
          <feGaussianBlur stdDeviation="9.45563" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.7 0"
          />
          <feBlend
            in2="effect1_dropShadow"
            mode="normal"
            result="effect2_dropShadow"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow"
            mode="normal"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="3.66058" />
          <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"
          />
          <feBlend in2="shape" mode="normal" result="effect3_innerShadow" />
          <feGaussianBlur
            result="effect4_foregroundBlur"
            stdDeviation=".675402"
          />
        </filter>
        <radialGradient
          id="timer_d"
          cx="0"
          cy="0"
          gradientTransform="matrix(-104 0 0 -104 167 166)"
          gradientUnits="userSpaceOnUse"
          r="1"
        >
          <stop offset="0" stop-color="#18283f" />
          <stop offset=".551687" stop-color="#1d2b5d" />
          <stop offset="1" stop-color="#2e3e72" />
        </radialGradient>
        <radialGradient
          id="timer_e"
          cx="0"
          cy="0"
          gradientTransform="matrix(56.45993027 130.16442754 -130.16442754 56.45993027 146.69 97)"
          gradientUnits="userSpaceOnUse"
          r="1"
        >
          <stop offset="0" stop-color="#0f1c2c" />
          <stop offset=".76607" stop-color="#1e2c43" />
          <stop offset=".9999" stop-color="#fba746" />
        </radialGradient>
        <g filter="url(#timer_a)">
          <circle cx="167" cy="166" fill="url(#timer_d)" r="104" />
        </g>
        <g filter="url(#timer_b)">
          <circle cx="167" cy="167" fill="url(#timer_e)" r="70" />
        </g>
        <g filter="url(#timer_c)">
          <circle cx="216.5" cy="240.5" r="3.5" />
        </g>
        <g filter="url(#timer_c)">
          <circle cx="229.5" cy="230.5" r="3.5" />
        </g>
        <g filter="url(#timer_c)">
          <circle cx="241.5" cy="216.5" r="3.5" />
        </g>
        <g filter="url(#timer_c)">
          <circle cx="249.5" cy="201.5" r="3.5" />
        </g>
        <g filter="url(#timer_c)">
          <circle cx="254.5" cy="184.5" r="3.5" />
        </g>
        <g filter="url(#timer_c)">
          <circle cx="255.5" cy="166.5" r="3.5" />
        </g>
        <g filter="url(#timer_c)">
          <circle cx="253.5" cy="149.5" r="3.5" />
        </g>
        <g filter="url(#timer_c)">
          <circle cx="249.5" cy="133.5" r="3.5" />
        </g>
        <g filter="url(#timer_c)">
          <circle cx="240.5" cy="117.5" r="3.5" />
        </g>
        <g filter="url(#timer_c)">
          <circle cx="229.5" cy="103.5" r="3.5" />
        </g>
        <g filter="url(#timer_c)">
          <circle cx="216.5" cy="93.5" r="3.5" />
        </g>
        <g filter="url(#timer_c)">
          <circle cx="200.5" cy="84.5" r="3.5" />
        </g>
        <g filter="url(#timer_c)">
          <circle cx="184.5" cy="79.5" r="3.5" />
        </g>
        <g filter="url(#timer_c)">
          <circle cx="167.5" cy="77.5" r="3.5" />
        </g>
        <g filter="url(#timer_c)">
          <circle cx="149.5" cy="79.5" r="3.5" />
        </g>
        <g filter="url(#timer_c)">
          <circle cx="133.5" cy="84.5" r="3.5" />
        </g>
        <g filter="url(#timer_c)">
          <circle cx="117.5" cy="92.5" r="3.5" />
        </g>
        <g filter="url(#timer_c)">
          <circle cx="104.5" cy="103.5" r="3.5" />
        </g>
        <g filter="url(#timer_c)">
          <circle cx="92.5" cy="117.5" r="3.5" />
        </g>
        <g filter="url(#timer_c)">
          <circle cx="84.5" cy="132.5" r="3.5" />
        </g>
        <g filter="url(#timer_c)">
          <circle cx="79.5" cy="149.5" r="3.5" />
        </g>
        <g filter="url(#timer_c)">
          <circle cx="77.5" cy="166.5" r="3.5" />
        </g>
        <g filter="url(#timer_c)">
          <circle cx="79.5" cy="184.5" r="3.5" />
        </g>
        <g filter="url(#timer_c)">
          <circle cx="84.5" cy="200.5" r="3.5" />
        </g>
        <g filter="url(#timer_c)">
          <circle cx="92.5" cy="216.5" r="3.5" />
        </g>
        <g filter="url(#timer_c)">
          <circle cx="103.5" cy="229.5" r="3.5" />
        </g>
        <g filter="url(#timer_c)">
          <circle cx="117.5" cy="241.5" r="3.5" />
        </g>
        <g filter="url(#timer_c)">
          <circle cx="132.5" cy="249.5" r="3.5" />
        </g>
        <g filter="url(#timer_c)">
          <circle cx="149.5" cy="253.5" r="3.5" />
        </g>
        <g filter="url(#timer_c)">
          <circle cx="166.5" cy="255.5" r="3.5" />
        </g>
        <g filter="url(#timer_c)">
          <circle cx="184.5" cy="253.5" r="3.5" />
        </g>
        <g filter="url(#timer_c)">
          <circle cx="200.5" cy="248.5" r="3.5" />
        </g>
      </g>
    </svg>
    <h6 v-if="!$game.canAcceptBet" class="text-h6 mt-2">
      {{ $t('game.make-bet.off-title') }}
    </h6>
  </div>
</template>

<script>
export default {
  name: 'GameTimer',
  components: {},
  computed: {
    hasBet() {
      return !!this.$game.bet?.status
    },
    color() {
      if (this.hasBet && this.$game.bet?.team === 'predictDown') {
        return 'red'
      } else if (this.hasBet && this.$game.bet?.team === 'predictUp') {
        return 'green'
      }
      return 'white'
    },
    seconds() {
      return String(Math.ceil(this.$game.left / 1000))
        .padStart(2, '0')
        .slice('')
    },
    miliseconds() {
      return String(this.$game.left / 1000)
        .replace(/\d+\./, '')
        .substr(0, 2)
        .padStart(2, '0')
        .slice('')
    },
  },
}
</script>

<style lang="scss">
.game-timer {
  position: relative;
  max-width: 208px;
  max-height: 208px;
  text-align: center;
  margin: 0 auto;

  &__svg {
    width: 100%;
  }

  &__value {
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: bold;
    font-size: 2.25rem;
    line-height: 114%;
    color: rgba(255, 255, 255, 0.9);
    text-shadow: 0 0 18.2712px rgba(49, 119, 255, 0.7),
      0 0 70.7336px rgba(49, 119, 255, 0.5);
  }

  &__text {
    display: block;
    height: 42px;
    > span {
      display: inline-block;
      text-align: center;
      width: 25px;
    }
  }

  &__line {
    display: inline-block;
    width: 56px;
    height: 4px;
    background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.8),
        rgba(255, 255, 255, 0.8)
      ),
      linear-gradient(180deg, #fff 0%, rgba(255, 255, 255, 0) 100%);
    filter: blur(1.3508px);
    border-radius: 34px;
  }
}
</style>
