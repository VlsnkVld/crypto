<template>
  <div>
    <v-card>
      <v-card-title>65465</v-card-title>
    </v-card>

    <confirm-modal
      v-model="showConfirmModal"
      title="Confirm phone number"
      :width="495"
    >
      <div class="text-center mt-10">
        <v-btn small>
          <v-icon>$complete</v-icon>
        </v-btn>

        <v-btn text class="text-decoration-underline text- pa-0 modal-button">
          Didn't get the code? Send again
        </v-btn>
      </div>
    </confirm-modal>
  </div>
</template>

<script>
import ConfirmModal from '~/components/Modals/ConfirmModal.vue'

export default {
  name: 'AccountPersonalData',
  components: {
    ConfirmModal,
  },
  data() {
    return {
      showConfirmModal: false,
    }
  },
  mounted() {
    // this.showConfirmModal = true
  },
}
</script>

<style lang="scss" scoped>
.modal-button {
  text-transform: none !important;
}
</style>
