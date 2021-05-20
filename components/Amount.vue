<template>
  <span class="amount align-center white--text">
    <animated-number
      :value="value"
      :format-value="formatValue"
      :duration="100"
    />
    <svg
      class="amount__icon primary--text"
      viewBox="0 0 19 21"
      width="19"
      height="21"
      fill="currentColor"
    >
      <path
        d="M5.00001 21H12.6321C20.0458 21 20.7187 13.0983 16.0367 11.588C20.3919 9.82726 20.2597 3 13.3629 3H5L5.00004 6.16957C7.10288 5.96998 8.66762 6.60196 10.7382 7.0412C11.1839 4.23138 16.1392 6.55468 17.9484 5.13946C16.8863 7.65927 13.0718 5.84152 13.354 7.8336C13.4639 8.42314 14.6493 10.0824 14.1294 11.5119C14.373 12.6212 14.575 14.0475 15.0608 14.5895C15.6549 15.252 15.0756 17.1601 13.5085 17.729C12.433 17.916 12.4687 17.1426 11.9533 16.8494C11.0457 16.336 9.98061 16.7021 8.64076 15.3502C6.40224 16.2932 6.71419 18.6086 5.00001 21ZM5.00004 11.5119C7.26976 10.6418 9.2795 10.149 12.13 10.5277C10.3936 9.64659 7.62775 9.08716 5.00004 9.41838V11.5119ZM5.00004 16.4707C7.60695 14.1426 8.46994 13.3027 12.13 12.1918C9.65085 11.981 7.21328 11.878 5.00001 13.2219C5 14.252 5.00004 15.3502 5.00004 16.4707Z"
      />
    </svg>
  </span>
</template>

<script>
import AnimatedNumber from 'animated-number-vue'

export default {
  name: 'Amount',
  components: {
    AnimatedNumber,
  },
  props: {
    value: {
      type: Number,
      required: true,
    },
  },
  methods: {
    formatValue(value) {
      return (Math.floor(value * 100) / 100).toLocaleString()
    },
  },
}
</script>

<style lang="scss">
.amount {
  display: inline-flex;
  font-size: 1.375rem;
  font-weight: 500;

  &__icon {
    font-size: 1rem;
    margin-left: 0.2em;
  }
}
</style>
