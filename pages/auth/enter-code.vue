<template>
  <v-form class="auth-form__wrapper">
    <!-- Header -->
    <heading-auth :close="true">{{ $t('auth.enter-code.title') }}</heading-auth>
    <p class="text-caption mt-2 mb-4 text-center font-weight-light">
      {{ $t('auth.enter-code.sent') }}
    </p>
    <div class="auth-content">
      <!-- Enter code -->
      <validation-provider
        v-slot="{ errors }"
        rules="required"
        :name="$t('fields.enter-code.title')"
      >
        <base-input-field
          v-model="code"
          id-text="enter-code-input"
          name="enter-code-input"
          :label="$t('fields.enter-code.title')"
          :placeholder="$t('fields.enter-code.placeholder.your')"
          :error-messages="errors"
        />
      </validation-provider>
      <!-- Enter new password -->
      <validation-provider
        v-slot="{ errors }"
        rules="min:8|required"
        :name="$t('fields.password.placeholder.new')"
      >
        <password-field
          v-model="newPassword"
          id-text="new-password-input"
          name="new-password-input"
          :label="$t('fields.password.placeholder.new')"
          :placeholder="$t('fields.password.placeholder.new')"
          :error-messages="errors"
        />
      </validation-provider>
      <!-- Repeat new password -->
      <validation-provider
        v-slot="{ errors }"
        rules="min:8|required"
        :name="$t('fields.repeat-password.title')"
      >
        <password-field
          v-model="newPasswordRepeat"
          id-text="new-password-input"
          name="new-password-input"
          :label="$t('fields.repeat-password.title')"
          :placeholder="$t('fields.password.placeholder.repeat-new')"
          :error-messages="errors"
        />
      </validation-provider>
      <!-- Submit -->
      <v-btn
        block
        rounded
        large
        class="v-btn--brand"
        :disabled="code.length === 0"
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
          :to="{ name: 'auth-forgot-password' }"
          text
          nuxt
          class="text-decoration-underline pa-0"
        >
          {{ $t('auth.enter-code.send-again') }}
        </v-btn>
      </div>
    </div>
  </v-form>
</template>

<script>
import HeadingAuth from '~/components/HeadingAuth.vue'
import BaseInputField from '~/components/Fields/BaseInput.vue'
import PasswordField from '~/components/Fields/Password.vue'
import layoutMixin from '~/mixins/layout'

export default {
  name: 'EnterCodePage',
  components: {
    HeadingAuth,
    BaseInputField,
    PasswordField,
  },
  mixins: [layoutMixin],
  middleware: 'guest',
  data() {
    return {
      code: '',
      newPassword: '',
      newPasswordRepeat: '',
    }
  },
  head() {
    return {
      title: this.$t('auth.enter-code.title'),
    }
  },
}
</script>
