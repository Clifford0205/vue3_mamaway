<template>
  <div class="item">
    <router-link :to="{name:'商品詳細頁'}">
      <div class="item-in">
        <div class="img-area">
          <img :src="product.img" @click="showSlider" v-if="isImgShow" alt />

          <carousel
            :items="1"
            :dots="true"
            :nav="false"
            class="the-carousel"
            :loop="true"
            v-if="!isImgShow"
          >
            <template slot="prev">
              <button class="prev" @click.prevent>
                <img src="~@/assets/img/icons/icn_arrow_l.svg" alt />
              </button>
            </template>

            <template slot="next">
              <button class="next" @click.prevent style="display:block">
                <img src="~@/assets/img/icons/icn_arrow_r_b.svg" alt />
              </button>
            </template>
            <div class="slider-item">
              <img :src="product.carouselImg[0]" alt />
            </div>

            <div class="slider-item">
              <img :src="product.carouselImg[1]" alt />
            </div>

            <div class="slider-item">
              <img :src="product.carouselImg[0]" alt />
            </div>
          </carousel>

          <div class="circle">
            <object>
              <a class="love-area">
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

        <div class="style-input">
          <select name="size" id @click.prevent>
            <option value>尺寸</option>
          </select>

          <select name="cup" id @click.prevent>
            <option value>罩杯</option>
          </select>

          <select name="num" id @click.prevent>
            <option value>數量</option>
          </select>
        </div>
        <div class="buy-it">
          <button>選 購</button>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
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
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
