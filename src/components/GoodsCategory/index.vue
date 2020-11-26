<template>
    <ul class="goodsCategory">
        <li v-for="(item, index) in dataList" :key="index">
            <img :src="item.imgUrl" alt="" class="commodityImg" />
            <p v-text="item.description" class="commodityDescription"></p>
            <div class="commoditySales">
                <p>￥{{ item.price }}</p>
                <p>
                    <img :src="starUrl" alt="" />
                    <span v-text="item.stars"></span>
                </p>
            </div>
        </li>
    </ul>
</template>

<script>
export default {
    name: "GoodsCategory",
    props: {
        dataList: {
            type: Array,
            default() {
                return [];
            },
        },
    },
    data() {
        return {
            starUrl: require("../../assets/img/GoodsCategory/star.png"),
        };
    },
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import "./style.less";
</style>