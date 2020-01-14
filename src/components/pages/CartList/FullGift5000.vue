<template>
  <div class="shop-cart-detail">
    <div class="full-gift-2000">
      <div class="add-title-red">
        <div class="the-line"></div>
        <p class="title-text">5000元滿額贈</p>
        <div class="the-line"></div>
      </div>

      <div class="purchase-conditions">
        <p>
          結帳金額滿
          <span class="red-text">$500元</span> ，可加購
          <span class="red-text">1</span>件。
        </p>
      </div>

      <div class="carousel-area">
        <carousel
          :dots="false"
          :items="3"
          :margin="25"
          :loop="true"
          :responsive="{
          0: {
            items: 3,
            nav: false,
            center: true,
            margin: 20
          },
          996: {
            items: 3
          }
        }"
        >
          <div class="item">
            <div class="img-area">
              <img src="~@/assets/img/photos/M106192065-900n@3x-1@2x.png" alt />
            </div>
            <p class="title">襯衫式印花孕哺洋裝(兩穿)</p>
            <div class="d-flex price">
              <p class="o-price">NT$1380</p>
              <p class="new-price">NT$990</p>
            </div>

            <div class="style-select">
              <select name id>
                <option value selected disabled>選擇尺寸</option>
                <option value>S</option>
                <option value>M</option>
                <option value>L</option>
                <option value>XL</option>
                <option value>2XL</option>
              </select>
            </div>
          </div>

          <div class="item">
            <div class="img-area">
              <img src="~@/assets/img/photos/M106192065-900n@3x-1@2x.png" alt />
            </div>
            <p class="title">襯衫式印花孕哺洋裝(兩穿)</p>
            <div class="d-flex price">
              <p class="o-price">NT$1380</p>
              <p class="new-price">NT$990</p>
            </div>

            <div class="style-select">
              <select name id>
                <option value selected disabled>選擇尺寸</option>
                <option value>S</option>
                <option value>M</option>
                <option value>L</option>
                <option value>XL</option>
                <option value>2XL</option>
              </select>
            </div>
          </div>

          <div class="item">
            <div class="img-area">
              <img src="~@/assets/img/photos/M106192065-900n@3x-1@2x.png" alt />
            </div>
            <p class="title">襯衫式印花孕哺洋裝(兩穿)</p>
            <div class="d-flex price">
              <p class="o-price">NT$1380</p>
              <p class="new-price">NT$990</p>
            </div>

            <div class="style-select">
              <select name id>
                <option value selected disabled>選擇尺寸</option>
                <option value>S</option>
                <option value>M</option>
                <option value>L</option>
                <option value>XL</option>
                <option value>2XL</option>
              </select>
            </div>
          </div>

          <div class="item">
            <div class="img-area">
              <img src="~@/assets/img/photos/M106192065-900n@3x-1@2x.png" alt />
            </div>
            <p class="title">襯衫式印花孕哺洋裝(兩穿)</p>
            <div class="d-flex price">
              <p class="o-price">NT$1380</p>
              <p class="new-price">NT$990</p>
            </div>

            <div class="style-select">
              <select name id>
                <option value selected disabled>選擇尺寸</option>
                <option value>S</option>
                <option value>M</option>
                <option value>L</option>
                <option value>XL</option>
                <option value>2XL</option>
              </select>
            </div>
          </div>

          <div class="item">
            <div class="img-area">
              <img src="~@/assets/img/photos/M106192065-900n@3x-1@2x.png" alt />
            </div>
            <p class="title">襯衫式印花孕哺洋裝(兩穿)</p>
            <div class="d-flex price">
              <p class="o-price">NT$1380</p>
              <p class="new-price">NT$990</p>
            </div>

            <div class="style-select">
              <select name id>
                <option value selected disabled>選擇尺寸</option>
                <option value>S</option>
                <option value>M</option>
                <option value>L</option>
                <option value>XL</option>
                <option value>2XL</option>
              </select>
            </div>
          </div>
        </carousel>
      </div>
    </div>
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";

export default {
  components: {
    carousel
  }
};
</script>

