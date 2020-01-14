<template>
  <div class="single-product col-lg-3 col-6">
    <div class="item">
      <router-link :to="{name:'商品詳細頁'}">
        <div class="img-area">
          <img :src="product.img" alt @click="showSlider" class="start-img" v-if="isImgShow" />
          <carousel
            :items="1"
            :dots="true"
            :nav="false"
            class="the-carousel"
            :loop="true"
            v-if="!isImgShow"
          >
            <template slot="prev">
              <button class="prev" @click="preventRoute">
                <img src="~@/assets/img/icons/icn_arrow_l.svg" alt />
              </button>
            </template>

            <template slot="next">
              <button class="next" @click="preventRoute" style="display:block">
                <img src="~@/assets/img/icons/icn_arrow_r_b.svg" alt />
              </button>
            </template>
            <div class="slider-item">
              <img :src="product.carouselImg" alt />
            </div>

            <div class="slider-item">
              <img :src="product.carouselImg" alt />
            </div>

            <div class="slider-item">
              <img :src="product.carouselImg" alt />
            </div>
          </carousel>
          <div class="circle">
            <object>
              <a href="https://github.com/dashboard" class="love-area">
                <div class="icon-icn_like_b_h"></div>
              </a>
            </object>
          </div>
        </div>
        <p class="title">{{product.title}}</p>
        <div class="d-flex price">
          <p class="o-price">{{product.oldPrice}}</p>
          <p class="new-price">{{product.newPrice}}</p>
        </div>
        <object>
          <a class="buy">買2送1</a>
        </object>
      </router-link>
    </div>
  </div>
</template>

<script>
import $ from "jquery";

import carousel from "@/components/library/Carousel";

export default {
  props: {
    product: {
      require: true,
      type: Object
    }
  },
  data() {
    return {
      isThreeCol: false,
      isCaShow: "none",
      isImgShow: true
    };
  },
  components: {
    carousel
  },
  methods: {
    showSlider: function(e) {
      e.preventDefault();
      let vm = this;
      vm.isImgShow = false;
    },

    sliderMove: function() {
      e.preventDefault();
    },

    preventRoute: function(e) {
      e.preventDefault();
    }
  }
};
</script>
