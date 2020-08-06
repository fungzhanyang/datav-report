<template>
  <common-card title="累计销售额" value="￥123456">
    <template v-slot:footer>
      footer
    </template>
  </common-card>
</template>

<script>
import commonCardMixin from '@/mixins/commonCardMixin'
export default {
  mixins: [commonCardMixin]
}
</script>

<style lang="scss" scoped></style>
