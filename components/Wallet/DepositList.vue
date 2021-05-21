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
          <span class="text-subtitle-1">{{ item.subtitle }}</span>
        </v-col>
        <v-col class="paymethods-list__images" cols="auto">
          <img v-for="image in item.images" :key="image" :src="image" />
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import BtcDeposit from './BtcDeposit.vue'
import CardDeposit from './CardDeposit.vue'

export default {
  name: 'DepositList',
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
          subtitle: 'Instantly',
          component: CardDeposit,
          images: [
            require('~/static/images/paymethods/visa.svg'),
            require('~/static/images/paymethods/mastercard.png'),
          ],
        },
        {
          key: 'apple-pay',
          title: 'ApplePay',
          subtitle: 'Instantly',
          component: BtcDeposit,
          images: [require('~/static/images/paymethods/apple-pay.png')],
        },
        {
          key: 'bitcoin-cash',
          title: 'Bitcoin Cash',
          iso: 'BCH',
          address: 'qpl3t8q65mn9jwjlsgkzt87yt2wr49tgxsjlcamfaz',
          subtitle: 'Instantly',
          component: BtcDeposit,
          qrcode: [require('~/static/images/paymethods/qr-bch.jpg')],
          images: [require('~/static/images/paymethods/bitcoin-cash.svg')],
        },
        // {
        //   key: 'litecoin',
        //   title: 'Litecoin',
        //   subtitle: 'Instantly',
        //   component: BtcDeposit,
        //   images: [require('~/static/images/paymethods/litecoin.png')],
        // },
        {
          key: 'dogecoin',
          title: 'Doge',
          iso: 'DOGE',
          address: 'DJCqgoaqqvSRmv2A9jfhSPWs9eXWx6rSNu',
          subtitle: 'Instantly',
          component: BtcDeposit,
          qrcode: [require('~/static/images/paymethods/qr-doge.jpg')],
          images: [require('~/static/images/paymethods/dogecoin.png')],
        },
        {
          key: 'bitcoin',
          title: 'Bitcoin',
          iso: 'BTC',
          address: '1FxcHRdgFwwMkUD7rKMeeM5A4EfkFmvGjj',
          subtitle: 'Instantly',
          component: BtcDeposit,
          qrcode: [require('~/static/images/paymethods/qr-btc.jpg')],
          images: [require('~/static/images/paymethods/bitcoin.png')],
        },
        {
          key: 'ethereum',
          title: 'Ethereum',
          iso: 'ETH',
          address: '0x1104F303B623C00310a96DDc4004454a765c16a6',
          subtitle: 'Instantly',
          component: BtcDeposit,
          qrcode: [require('~/static/images/paymethods/qr-eth.jpg')],
          images: [require('~/static/images/paymethods/ethereum.png')],
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.paymethods-list {
  display: flex;
  flex-direction: column;

  &__item {
    background: #fdfdfd;
    border-radius: 4px;
    padding: 18px 16px;
    color: #000;
    margin: 0 16px 8px 16px;
    cursor: pointer;
  }

  &__images {
    margin-top: 8px;
    min-height: 68px;
    max-height: 68px;
    display: flex;
    align-items: center;
    margin-left: auto;

    img {
      max-height: var(--height, 100%);
      max-width: var(--width, 100%);
      object-fit: contain;
      margin-right: 16px;
    }
  }

  [data-method='card'] {
    img:first-child {
      --width: 44px;
      --height: 44px;
    }
    img:last-child {
      --width: 34px;
      --height: 27px;
    }
  }

  [data-method='apple-pay'] {
    --width: 76px;
    --height: 31px;
  }

  [data-method='bitcoin-cash'] {
    --width: 68px;
    --height: 68px;
  }

  [data-method='litecoin'] {
    --width: 100px;
    --height: 31px;
  }

  [data-method='bitcoin'] {
    --width: 114px;
    --height: 24px;
  }

  [data-method='ethereum'] {
    --width: 132px;
    --height: 33px;
  }
}
</style>
