<template>
  <div id="app">
    <div class="pages">
      <keep-alive v-if="$route.meta.keepAlive">
        <router-view />
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive"/>
    </div>
    <TabBars></TabBars>
  </div>
</template>
<script>
import { TabBars } from '@components'
export default {
  name: 'App',
  components:{
    TabBars
  }
}
</script>