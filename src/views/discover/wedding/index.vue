<template>
    <div>
        <CommonHead :title="title" :isNoLevelOne="isNoLevelOne"></CommonHead>
        <div>
            <van-tabs>
                <van-tab title="全部"></van-tab>
                <van-tab title="结婚请柬"></van-tab>
                <van-tab title="喜糖"></van-tab>
                <van-tab title="喜酒"></van-tab>
            </van-tabs>
        </div>
        <GoodsCategory :storeList="storeList"></GoodsCategory>
    </div>
</template>

<script>
import { CommonHead, GoodsCategory } from "@components";
import { mapState } from 'vuex';
export default {
    components: {
        CommonHead,
        GoodsCategory,
    },
    data() {
        return {
            title: "婚庆用品",
            isNoLevelOne: true,
            storeList:[]
        };
    },
    // computed:{
    //     ...mapState(["storeList"])
    // },
    created(){
        this.getData();
    },
    methods:{
        getData(){
            let api = "http://localhost:5050/user/login/500";
            this.$axios({
                url:api,
                method:"GET"
            }).then(res=>{
                this.storeList=res.data.storeList;
            })
        }
    }
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import "./style.less";
</style>