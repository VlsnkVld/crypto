<template>
  <div class="pt-9">
    <account-header class="mb-2" />
    <account-personal-data class="mb-6" />
    <account-security class="mb-6" />
    <account-confirmation />
  </div>
</template>

<script>
import AccountHeader from '~/components/Account/AccountHeader.vue'
import AccountPersonalData from '~/components/Account/AccountPersonalData.vue'
import AccountSecurity from '~/components/Account/AccountSecurity.vue'
import AccountConfirmation from '~/components/Account/AccountConfirmation.vue'

export default {
  name: 'Account',
  components: {
    AccountHeader,
    AccountPersonalData,
    AccountSecurity,
    AccountConfirmation,
  },
}
</script>
