<template>
  <div class="games" :style="{ height: isgood }">
    <swiper :options="swiperOptions" ref="mySwiper" class="swiper">
      <swiper-slide
        v-for="(item, index) in 4"
        :key="index"
        :style="{ height: isgood, position: 'relative' }"
      >
        <!-- <img :src="item" class="img" /> -->
        <img
          src=""
          :style="{ height: isgood }"
          class="min"
        />
        <div
          @click="got(idnex)"
        ></div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination" @click="go"></div>
    </swiper>
  </div>
</template>
<script>
import "../../node_modules/swiper/css/swiper.css";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
// let that;

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    isgood: {
      type: String,
      default: "100vh",
    },
  },
  data() {
    return {
      swiperOptions: {
        autoplay: {
          delay: 3000,
          autoplayDisableOnInteraction: false,
        },
        loop: true,
        speed: 2000,
        // on:{
        //   click:function(){
        //     that = this
        //   }
        // },
        // clickable: true,
        pagination: {
          el: ".swiper-pagination", //与slot="pagination"处 class 一致
          // paginationClickable:true,
          clickable: true, //轮播按钮支持点击
          type: "custom",
          renderCustom: function (swiper, current, total) {
            var customPaginationHtml = "";
            for (var i = 0; i < total; i++) {
              //判断哪个分页器此刻应该被激活
              if (i == current - 1) {
                customPaginationHtml += `<div class="swiper-pagination-customs swiper-pagination-customs-active" key="${i}">
                  </div>`;
              } else {
                customPaginationHtml += `<div class="swiper-pagination-customs" key="${i}">
                  </div>`;
              }
              if (i !== total - 1) {
                customPaginationHtml += `<div class="dr-middle"></div>`;
              }
            }
            return '<div class="swiperPag">' + customPaginationHtml + "</div>";
            // return customPaginationHtml;
          },
        },
      },
      list: [{}, {}, {}],
    };
  },
  methods: {
    got() {
      window.location.href = "";
    },
    go(e) {
    //   console.warn(e.target.getAttribute("key"));
      if (e.target.getAttribute("key")) {
        this.swiper.slideTo(Number(e.target.getAttribute("key")) + 1, 1000);
      }
    },
    change(name) {
    },
  },
  computed: {
    // 定义swiper，在下面就可以引用这个swiper了；
    swiper: function () {
      return this.$refs.mySwiper.$swiper;
    },
  },
};
</script>
<style scoped>
.games {
  position: relative;
  width: 100vw;
  height: 100vh;
}

.ddd {
  height: 100vh;
}
.games >>> .swiperPag {
  display: flex;
  justify-content: center;
  align-items: center;
}

.games >>> .swiper-pagination-customs {
  width: 0.32rem;
  height: 0.32rem;
  background: url("") 100% no-repeat;
}
.games >>> .dr-middle {
  width: 0.22rem;
  height: 0.01rem;
  margin: 0 0.03rem;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 50%,
    rgba(255, 255, 255, 0) 100%
  );
}
.games >>> .swiper-pagination-customs-active {
  background: url("") 100% no-repeat;
}

.games >>> .swiperPag::after {
  content: "";
  display: block;
  /* position: absolute; */
  width: 0.8rem;
  height: 0.01rem;
  margin-left: 0.07rem;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 1),
    rgba(255, 255, 255, 0)
  );

  /* right: 0; */
}

.games >>> .swiperPag::before {
  content: "";
  display: block;
  /* position: absolute; */
  width: 0.8rem;
  height: 0.01rem;
  margin-right: 0.07rem;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 1)
  );

  /* right: 0; */
}

.games >>> .swiper-pagination {
  display: flex;
  justify-content: center;
  height: 1.44rem;
  align-items: center;
}

.zhj {
  position: absolute;
  left: calc(50vw - 2.49rem / 2);
  bottom: 1.2rem;
  width: 2.49rem;
  height: 0.85rem;
  background: url("") no-repeat 100%;
}
</style>