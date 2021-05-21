<template>
  <validation-observer ref="observer" v-slot="{ invalid }">
    <form class="auth-form__wrapper" @submit.prevent="submit">
      <!-- Header -->
      <heading-auth :close="true">{{ $t('auth.register.title') }}</heading-auth>

      <div class="auth-content">
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
            color="#fff"
            :error-messages="errors"
            :false-value="null"
          >
            <template #label>
              <span class="white--text text-body-2">
                {{ $t('auth.sign-up.fields.age.label') }}
              </span>
            </template>
          </v-checkbox>
        </validation-provider>

        <!-- Flag: Politics  -->
        <validation-provider
          v-slot="{ errors }"
          rules="required"
          :name="$t('auth.sign-up.fields.politics.title')"
        >
          <v-checkbox
            v-model="politics"
            color="#fff"
            class="mt-0"
            :error-messages="errors"
            :false-value="null"
          >
            <template #label>
              <span class="white--text text-body-2">
                {{ $t('auth.sign-up.fields.politics.accept') }}
                <nuxt-link :to="{ path: '/' }" class="policy-link">
                  {{ $t('auth.sign-up.fields.politics.terms') }}
                </nuxt-link>
                {{ $t('auth.sign-up.fields.politics.and') }}
                <nuxt-link :to="{ path: '/' }" class="policy-link">
                  {{ $t('auth.sign-up.fields.politics.policy') }}
                </nuxt-link>
              </span>
            </template>
          </v-checkbox>
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
        <div class="text-center mt-10">
          <!-- Sign In -->
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

<style lang="scss" scoped>
.policy-link {
  color: var(--primary-color);
}
</style>
