<template>
  <v-form class="auth-form__wrapper" v-if="!showModal">
    <!-- Header -->
    <heading-auth :close="true">{{
      $t('auth.forgot-password.title')
    }}</heading-auth>

    <div class="auth-content">
      <!-- Reset password -->
      <validation-provider
        v-slot="{ errors }"
        rules="required"
        :name="$t('fields.phone-or-email.title')"
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
        @click="open"
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
  <base-modal v-else v-model="showModal" title="Link has been sent">
    <p class="mb-12 font-weight-thin text-subtitle-2">
      We have sent a password reset link to your email
      <span class="font-weight-bold"> zluchkayaaa@gmail.com </span>
      Please, check your email
      <span class="d-block"> and press the link </span>
    </p>
    <v-btn :to="{ name: 'auth-sign-in' }" text class="ml-n4">
      <span class="text-uppercase mr-1">ok, thanks </span>
      <v-icon small>$linkArrow</v-icon>
    </v-btn>
  </base-modal>
</template>

<script>
import HeadingAuth from '~/components/HeadingAuth.vue'
import BaseInputField from '~/components/Fields/BaseInput.vue'
import layoutMixin from '~/mixins/layout'
import BaseModal from '~/components/BaseModal.vue'

export default {
  name: 'ForgotPasswordPage',
  components: {
    HeadingAuth,
    BaseInputField,
    BaseModal,
  },
  mixins: [layoutMixin],
  middleware: 'guest',
  data() {
    return {
      phoneOrEmail: '',
      showModal: false,
    }
  },
  head() {
    return {
      title: this.$t('auth.forgot-password.title'),
    }
  },
  methods: {
    open() {
      this.showModal = true
    },
  },
}
</script>
