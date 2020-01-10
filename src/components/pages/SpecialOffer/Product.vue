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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="20.16"
                  viewBox="0 0 24 20.16"
                >
                  <path
                    class="a"
                    d="M140.9,25.56l-.335-.144c-.1-.048-9.439-5.315-10.973-9.673s-.383-6.177.623-7.614a6.278,6.278,0,0,1,4.839-2.73A6.832,6.832,0,0,1,140.9,8.034,6.832,6.832,0,0,1,146.744,5.4a6.278,6.278,0,0,1,4.839,2.73c1.006,1.389,1.917,3.879.623,7.614s-10.877,9.673-10.973,9.673ZM135.052,6.884a4.84,4.84,0,0,0-3.642,2.107c-.815,1.149-1.533,3.113-.431,6.273s8.241,7.758,9.918,8.667c1.629-.91,8.769-5.411,9.919-8.667s.383-5.124-.431-6.273a4.84,4.84,0,0,0-3.642-2.107,5.234,5.234,0,0,0-5.175,2.969l-.671,1.58-.671-1.58A5.273,5.273,0,0,0,135.052,6.884Z"
                    transform="translate(-128.845 -5.4)"
                  />
                </svg>
                <svg
                  class="black transition"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="20.16"
                  viewBox="0 0 24 20.16"
                >
                  <path
                    class="love"
                    d="M140.9,25.56l-.335-.144c-.1-.048-9.439-5.315-10.973-9.673s-.383-6.177.623-7.614a6.278,6.278,0,0,1,4.839-2.73A6.832,6.832,0,0,1,140.9,8.034,6.832,6.832,0,0,1,146.744,5.4a6.278,6.278,0,0,1,4.839,2.73c1.006,1.389,1.917,3.879.623,7.614s-10.877,9.673-10.973,9.673Z"
                    transform="translate(-128.845 -5.4)"
                  />
                </svg>
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
          <select name="size" id @change.prevent @click.prevent>
            <option value>尺寸</option>
          </select>

          <select name="cup" id @change.prevent @click.prevent>
            <option value>罩杯</option>
          </select>

          <select name="num" id @change.prevent @click.prevent>
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
