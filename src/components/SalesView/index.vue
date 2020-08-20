<template>
  <div style="width:100%;height:400px;">
    <!-- vue-echarts 使用方法 -->
    <v-chart :options="option" autoresize></v-chart>
    <!-- v-charts 使用方法-->
    <ve-line :data="data"></ve-line>
  </div>
</template>

<script>
export default {
  data () {
    return {
      option: {
        xAxis: { type: 'category' },
        yAxis: {},
        series: [{ type: 'bar', data: [1, 2, 3] }]
      },
      data: {
        columns: ['date', 'value'],
        rows: [
          {
            date: '08/20',
            value: 1
          },
          {
            date: '08/21',
            value: 2
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.echarts {
  width: 100%;
  height: 100%;
}
</style>
