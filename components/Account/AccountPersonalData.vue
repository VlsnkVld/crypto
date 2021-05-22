<template>
  <v-card class="pa-9 blue-transparent-bg">
    <v-card-title class="account-section__header pa-0 mb-9"
      >Personal Data</v-card-title
    >
    <v-form>
      <v-row class="ma-n2">
        <v-col class="pa-2">
          <account-photo />
        </v-col>
        <v-col class="pa-2">
          <base-input-field
            v-model="userNickname"
            id-text="nickname-field"
            name="nickname-field"
            class="mb-4"
            :hide-details="true"
            label="Your nickname"
            placeholder="Your nickname"
          />
          <base-input-field
            v-model="userFirstName"
            id-text="first-name-field"
            name="first-name-field"
            class="mb-4"
            :hide-details="true"
            label="First name"
            placeholder="Your first name"
          />
          <base-input-field
            v-model="userLastName"
            id-text="last-name-field"
            name="last-name-field"
            :hide-details="true"
            label="Last name"
            placeholder="Your last name"
          />
        </v-col>
        <v-col class="pa-2">
          <!-- Email -->
          <base-input-field
            v-model="userEmail"
            id-text="email-field"
            name="email-field"
            class="mb-4"
            :hide-details="true"
            :confirm-status="'confirmed'"
            label="Your email"
            placeholder="Your email"
          />
          <!-- Birth date -->
          <div class="mb-4">
            <input-label text="Birth date" />
            <v-row class="ma-n2">
              <v-col cols="3" class="pa-2">
                <v-select
                  v-model="birthDay"
                  class="auth-input"
                  :items="days"
                  :hide-details="hideDetails"
                  outlined
                  solo
                  height="48"
                  background-color="transparent"
                />
              </v-col>
              <v-col cols="5" class="pa-2">
                <v-select
                  v-model="birthMonth"
                  class="auth-input"
                  :items="month"
                  :hide-details="hideDetails"
                  outlined
                  solo
                  height="48"
                  background-color="transparent"
                />
              </v-col>
              <v-col cols="4" class="pa-2">
                <v-select
                  v-model="birthYear"
                  class="auth-input"
                  :items="years"
                  :hide-details="hideDetails"
                  outlined
                  solo
                  height="48"
                  background-color="transparent"
                />
              </v-col>
            </v-row>
          </div>
          <!-- Phone -->
          <validation-provider
            v-slot="{ errors }"
            rules="phone|required"
            name="$t('fields.phone.title.default')"
          >
            <phone-field
              v-model="userPhone"
              id-text="account-input-phone"
              :error-messages="errors"
              :confirm-status="'confirmed'"
              label="Your phone number"
            />
          </validation-provider>
        </v-col>
      </v-row>
      <v-row class="ma-n2">
        <v-col class="ml-auto pa-2" cols="4">
          <v-btn
            type="submit"
            block
            rounded
            large
            class="v-btn--brand"
            :disabled="true"
          >
            Save
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
    <confirm-modal
      v-model="showConfirmModal"
      title="Confirm phone number"
      :width="495"
    >
      <div>
        <div class="d-flex align-end mb-2">
          <base-input-field
            v-model="codeNumber"
            id-text="code-field"
            name="code-field"
            :hide-details="true"
            label="Code"
            placeholder="Code from sms"
            class="flex-grow-1 mr-3"
          />
          <v-btn
            class="v-btn--brand flex-shrink-0"
            width="48px"
            height="48px"
            min-width="auto"
            :disabled="isDisabled"
          >
            <v-icon>$complete</v-icon>
          </v-btn>
        </div>
        <div class="text-center">
          <v-btn text class="text-decoration-underline button-modal">
            Didn't get the code? Send again
          </v-btn>
        </div>
      </div>
    </confirm-modal>
  </v-card>
</template>

<script>
import ConfirmModal from '~/components/Modals/ConfirmModal.vue'
import BaseInputField from '~/components/Fields/BaseInput.vue'
import AccountPhoto from '~/components/Account/AccountPhoto.vue'
import PhoneField from '~/components/Fields/Phone.vue'
import InputLabel from '~/components/Fields/InputLabel.vue'

export default {
  name: 'AccountPersonalData',
  components: {
    BaseInputField,
    ConfirmModal,
    AccountPhoto,
    PhoneField,
    InputLabel,
  },
  data() {
    return {
      userNickname: 'zluchkayaaa',
      userFirstName: '',
      userLastName: '',
      userEmail: '',
      userPhone: '+380637985548',
      codeNumber: '',
      showConfirmModal: false,
      birthDay: 1,
      days: [1, 2, 3, 4, 5, 6, 7],
      birthMonth: 'Jan',
      month: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sept',
        'Oct',
        'Nov',
        'Dec',
      ],
      birthYear: 2003,
      years: [2000, 2001, 2002, 2003, 2004, 2005, 2006],
    }
  },
  computed: {
    isDisabled() {
      return this.codeNumber.length <= 0
    },
  },
}
</script>

<style lang="scss" scoped>
.button {
  &-complete {
    background-color: #adb3bc !important;
  }

  &-modal {
    text-transform: none !important;
  }
}
</style>
