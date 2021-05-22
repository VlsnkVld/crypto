<template>
  <div class="py-9">
    <account-header class="mb-2" />
    <account-personal-data />
  </div>
</template>

<script>
import AccountHeader from '~/components/Account/AccountHeader.vue'
import AccountPersonalData from '~/components/Account/AccountPersonalData.vue'

export default {
  name: 'Account',
  components: { AccountHeader, AccountPersonalData },
}
</script>
