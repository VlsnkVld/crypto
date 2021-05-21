<template>
  <v-form class="auth-form__wrapper">
    <!-- Header -->
    <heading-auth :close="true">{{
      $t('auth.forgot-password.title')
    }}</heading-auth>

    <div class="auth-content">
      <!-- Reset password -->
      <validation-provider
        v-slot="{ errors }"
        rules="required"
        name="forgot-input-main"
      >
        <base-input-field
          v-model="phoneOrEmail"
          id-text="forgot-input-main"
          name="forgot-input-main"
          :error-messages="errors"
        />
      </validation-provider>
      <!-- Submit -->
      <v-btn
        block
        rounded
        large
        class="v-btn--brand"
        :disabled="phoneOrEmail.length === 0"
      >
        {{
          $t('auth.forgot-password.button.reset') ||
          $t('auth.forgot-password.button.send') ||
          $t('auth.forgot-password.button.link')
        }}
      </v-btn>
      <!-- Links -->
      <div class="text-center mt-10">
        <v-btn
          :to="{ name: 'auth-sign-in' }"
          text
          nuxt
          class="text-decoration-underline"
        >
          {{ $t('auth.log-in.title') }}
        </v-btn>
      </div>
    </div>
  </v-form>
</template>

<script>
import HeadingAuth from '~/components/HeadingAuth.vue'
import BaseInputField from '~/components/Fields/BaseInput.vue'
import layoutMixin from '~/mixins/layout'

export default {
  name: 'ForgotPasswordPage',
  components: {
    HeadingAuth,
    BaseInputField,
  },
  mixins: [layoutMixin],
  middleware: 'guest',
  data() {
    return {
      phoneOrEmail: '',
    }
  },
  head() {
    return {
      title: this.$t('auth.forgot-password.title'),
    }
  },
}
</script>
