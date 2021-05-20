<template>
  <v-form>
    <!-- Header -->
    <heading>{{ $t('auth.forgot-password.title') }}</heading>

    <div class="page-content">
      <!-- Phone -->
      <phone-field v-model="phone" />
      <!-- Submit -->
      <v-btn type="submit" block rounded large class="v-btn--brand">
        {{ $t('auth.sign-in.submit') }}
      </v-btn>
      <!-- Links -->
      <div class="text-center mt-4">
        <v-btn :to="{ name: 'auth.forgot-password' }" text nuxt>
          {{ $t('auth.forgot-password.title') }}?
        </v-btn>
      </div>
    </div>
  </v-form>
</template>

<script>
import Heading from '~/components/Heading.vue'
import PhoneField from '~/components/Fields/Phone.vue'
import layoutMixin from '~/mixins/layout'

export default {
  name: 'ForgotPasswordPage',
  components: {
    Heading,
    PhoneField,
  },
  mixins: [layoutMixin],
  middleware: 'guest',
  data() {
    return {
      phone: '',
    }
  },
  head() {
    return {
      title: this.$t('auth.forgot-password.title'),
    }
  },
}
</script>
