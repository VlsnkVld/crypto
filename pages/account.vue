<template>
  <div class="py-9">
    <account-header class="mb-2" />
    <account-personal-data class="mb-6" />
    <account-security />
  </div>
</template>

<script>
import AccountHeader from '~/components/Account/AccountHeader.vue'
import AccountPersonalData from '~/components/Account/AccountPersonalData.vue'
import AccountSecurity from '~/components/Account/AccountSecurity.vue'

export default {
  name: 'Account',
  components: { AccountHeader, AccountPersonalData, AccountSecurity },
}
</script>
