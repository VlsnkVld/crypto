<template>
  <validation-observer ref="observer" v-slot="{ invalid }">
    <form class="auth-form__wrapper" @submit.prevent="submit">
      <!-- Header -->
      <heading-auth :close="true">{{ $t('auth.log-in.title') }}</heading-auth>

      <div class="auth-content">
        <!-- Phone -->
        <validation-provider
          v-slot="{ errors }"
          rules="phone|required"
          :name="$t('fields.phone.title.default')"
        >
          <phone-field
            v-model="phone"
            id-text="login-input-phone"
            :error-messages="errors"
          />
        </validation-provider>

        <!-- Password -->
        <validation-provider
          v-slot="{ errors }"
          rules="required"
          :name="$t('fields.password.title.default')"
        >
          <password-field
            v-model="password"
            id-text="login-input-password"
            :placeholder="$t('fields.password.placeholder.your')"
            :error-messages="errors"
          />
        </validation-provider>

        <!-- Submit -->
        <v-btn
          type="submit"
          block
          rounded
          large
          class="v-btn--brand"
          :disabled="invalid"
          :loading="$auth.loading"
        >
          {{ $t('auth.log-in.title') }}
        </v-btn>

        <!-- Links -->
        <div class="text-center mt-4">
          <!-- Forgot password -->
          <v-btn
            :to="{ name: 'auth-forgot-password' }"
            text
            nuxt
            class="text-decoration-underline"
          >
            {{ $t('auth.forgot-password.title') }}?
          </v-btn>

          <v-spacer />

          <!-- Sign Up -->
          <v-btn
            :to="{ name: 'auth-sign-up' }"
            text
            nuxt
            class="mt-16 text-decoration-underline"
          >
            {{ $t('auth.sign-up.alternative-title') }}
          </v-btn>
        </div>
      </div>
    </form>
  </validation-observer>
</template>

<script>
import HeadingAuth from '~/components/HeadingAuth.vue'
import PhoneField from '~/components/Fields/Phone.vue'
import PasswordField from '~/components/Fields/Password.vue'
import layoutMixin from '~/mixins/layout'

export default {
  name: 'SignInPage',
  components: {
    HeadingAuth,
    PhoneField,
    PasswordField,
  },
  mixins: [layoutMixin],
  middleware: 'guest',
  data() {
    return {
      phone: '',
      password: '',
    }
  },
  head() {
    return {
      title: this.$t('auth.sign-in.title'),
    }
  },
  methods: {
    async submit() {
      if (await this.$refs.observer.validate()) {
        this.$auth.signIn(this.phone, this.password)
      }
    },
  },
}
</script>
