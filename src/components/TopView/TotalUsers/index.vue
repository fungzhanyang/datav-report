<template>
  <common-card title="累计用户数" value="1,000,000">
    <template>
      <v-chart :options="getOptions()" autoresize></v-chart>
    </template>
    <template v-slot:footer>
      <div class="total-users-footer">
        <span>日同比</span>
        <span class="emphasis">2.73%</span>
        <span class="increase"></span>
        <span style="margin-left: 10px;">月同比</span>
        <span class="emphasis">0.12%</span>
        <span class="decrease"></span>
      </div>
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
        grid: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0
        },
        xAxis: {
          show: false
        },
        yAxis: {
          type: 'category',
          show: false
        },
        series: [
          {
            type: 'bar',
            stack: '总量',
            data: [200],
            barWidth: 10,
            itemStyle: {
              color: '#45c946'
            }
          },
          {
            type: 'bar',
            stack: '总量',
            data: [300],
            itemStyle: {
              color: '#eee'
            }
          },
          {
            type: 'custom',
            stack: '总量',
            data: [200],
            renderItem (params, api) {
              const value = api.value(0)
              const endPoint = api.coord([value, 0]) // 根据value计算出坐标
              return {
                type: 'group', // 多个自定义图形组合时可使用group类型，并在children中添加图形
                position: endPoint,
                children: [
                  {
                    type: 'path',
                    shape: {
                      d:
                        'M273.6 593l212.9-212.9c14.1-14.1 36.9-14.1 50.9 0l213 212.9c22.7 22.7 6.6 61.5-25.5 61.5H299.1c-32.1 0-48.1-38.8-25.5-61.5z',
                      x: -5,
                      y: 5,
                      width: 10,
                      height: 10,
                      layout: 'cover'
                    },
                    style: {
                      fill: '#45c946'
                    }
                  },
                  {
                    type: 'path',
                    shape: {
                      d:
                        'M273.6 431l212.9 212.9c14.1 14.1 36.9 14.1 50.9 0l213-212.9c22.7-22.7 6.6-61.5-25.5-61.5H299.1c-32.1 0-48.1 38.8-25.5 61.5z',
                      x: -5,
                      y: -15,
                      width: 10,
                      height: 10,
                      layout: 'cover'
                    },
                    style: {
                      fill: '#45c946'
                    }
                  }
                ]
              }
            }
          }
        ],
        tooltip: {}
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.total-users-footer {
  display: flex;
  align-items: center;
}
</style>
