<template>
  <extendable-modal
    :value="value"
    title="Account Verification"
    :width="454"
    extraClasses="pink-linear-bg"
  >
    <div>
      sjabla fitte

      <v-btn
        type="submit"
        block
        rounded
        large
        class="v-btn--brand"
        :disabled="true"
      >
        Save
      </v-btn>
    </div>
  </extendable-modal>
</template>

<script>
import ExtendableModal from '~/components/Modals/ExtendableModal.vue'

export default {
  name: 'AccountVerification',
  components: {
    ExtendableModal,
  },
  props: {
    value: {
      type: Boolean,
      required: true,
      default: () => true,
    },
  },
}
</script>
