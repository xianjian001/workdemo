<template>
    <div class="commonHead">
        <van-icon
            class="goBack"
            v-if="isNoLevelOne"
            name="arrow-left"
            size="30"
            @touchend="goBack()"
        />
        <p v-text="title"></p>
    </div>
</template>

<script>
export default {
    name: "CommonHead",
    props: {
        title: {
            type: String,
            default() {
                return "";
            },
        },
        isNoLevelOne: {
            type: Boolean,
            default() {
                return;
            },
        },
    },
    data() {
        return {};
    },
    methods: {
        goBack() {
            this.$router.back();
        },
    },
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import "./style.less";
</style>