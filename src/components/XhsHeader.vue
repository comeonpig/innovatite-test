<template>
  <div class="header">
    <div class="h-daily">
      <img src="../assets/daily.jpg" alt="" />
    </div>
    <div class="tab">
      <van-tabs v-model:active="activeName">
        <van-tab title="关注" name="a"></van-tab>
        <van-tab title="发现" name="b"></van-tab>
        <van-tab title="深圳" name="c"></van-tab>
      </van-tabs>
    </div>
    <van-icon size="18px" class="search" name="search" />
  </div>
</template>
<script>
export default {
  name: "XhsHeader",
};
</script>
<style lang="less" scoped>
.header {
  max-width: 100%;
  display: flex;

  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  .h-daily {
    width: 150px;
    img {
      width: 100%;
      height: 100%;
      padding-left: 20px;
    }
  }
  /deep/.van-tab {
    max-width: 150px;
  }
  /deep/.van-tab__text--ellipsis {
    padding: 0 15px;
  }
  /deep/.van-tabs__line {
    background: red;
  }
  .van-icon {
    display: block;
    padding-right: 80px;
  }
}
</style>
