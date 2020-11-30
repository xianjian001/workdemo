<template>
    <div id="app">
        <div class="pages">
            <keep-alive v-if="$route.meta.keepAlive">
                <router-view />
            </keep-alive>
            <router-view v-if="!$route.meta.keepAlive" />
        </div>
    </div>
</template>
<script>
export default {
    name: 'App'
};
</script>
<style lang="less" scoped>
#app {
    width: 100%;
    height: 100%;
    overflow: hidden;
}
</style>
