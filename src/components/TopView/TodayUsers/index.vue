<template>
  <common-card title="今日交易用户数" value="23,000">
    <template>
      <v-chart :options="getOptions()" autoresize></v-chart>
    </template>
    <template v-slot:footer>
      <span>退货率</span>
      <span class="emphasis">1.21%</span>
    </template>
  </common-card>
</template>

<script>
import commonCardMixin from '@/mixins/commonCardMixin'
export default {
  mixins: [commonCardMixin],
  methods: {
    getOptions () {
      return {
        color: ['#3398db'],
        series: [
          {
            type: 'bar',
            data: [
              410,
              82,
              200,
              330,
              403,
              103,
              449,
              720,
              220,
              403,
              103,
              449,
              720,
              220
            ],
            barWidth: '60%'
          }
        ],
        xAxis: {
          type: 'category',
          data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(
            v => `${v >= 10 ? v : '0' + v}:00`
          ),
          show: false
        },
        yAxis: {
          show: false
        },
        tooltip: {},
        grid: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
