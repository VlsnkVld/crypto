<template>
  <v-form>
    <!-- Header -->
    <heading>{{ $t('auth.forgot-password.title') }}</heading>

    <div class="page-content">
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
      <div class="text-center mt-4">
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
import Heading from '~/components/Heading.vue'
import BaseInputField from '~/components/Fields/BaseInput.vue'
import layoutMixin from '~/mixins/layout'

export default {
  name: 'ForgotPasswordPage',
  components: {
    Heading,
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
