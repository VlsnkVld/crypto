<template>
  <timeago-raw :datetime="datetime" :locale="$i18n.locale" :auto-update="25" />
</template>

<script>
export default {
  name: 'Timeago',
  props: {
    datetime: {
      type: Date,
      required: true,
    },
  },
}
</script>
