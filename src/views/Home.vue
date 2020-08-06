<template>
  <div class="home">
    <top-view />
    <sales-view />
    <map-view />
    <bottom-view />
  </div>
</template>

<script>
// @ is an alias to /src
import TopView from '@/components/TopView'
import SalesView from '@/components/SalesView'
import MapView from '@/components/MapView'
import BottomView from '@/components/BottomView'

export default {
  name: 'Home',
  components: {
    TopView,
    SalesView,
    MapView,
    BottomView
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  background: #eee;
  box-sizing: border-box;
  padding: 20px;
}
</style>
