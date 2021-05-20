<template>
  <div class="paymethods-list">
    <div
      v-for="item in list"
      :key="item.key"
      :data-method="item.key"
      class="paymethods-list__item"
      @click="$emit('change', item)"
    >
      <v-row>
        <v-col>
          <h3 class="text-h5">{{ item.title }}</h3>
          <!-- eslint-disable-next-line vue/no-v-html -->
          <span class="text-subtitle-1" v-html="item.subtitle" />
        </v-col>
        <v-col class="paymethods-list__images" cols="auto">
          <img v-for="image in item.images" :key="image" :src="image" />
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import CardWithdraw from './CardWithdraw.vue'

export default {
  name: 'WithdrawList',
  props: {
    short: {
      type: Boolean,
      default: () => false,
    },
  },
  data() {
    return {
      list: [
        {
          key: 'card',
          title: 'Card',
          subtitle:
            '3% <span class="primary--text">&middot;</span> 15 min - 12 h',
          component: CardWithdraw,
          images: [
            require('~/static/images/paymethods/visa.svg'),
            require('~/static/images/paymethods/mastercard.png'),
          ],
        },
        {
          key: 'litecoin',
          title: 'Litecoin',
          subtitle: '15 min - 12 h',
          component: CardWithdraw,
          images: [require('~/static/images/paymethods/litecoin.png')],
        },
        {
          key: 'bitcoin',
          title: 'Bitcoin',
          subtitle: '15 min - 12 h',
          component: CardWithdraw,
          images: [require('~/static/images/paymethods/bitcoin.png')],
        },
        {
          key: 'ethereum',
          title: 'Ethereum',
          subtitle: '15 min - 12 h',
          component: CardWithdraw,
          images: [require('~/static/images/paymethods/ethereum.png')],
        },
      ],
    }
  },
}
</script>
