<template>
  <div class="my-header" :style="{ backgroundColor: background, color }">
    {{ title }}
  </div>
</template>

<script>
// 目标：让Header组件支持不同的项目-自定义
/*  1. 分析哪些要自定义（背景色、文字颜色、文字内容）
    2.（新）可以对props的变量的值进行校验类型，设置默认值
    3. 外部使用时，遵守变量名作为属性名，值的类型遵守
    4. 内部使用props的值
*/
export default {
  props: {
    background: String, // 外部传入的值必须是字符串类型，否则报错
    color: {
      type: String, // 约束color值的类型
      default: "#fff", // 设置默认值
    },
    title: {
      type: String,
      required: true, // 必须传入值
    },
  },
};
</script>

<style lang="less" scoped>
.my-header {
  height: 45px;
  line-height: 45px;
  text-align: center;
  background-color: #1d7bff;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
}
</style>