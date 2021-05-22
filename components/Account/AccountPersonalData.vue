<template>
  <v-card class="pa-9 blue-transparent-bg">
    <v-card-title class="account-section__header pa-0 mb-9"
      >Personal Data</v-card-title
    >
    <v-row class="ma-n2">
      <v-col class="pa-2">аывпы</v-col>
      <v-col class="pa-2">
        <base-input-field
          v-model="userNickname"
          id-text="nickname-field"
          name="nickname-field"
          class="mb-4"
          :hide-details="true"
          label="Your nickname"
          placeholder="Your nickname"
        ></base-input-field>
        <base-input-field
          v-model="userFirstName"
          id-text="first-name-field"
          name="first-name-field"
          class="mb-4"
          :hide-details="true"
          label="First name"
          placeholder="Your first name"
        ></base-input-field>
        <base-input-field
          v-model="userLastName"
          id-text="last-name-field"
          name="last-name-field"
          :hide-details="true"
          label="Last name"
          placeholder="Your last name"
        ></base-input-field>
      </v-col>
      <v-col class="pa-2">
        <base-input-field
          v-model="userEmail"
          id-text="email-field"
          name="email-field"
          class="mb-4"
          :hide-details="true"
          label="Your email"
          placeholder="Your email"
        ></base-input-field>
      </v-col>
    </v-row>
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
  </v-card>
</template>

<script>
import ConfirmModal from '~/components/Modals/ConfirmModal.vue'
import BaseInputField from '~/components/Fields/BaseInput.vue'

export default {
  name: 'AccountPersonalData',
  components: { BaseInputField, ConfirmModal },
  data() {
    return {
      userNickname: 'zluchkayaaa',
      userFirstName: '',
      userLastName: '',
      userEmail: '',
      showConfirmModal: false,
    }
  },
}
</script>

<style lang="scss" scoped>
.modal-button {
  text-transform: none !important;
}
</style>
