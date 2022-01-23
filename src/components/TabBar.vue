<template>
  <div class="my-tab-bar">
    <div
      class="tab-item"
      v-for="(item, index) in arr"
      :key="index"
      @click="btn(index, item)"
      :class="{ actived: index == setIndex }"
    >
      <!-- 图标 -->
      <span class="iconfont" :class="item.iconText"></span>
      <!-- 文字 -->
      <span>{{ item.text }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      setIndex: 0,
    };
  },
  methods: {
    btn(index, item) {
      this.setIndex = index;
      this.$emit("change", item.componentName);
      //   console.log(this.componentName);
    },
  },
  props: {
    arr: {
      type: Array,
      required: true,
      // 自定义校验规则
      validator(value) {
        if (value.length >= 2 && value.length <= 5) {
          return true;
        } else {
          return false;
        }
      },
    },
  },
};
</script>

<style lang="less" scoped>
.my-tab-bar {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  user-select: none;
  .tab-item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .actived {
    color: #1d7bff;
  }
}

.current {
  color: #1d7bff;
}
</style>