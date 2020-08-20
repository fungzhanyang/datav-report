<template>
  <v-chart :options="data" autoresize></v-chart>
</template>

<script>
export default {
  data () {
    return {
      data: {
        xAxis: { type: 'category' },
        yAxis: {},
        series: [{ type: 'bar', data: [1, 2, 3] }]
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
