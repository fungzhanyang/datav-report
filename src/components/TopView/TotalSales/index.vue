<template>
  <common-card title="累计销售额" value="￥123456">
    <template>
      <div class="compare-wrapper">
        <div class="compare">
          <span>日同比</span>
          <span class="emphasis">7.3%</span>
          <span class="increase"></span>
        </div>
        <div class="compare">
          <span>月同比</span>
          <span class="emphasis">7.3%</span>
          <span class="decrease"></span>
        </div>
      </div>
    </template>
    <template v-slot:footer>
      <span>昨日销售额</span>
      <span class="emphasis">￥30,000,000</span>
    </template>
  </common-card>
</template>

<script>
import commonCardMixin from '@/mixins/commonCardMixin'
export default {
  mixins: [commonCardMixin]
}
</script>

<style lang="scss" scoped>
.compare-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .compare {
    margin-top: 3px;
    font-size: 12px;
    color: #666;
    display: flex;
    align-items: center;
  }
}
</style>
