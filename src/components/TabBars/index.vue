
<template>
    <div class="tabberWarp">
        <div class="warp">
            <Item
                :txt="item.txt"
                :page="item.page"
                @change="getVal"
                v-for="(item, index) in tabbarDes"
                :key="index"
                :sel="selected"
            >
                <img :src="item.normalImg" slot="normalImg" />
                <img :src="item.activeImg" slot="activeImg" />
            </Item>
        </div>
    </div>
</template>

<script type="text/javascript">
import Item from "./Item.vue";
export default {
    components: {
        Item,
    },
    data () {
        return {
            selected: "home",
            tabbarDes: [
                {
                    txt: "首页",
                    page: "home",
                    normalImg: require("../../assets/img/tabs/home.png"),
                    activeImg: require("../../assets/img/tabs/homeActive.png"),
                },
                {
                    txt: "发现",
                    page: "discover",
                    normalImg: require("../../assets/img/tabs/discover.png"),
                    activeImg: require("../../assets/img/tabs/discoverActive.png"),
                },
                {
                    txt: "社区",
                    page: "community",
                    normalImg: require("../../assets/img/tabs/community.png"),
                    activeImg: require("../../assets/img/tabs/communityActive.png"),
                },
                {
                    txt: "我们",
                    page: "our",
                    normalImg: require("../../assets/img/tabs/our.png"),
                    activeImg: require("../../assets/img/tabs/ourActive.png"),
                }
            ],
        };
    },
    methods: {
        getVal: function (res) {
            this.selected = res;
        },
    },
};
</script>
<style type="text/css">
.warp {
    width: 100%;
    border-top: 1px solid #eee;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 0;
}
.warp img {
    width: 20px;
    height: 20px;
}
.tabberWarp img {
    margin-top: 10px;
    margin-bottom: 5px;
}
.tabberWarp {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding-bottom: 5px;
    background: #fff;
}
</style>