<template>
  <validation-observer ref="observer" v-slot="{ invalid }">
    <form @submit.prevent="submit">
      <!-- Header -->
      <heading>{{ $t('auth.register.title') }}</heading>

      <div class="page-content">
        <!-- Phone -->
        <validation-provider
          v-slot="{ errors }"
          rules="phone|required"
          :name="$t('fields.phone.title.default')"
        >
          <phone-field
            v-model="phone"
            id-text="register-input-phone"
            :error-messages="errors"
          />
        </validation-provider>

        <!-- Password -->
        <validation-provider
          v-slot="{ errors }"
          rules="min:8|required"
          :name="$t('fields.password.title.default')"
        >
          <password-field
            v-model="password"
            id-text="register-input-password"
            :placeholder="$t('fields.password.placeholder.your')"
            :error-messages="errors"
          />
        </validation-provider>

        <!-- Repeat Password -->
        <validation-provider
          v-slot="{ errors }"
          rules="min:8|required"
          :name="$t('fields.repeat-password.title')"
        >
          <password-field
            v-model="repeatPassword"
            id-text="register-input-repeat-password"
            :label="$t('fields.repeat-password.title')"
            :placeholder="$t('fields.repeat-password.placeholder.your')"
            :error-messages="errors"
          />
        </validation-provider>

        <!-- Flag: Age  -->
        <validation-provider
          v-slot="{ errors }"
          rules="required"
          :name="$t('auth.sign-up.fields.age.title')"
        >
          <v-checkbox
            v-model="age"
            :error-messages="errors"
            :label="$t('auth.sign-up.fields.age.label')"
            :false-value="null"
          />
        </validation-provider>

        <!-- Flag: Politics  -->
        <validation-provider
          v-slot="{ errors }"
          rules="required"
          :name="$t('auth.sign-up.fields.politics.title')"
        >
          <v-checkbox
            v-model="politics"
            :error-messages="errors"
            :label="$t('auth.sign-up.fields.politics.label')"
            :false-value="null"
          />
        </validation-provider>

        <!-- Submit -->
        <v-btn
          type="submit"
          block
          rounded
          large
          class="v-btn--brand mt-4"
          :disabled="invalid"
          :loading="$auth.loading"
        >
          {{ $t('auth.register.alternative-title') }}
        </v-btn>

        <!-- Links -->
        <div class="text-center mt-4">
          <!-- Sign In -->
          <v-btn
            :to="{ name: 'auth-sign-in' }"
            text
            nuxt
            class="mt-4 text-decoration-underline"
          >
            {{ $t('auth.log-in.title') }}
          </v-btn>
        </div>
      </div>
    </form>
  </validation-observer>
</template>

<script>
import Heading from '~/components/Heading.vue'
import PhoneField from '~/components/Fields/Phone.vue'
import PasswordField from '~/components/Fields/Password.vue'
import layoutMixin from '~/mixins/layout'

export default {
  name: 'SignInPage',
  components: {
    Heading,
    PhoneField,
    PasswordField,
  },
  mixins: [layoutMixin],
  middleware: 'guest',
  data() {
    return {
      phone: '',
      password: '',
      repeatPassword: '',
      age: null,
      politics: null,
    }
  },
  head() {
    return {
      title: this.$t('auth.sign-up.title'),
    }
  },
  methods: {
    async submit() {
      if (await this.$refs.observer.validate()) {
        this.$auth.signUp({
          phone: this.phone,
          password: this.password,
        })
      }
    },
  },
}
</script>
