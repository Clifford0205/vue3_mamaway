<template>
  <div class="row add-in-cart">
    <div class="col-lg-6">
      <ProductPhoto :album="photos" />
    </div>

    <div class="col-lg-6 mobile-slider">
      <a class="goback" @click.prevent="beforePath">
        <img src="~@/assets/img/icons/组件 39 – 3.svg" alt />
      </a>
      <div class="number">
        <span class="current">1</span> /
        <span class="total">8</span>
      </div>
      <carousel
        :dots="false"
        :items="1"
        :loop="true"
        :responsive="{
          0: {
            dots: false,
            nav: false
          },
          996: {
            dots: false,
            nav: false
          }
        }"
      >
        <img src="~@/assets/img/photos/M106192065-900n@3x@2x 拷貝.png" />
        <img src="~@/assets/img/photos/M106192065-900n@3x@2x 拷貝.png" />
        <img src="~@/assets/img/photos/M106192065-900n@3x@2x 拷貝.png" />
      </carousel>
    </div>
    <div class="col-lg-6 text-part">
      <div class="product-detail">
        <div class="mobile-content">
          <p class="small">產品編號：M106192065</p>
          <div class="product-title d-flex">
            <h2>襯衫式印花孕哺洋裝</h2>
            <div class="btns">
              <button>
                <div class="icon-icn_like_b_h"></div>
              </button>
              <button>
                <div class="icon-icn_share"></div>
              </button>
            </div>
          </div>

          <div class="price-part d-flex">
            <p class="o-price">NT$1380</p>
            <p class="offer-text">優惠價</p>
            <p class="offer-NT">NT$</p>
            <p class="special-price">990</p>
          </div>

          <a class="price-activity">
            <p class="red">活動</p>
            <p class="the-way">秋冬新品 買2送1</p>

            <img src="~@/assets/img/icons/icn_arrow_r_b.svg" class="arrow" alt />
          </a>

          <a class="price-activity">
            <p class="red">活動</p>
            <p class="the-way">全館滿$5000送媽媽包</p>

            <img src="~@/assets/img/icons/icn_arrow_r_b.svg" class="arrow" alt />
          </a>

          <a class="price-activity">
            <p class="red">活動</p>
            <p class="the-way">全館滿$5000送媽媽包</p>

            <img src="~@/assets/img/icons/icn_arrow_r_b.svg" class="arrow" alt />
          </a>

          <a class="price-activity">
            <p class="red">活動</p>
            <p class="the-way">全館滿$5000送媽媽包</p>

            <img src="~@/assets/img/icons/icn_arrow_r_b.svg" class="arrow" alt />
          </a>

          <p class="more-activity" v-if="isMoreActive">
            <a href @click.prevent="showAllActivity">看更多活動</a>
          </p>
        </div>
      </div>
      <div class="the-line"></div>

      <div class="choose-color">
        <div class="product-detail">
          <div class="mobile-content">
            <p class="color-title">顏色 / 黑色</p>
            <div class="d-flex colors">
              <div class="color-out">
                <div class="colorinit color-in1"></div>
              </div>

              <div class="color-out">
                <div class="colorinit color-in2"></div>
              </div>

              <div class="color-out">
                <div class="colorinit color-in3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="choose-size">
        <div class="d-flex">
          <p class="size-title">尺寸 / M</p>
          <a href class="look-table">查看尺寸表</a>
        </div>
        <div class="size-btns">
          <button class="class-btn">XS</button>
          <button class="class-btn">S</button>
          <button class="class-btn activity">M</button>
          <button class="class-btn">L</button>
          <button class="class-btn unavailable">XL</button>
        </div>
      </div>

      <div class="quantity">
        <p class="quantity-title">購買數量</p>
        <div class="count">
          <button class="minus">-</button>
          <input type="text" placeholder="0" />
          <button class="plus">+</button>
        </div>

        <button class="add-in">加入購物車</button>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import carousel from "vue-owl-carousel";
import ProductPhoto from "@/components/pages/ProductDetails/ProductPhoto";

export default {
  data() {
    return {
      isMoreActive: true,
      photos: [
        "https://images2.imgbox.com/d3/eb/RyWGmKXT_o.png",
        "https://images2.imgbox.com/be/12/cZ9YajXz_o.png",
        "https://images2.imgbox.com/d3/eb/RyWGmKXT_o.png",
        "https://images2.imgbox.com/be/12/cZ9YajXz_o.png",
        "https://images2.imgbox.com/d3/eb/RyWGmKXT_o.png"
      ]
    };
  },
  components: {
    carousel,
    ProductPhoto
  },

  methods: {
    beforePath: function() {
      this.$router.go(-1);
    },
    showAllActivity() {
      let vm = this;
      let a_bar = document.querySelectorAll(".price-activity");
      console.log(a_bar);
      for (let i = 0; i < a_bar.length; i++) {
        a_bar[i].style.display = "flex";
      }
      vm.isMoreActive = false;
    }
  },

  mounted() {
    let a_bar = document.querySelectorAll(".price-activity");
    console.log(a_bar);
    for (let i = 0; i < a_bar.length; i++) {
      if (i > 1) {
        console.log(a_bar[i]);
        a_bar[i].style.display = "none";
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
