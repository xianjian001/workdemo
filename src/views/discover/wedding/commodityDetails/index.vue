<template>
    <div class="commodityDetails">
        <CommonHead
            :title="title"
            :isNoLevelOne="isNoLevelOne"
            :isShare="isShare"
        ></CommonHead>
        <div>
            <div class="commondityImg">
                <img :src="commodityDatas.imgUrl" alt="" />
            </div>
            <div class="commodityConts">
                <p v-text="commodityDatas.description" class="desciption"></p>
                <div class="commodityPrice">
                    <p>￥{{ commodityDatas.price }}</p>
                    <button
                        v-for="(item, index) in commodityDatas.active"
                        :key="index"
                    >
                        {{ item }}
                    </button>
                </div>
                <p class="normalPrice">
                    价格：￥{{ commodityDatas.normalPrice }}
                </p>
                <ul class="expressage">
                    <li>
                        {{ commodityDatas.expressage }}:{{
                            commodityDatas.expressagePrice
                        }}
                    </li>
                    <li>月销{{ commodityDatas.salesVolume }}笔</li>
                    <li>{{ commodityDatas.storeAddress }}</li>
                </ul>
            </div>
        </div>
        <div class="commodityDeep">
            <ul>
                <li class="service">
                    <img :src="imgService" alt="" />
                    <p>客服</p>
                </li>
                <li class="shoppongCar" @touchend="goShoppingCar(commodityDatas)">
                    <img :src="imgCar" alt="" />
                    <p>购物车</p>
                </li>
            </ul>
            <button class="intoCar" @touchend="addShoppingCar(commodityDatas)">加入购物车</button>
            <button class="toBuy">立即购买</button>
        </div>
    </div>
</template>

<script>
import { CommonHead } from "@components";
export default {
    name: "commodityDetails",
    components: {
        CommonHead,
    },
    data() {
        return {
            title: "商品详情",
            isNoLevelOne: true,
            isShare: true,
            imgService: require("../../../../assets/img/rests/customerService.png"),
            imgCar: require("../../../../assets/img/rests/shoppingCar.png"),
            commodityDatas: {},
            shoppingList:[]
        };
    },
    created(){
        this.commodityDatas = this.$route.query.commodityDatas;
    },
    methods:{
        goShoppingCar(a){
            this.$router.push({
                name: "shoppingCar",
                query:{
                    commodityDatas: a
                }
            })
        },
        // 加入购物车
        addShoppingCar(a){
            
        },
        // 添加本地存储
        addLocalStorage(a){
            if(localStorage.carList){
                let carList = JSON.parse(localStorage.getItem("carList"));
                carList.push(a);
                localStorage.setItem("carList",JSON.stringify(carList));
            }else{
                let carList = [];
                carList.push(a);
                localStorage.setItem("carList",JSON.stringify(carList));
            }
            
        }
    }
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import "./style.less";
</style>