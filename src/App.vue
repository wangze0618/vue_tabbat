<template>
  <div>
    <Header title="TabBar案例"></Header>
    <div class="main">
      <keep-alive>
        <component :is="componentName"></component>
      </keep-alive>
    </div>
    <TabBar :arr="tabList" @change="fn"></TabBar>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import TabBar from "./components/TabBar.vue";
import GoodsList from "./views/GoodsList.vue";
import GoodsSearch from "./views/GoodsSearch.vue";
import UserInfo from "./views/UserInfo.vue";
export default {
  components: { Header, TabBar, GoodsList, GoodsSearch, UserInfo },
  data() {
    return {
      componentName: "GoodsList",
      tabList: [
        {
          iconText: "icon-shangpinliebiao",
          text: "商品列表",
          componentName: "GoodsList",
        },
        {
          iconText: "icon-sousuo",
          text: "商品搜索",
          componentName: "GoodsSearch",
        },
        {
          iconText: "icon-user",
          text: "我的信息",
          componentName: "UserInfo",
        },
      ],
    };
  },
  methods: {
    fn(val) {
      this.componentName = val;
      console.log(this.componentName);
    },
  },
};
</script>

<style lang="less" scoped>
.main {
  padding: 45px 0 50px 0;
}
</style>