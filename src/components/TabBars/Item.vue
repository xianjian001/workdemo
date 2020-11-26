<template>
    <div class="itemWarp flex_mid" @click="changePage">
        <span v-show="!bol">
            <slot name="normalImg"></slot>
        </span>
        <span v-show="bol">
            <slot name="activeImg"></slot>
        </span>
        <span v-text="txt" :class="!bol ? normalTxt : activeTxt"></span>
    </div>
</template>
<script type="text/javascript">
export default {
    name: "Item",
    props: {
        txt: {
            type: String,
        },
        page: {
            type: String,
        },
        sel: {
            type: String,
        },
    },
    computed: {
        bol() {
            if (this.sel == this.page) {
                return true;
            }
            return false;
        },
    },
    data() {
        return {
            normalTxt: "normalTxt",
            activeTxt: "activeTxt",
        };
    },
    methods: {
        changePage() {
            //点击跳转对应的页面
            this.$router.push("/" + this.page);
            this.$emit("change", this.page);
        },
    },
};
</script>
<style type="text/css" scoped>
.itemWarp {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.itemWarp span {
    font-size: 12px;
}
.normalTxt {
    color: #333333;
}
.activeTxt {
    color: #ff69b4;
}
</style>