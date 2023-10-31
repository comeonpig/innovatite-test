<template>
  <xhs-header />
  <van-search v-model="value" placeholder="大家都在搜“妆容画廊”" />
  <xhs-tab />
  <xhs-footer />
</template>

<script>
import XhsHeader from "./components/XhsHeader.vue";
import XhsTab from "./components/XhsTab.vue";
import XhsFooter from "./components/XhsFooter.vue";
export default {
  name: "App",
  components: {
    XhsHeader,
    XhsTab,
    XhsFooter,
  },
};
</script>

<style>
html {
  font-size: 100%;
}
body {
  margin: 0;
  padding: 0;
  min-height: 100%;
  overflow-x: hidden;
  background: #f4f4f4;
}
#app {
  margin: 0 auto;
  background: #fff;
}
.van-search {
  padding: 0;
}
.van-field__control {
  text-align: center;
}
/deep/ .van-loading {
  left: 150px;
}
</style>
