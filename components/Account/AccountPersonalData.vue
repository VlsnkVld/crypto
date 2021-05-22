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
  </v-card>
</template>

<script>
import BaseInputField from '~/components/Fields/BaseInput.vue'

export default {
  name: 'AccountPersonalData',
  components: { BaseInputField },
  data() {
    return {
      userNickname: 'zluchkayaaa',
      userFirstName: '',
      userLastName: '',
      userEmail: '',
    }
  },
}
</script>
