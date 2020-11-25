<template>
  <div>
      婚庆物品
      <GoodsCategory></GoodsCategory>
  </div>
</template>

<script>
import { GoodsCategory } from '@components';;
export default {
    components:{
        GoodsCategory
    }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import './style.less';
</style>