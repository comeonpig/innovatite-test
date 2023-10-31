<template>
  <van-tabbar
    v-model="active"
    fiexd
    active-color="#000"
    inactive-color="#3c3c3c"
  >
    <van-tabbar-item>首页</van-tabbar-item>
    <van-tabbar-item>商城</van-tabbar-item>
    <van-button
      icon="plus"
      type="primary"
      size="small"
      color="red"
    /><van-tabbar-item>消息</van-tabbar-item>
    <van-tabbar-item>我</van-tabbar-item>
  </van-tabbar>
</template>
<script>
export default {
  name: "XhsFooter",
  setup() {},
};
</script>
<style lang="less" scoped>
/deep/.van-button--small {
  margin: auto;
}
/deep/.van-button__icon {
  font-size: 40px;
}
</style>
