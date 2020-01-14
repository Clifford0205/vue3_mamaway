<template>
  <div class="choose-buy">
    <div class="title-area">
      <p>
        已選購
        <span class="red-text">3</span>
        件，原價1197元，折扣價
        <span class="red-text">898</span>
        元
      </p>
    </div>

    <div class="carousel-area">
      <carousel
        :dots="false"
        :items="7"
        :margin="26"
        :nav="true"
        :loop="true"
        :responsive="{
          0: {
            items: 1,
            autoWidth:true,
            nav: false,
            center: true,
            margin: 20
          },
          996: {
            items: 7,
            nav: true
          }
        }"
      >
        <div class="item">
          <router-link :to="{ name: '商品列表' }">
            <div class="img-area">
              <img src="~@/assets/img/photos/M106192065-900n@3x-1@2x.png" alt />
              <button class="cancel-btn">
                <img src="~@/assets/img/icons/Icon_cancel_g.svg" alt />
              </button>
            </div>
            <p class="title">襯衫式印花孕哺洋裝(兩穿)襯衫式印花孕哺洋裝(兩穿)襯衫式印花孕哺洋裝(兩穿)</p>
            <p class="clothes-style">紅色 75A</p>
            <div class="price-num">
              <p class="new-price">NT$990</p>
              <div class="num">X1</div>
            </div>
          </router-link>
        </div>

        <div class="item">
          <router-link :to="{ name: '商品列表' }">
            <div class="img-area">
              <img src="~@/assets/img/photos/M106192065-900n@3x-1@2x.png" alt />
              <button class="cancel-btn">
                <img src="~@/assets/img/icons/Icon_cancel_g.svg" alt />
              </button>
            </div>
            <p class="title">襯衫式印花孕哺洋裝(兩穿)襯衫式印花孕哺洋裝(兩穿)襯衫式印花孕哺洋裝(兩穿)</p>
            <p class="clothes-style">紅色 75A</p>
            <div class="price-num">
              <p class="new-price">NT$990</p>
              <div class="num">X1</div>
            </div>
          </router-link>
        </div>

        <div class="item">
          <router-link :to="{ name: '商品列表' }">
            <div class="img-area">
              <img src="~@/assets/img/photos/M106192065-900n@3x-1@2x.png" alt />
              <button class="cancel-btn">
                <img src="~@/assets/img/icons/Icon_cancel_g.svg" alt />
              </button>
            </div>
            <p class="title">襯衫式印花孕哺洋裝(兩穿)襯衫式印花孕哺洋裝(兩穿)襯衫式印花孕哺洋裝(兩穿)</p>
            <p class="clothes-style">紅色 75A</p>
            <div class="price-num">
              <p class="new-price">NT$990</p>
              <div class="num">X1</div>
            </div>
          </router-link>
        </div>

        <div class="item">
          <router-link :to="{ name: '商品列表' }">
            <div class="img-area">
              <img src="~@/assets/img/photos/M106192065-900n@3x-1@2x.png" alt />
              <button class="cancel-btn">
                <img src="~@/assets/img/icons/Icon_cancel_g.svg" alt />
              </button>
            </div>
            <p class="title">襯衫式印花孕哺洋裝(兩穿)襯衫式印花孕哺洋裝(兩穿)襯衫式印花孕哺洋裝(兩穿)</p>
            <p class="clothes-style">紅色 75A</p>
            <div class="price-num">
              <p class="new-price">NT$990</p>
              <div class="num">X1</div>
            </div>
          </router-link>
        </div>

        <div class="item">
          <router-link :to="{ name: '商品列表' }">
            <div class="img-area">
              <img src="~@/assets/img/photos/M106192065-900n@3x-1@2x.png" alt />
              <button class="cancel-btn">
                <img src="~@/assets/img/icons/Icon_cancel_g.svg" alt />
              </button>
            </div>
            <p class="title">襯衫式印花孕哺洋裝(兩穿)襯衫式印花孕哺洋裝(兩穿)襯衫式印花孕哺洋裝(兩穿)</p>
            <p class="clothes-style">紅色 75A</p>
            <div class="price-num">
              <p class="new-price">NT$990</p>
              <div class="num">X1</div>
            </div>
          </router-link>
        </div>

        <div class="item">
          <router-link :to="{ name: '商品列表' }">
            <div class="img-area">
              <img src="~@/assets/img/photos/M106192065-900n@3x-1@2x.png" alt />
              <button class="cancel-btn">
                <img src="~@/assets/img/icons/Icon_cancel_g.svg" alt />
              </button>
            </div>
            <p class="title">襯衫式印花孕哺洋裝(兩穿)襯衫式印花孕哺洋裝(兩穿)襯衫式印花孕哺洋裝(兩穿)</p>
            <p class="clothes-style">紅色 75A</p>
            <div class="price-num">
              <p class="new-price">NT$990</p>
              <div class="num">X1</div>
            </div>
          </router-link>
        </div>

        <div class="item">
          <router-link :to="{ name: '商品列表' }">
            <div class="img-area">
              <img src="~@/assets/img/photos/M106192065-900n@3x-1@2x.png" alt />
              <button class="cancel-btn">
                <img src="~@/assets/img/icons/Icon_cancel_g.svg" alt />
              </button>
            </div>
            <p class="title">襯衫式印花孕哺洋裝(兩穿)襯衫式印花孕哺洋裝(兩穿)襯衫式印花孕哺洋裝(兩穿)</p>
            <p class="clothes-style">紅色 75A</p>
            <div class="price-num">
              <p class="new-price">NT$990</p>
              <div class="num">X1</div>
            </div>
          </router-link>
        </div>

        <div class="item">
          <router-link :to="{ name: '商品列表' }">
            <div class="img-area">
              <img src="~@/assets/img/photos/M106192065-900n@3x-1@2x.png" alt />
              <button class="cancel-btn">
                <img src="~@/assets/img/icons/Icon_cancel_g.svg" alt />
              </button>
            </div>
            <p class="title">襯衫式印花孕哺洋裝(兩穿)襯衫式印花孕哺洋裝(兩穿)襯衫式印花孕哺洋裝(兩穿)</p>
            <p class="clothes-style">紅色 75A</p>
            <div class="price-num">
              <p class="new-price">NT$990</p>
              <div class="num">X1</div>
            </div>
          </router-link>
        </div>

        <div class="item">
          <router-link :to="{ name: '商品列表' }">
            <div class="img-area">
              <img src="~@/assets/img/photos/M106192065-900n@3x-1@2x.png" alt />
              <button class="cancel-btn">
                <img src="~@/assets/img/icons/Icon_cancel_g.svg" alt />
              </button>
            </div>
            <p class="title">襯衫式印花孕哺洋裝(兩穿)襯衫式印花孕哺洋裝(兩穿)襯衫式印花孕哺洋裝(兩穿)</p>
            <p class="clothes-style">紅色 75A</p>
            <div class="price-num">
              <p class="new-price">NT$990</p>
              <div class="num">X1</div>
            </div>
          </router-link>
        </div>
      </carousel>
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
