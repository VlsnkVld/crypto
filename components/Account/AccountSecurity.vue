<template>
  <v-card class="pa-9 blue-transparent-bg">
    <v-card-title class="account-section__header pa-0 mb-7">
      <span>Security</span>
      <v-btn
        :to="{ name: 'auth-forgot-password' }"
        text
        nuxt
        class="text-decoration-underline ml-auto"
      >
        {{ $t('auth.forgot-password.title') }}?
      </v-btn>
    </v-card-title>
    <v-form>
      <v-row class="ma-n2 mb-n4">
        <v-col class="pa-2">
          <validation-provider
            v-slot="{ errors }"
            rules="min:8|required"
            name="Your current password"
          >
            <password-field
              v-model="currentPassword"
              id-text="account-current-password"
              label="Your current password"
              placeholder="Your current password"
              :error-messages="errors"
            />
          </validation-provider>
        </v-col>
        <v-col class="pa-2">
          <validation-provider
            v-slot="{ errors }"
            rules="min:8|required"
            name="Your current password"
          >
            <password-field
              v-model="newPassword"
              id-text="account-new-password"
              label="Your new password"
              placeholder="Your new password"
              :error-messages="errors"
            />
          </validation-provider>
        </v-col>
        <v-col class="pa-2">
          <validation-provider
            v-slot="{ errors }"
            rules="min:8|required"
            name="Your current password"
          >
            <password-field
              v-model="repeatNewPassword"
              id-text="repeat-new-password"
              label="Repeat your new password"
              placeholder="Repeat your new password"
              :error-messages="errors"
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
            height="48"
            :disabled="true"
          >
            Save
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-card>
</template>

<script>
import PasswordField from '~/components/Fields/Password.vue'

export default {
  name: 'AccountSecurity',
  components: { PasswordField },
  data() {
    return {
      currentPassword: '',
      newPassword: '',
      repeatNewPassword: '',
    }
  },
}
</script>
