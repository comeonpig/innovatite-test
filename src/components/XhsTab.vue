<template>
  <van-tabs class="tab" v-model:active="active" swipeable>
    <van-tab v-for="(item, index) in tablist" :title="item" :key="index">
      <div class="tab-content">
        <div class="tab-left">
          <div class="tab-item" v-for="(item, index) in limglist" :key="index">
            <img :src="item.img" :alt="item.title" />
          </div>
        </div>
        <div class="tab-right">
          <div class="tab-item" v-for="(item, index) in rimglist" :key="index">
            <img :src="item.img" :alt="item.title" />
          </div>
        </div>
      </div>
      <van-loading size="24px" v-show="!limglist && !rimglist" ref="loadMore"
        >加载中...</van-loading
      >
    </van-tab>
  </van-tabs>
</template>
<script>
import { ref, onMounted, onUnmounted } from "vue";
export default {
  name: "XhsTab",
  setup() {
    let loadMore = ref(null);
    let tablist = [
      "推荐",
      "视频",
      "直播",
      "穿搭",
      "搞笑",
      "游戏",
      "Vlog",
      "科技数码",
      "运动健康",
    ];
    let limglist = ref([
      {
        id: 1,
        title: "图片1",
        img: require("@/assets/content/img1.jpg"),
      },
      {
        id: 2,
        title: "图片13",
        img: require("@/assets/content/img13.jpg"),
      },
      {
        id: 3,
        title: "图片3",
        img: require("@/assets/content/img3.jpg"),
      },
      {
        id: 4,
        title: "图片10",
        img: require("@/assets/content/img10.jpg"),
      },
      {
        id: 5,
        title: "图片5",
        img: require("@/assets/content/img5.jpg"),
      },
    ]);

    let rimglist = ref([
      {
        id: 1,
        title: "图片11",
        img: require("@/assets/content/img11.jpg"),
      },
      {
        id: 2,
        title: "图片1",
        img: require("@/assets/content/img1.jpg"),
      },

      {
        id: 3,
        title: "图片11",
        img: require("@/assets/content/img11.jpg"),
      },

      {
        id: 4,
        title: "图片5",
        img: require("@/assets/content/img5.jpg"),
      },
      {
        id: 5,
        title: "图片2",
        img: require("@/assets/content/img2.jpg"),
      },
    ]);
    const loadMoreImages = () => {
      const bottomOfWindow =
        window.innerHeight + window.scrollY >=
        0.99 * document.body.offsetHeight;
      if (bottomOfWindow) {
        const additionalImages = [
          {
            id: 6,
            title: "图片6",
            img: require("@/assets/content/img6.jpg"),
          },
          {
            id: 7,
            title: "图片11",
            img: require("@/assets/content/img11.jpg"),
          },

          {
            id: 8,
            title: "图片8",
            img: require("@/assets/content/img8.jpg"),
          },
          {
            id: 9,
            title: "图片13",
            img: require("@/assets/content/img13.jpg"),
          },

          {
            id: 10,
            title: "图片10",
            img: require("@/assets/content/img10.jpg"),
          },
          {
            id: 11,
            title: "图片7",
            img: require("@/assets/content/img7.jpg"),
          },
          {
            id: 12,
            title: "图片12",
            img: require("@/assets/content/img12.jpg"),
          },
          {
            id: 13,
            title: "图片9",
            img: require("@/assets/content/img9.jpg"),
          },
          {
            id: 14,
            title: "图片14",
            img: require("@/assets/content/img14.jpg"),
          },
        ];
        limglist.value = limglist.value.concat(
          additionalImages.filter((item) => item.id % 2 == 0)
        );
        rimglist.value = rimglist.value.concat(
          additionalImages.filter((item) => item.id % 2 == 1)
        );
      }
    };
    onMounted(() => {
      window.addEventListener("scroll", loadMoreImages);
    });
    onUnmounted(() => {
      window.removeEventListener("scroll", loadMoreImages);
    });
    return {
      active: 0,
      tablist,
      limglist,
      rimglist,
      loadMore,
    };
  },
};
</script>
<style lang="less" scoped>
.tab {
  padding: 0;
  width: 100%;
  background-color: #fff;
  .tab-content {
    display: flex;
    width: 100%;
  }
  /deep/.van-tabs__line {
    background: none;
  }
  .tab-left,
  .tab-right {
    width: 50%;
    img {
      width: 100%;
    }
  }
  .tab-item {
    margin: 5px 5px;
  }
}
</style>
