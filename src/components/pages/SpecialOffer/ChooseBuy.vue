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
          <router-link :to="{name:'商品列表'}">
            <div class="img-area">
              <img src="~@/assets/img/photos/M106192065-900n@3x-1@2x.png" alt />
              <button class="cancel-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                  <path
                    class="the-back"
                    d="M150.889-23.111a10,10,0,0,0-10,10,10,10,0,0,0,10,10,10,10,0,0,0,10-10,10,10,0,0,0-10-10Z"
                    transform="translate(-140.889 23.111)"
                  />
                  <path
                    class="cross"
                    d="M155.889-9.524l-1.413,1.413L150.889-11.7,147.3-8.111l-1.413-1.413,3.588-3.588L145.889-16.7l1.413-1.413,3.587,3.588,3.587-3.588,1.413,1.413L152.3-13.111Z"
                    transform="translate(-140.889 23.111)"
                  />
                </svg>
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
          <router-link :to="{name:'商品列表'}">
            <div class="img-area">
              <img src="~@/assets/img/photos/M106192065-900n@3x-1@2x.png" alt />
              <button class="cancel-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                  <path
                    class="the-back"
                    d="M150.889-23.111a10,10,0,0,0-10,10,10,10,0,0,0,10,10,10,10,0,0,0,10-10,10,10,0,0,0-10-10Z"
                    transform="translate(-140.889 23.111)"
                  />
                  <path
                    class="cross"
                    d="M155.889-9.524l-1.413,1.413L150.889-11.7,147.3-8.111l-1.413-1.413,3.588-3.588L145.889-16.7l1.413-1.413,3.587,3.588,3.587-3.588,1.413,1.413L152.3-13.111Z"
                    transform="translate(-140.889 23.111)"
                  />
                </svg>
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
          <router-link :to="{name:'商品列表'}">
            <div class="img-area">
              <img src="~@/assets/img/photos/M106192065-900n@3x-1@2x.png" alt />
              <button class="cancel-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                  <path
                    class="the-back"
                    d="M150.889-23.111a10,10,0,0,0-10,10,10,10,0,0,0,10,10,10,10,0,0,0,10-10,10,10,0,0,0-10-10Z"
                    transform="translate(-140.889 23.111)"
                  />
                  <path
                    class="cross"
                    d="M155.889-9.524l-1.413,1.413L150.889-11.7,147.3-8.111l-1.413-1.413,3.588-3.588L145.889-16.7l1.413-1.413,3.587,3.588,3.587-3.588,1.413,1.413L152.3-13.111Z"
                    transform="translate(-140.889 23.111)"
                  />
                </svg>
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
          <router-link :to="{name:'商品列表'}">
            <div class="img-area">
              <img src="~@/assets/img/photos/M106192065-900n@3x-1@2x.png" alt />
              <button class="cancel-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                  <path
                    class="the-back"
                    d="M150.889-23.111a10,10,0,0,0-10,10,10,10,0,0,0,10,10,10,10,0,0,0,10-10,10,10,0,0,0-10-10Z"
                    transform="translate(-140.889 23.111)"
                  />
                  <path
                    class="cross"
                    d="M155.889-9.524l-1.413,1.413L150.889-11.7,147.3-8.111l-1.413-1.413,3.588-3.588L145.889-16.7l1.413-1.413,3.587,3.588,3.587-3.588,1.413,1.413L152.3-13.111Z"
                    transform="translate(-140.889 23.111)"
                  />
                </svg>
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
          <router-link :to="{name:'商品列表'}">
            <div class="img-area">
              <img src="~@/assets/img/photos/M106192065-900n@3x-1@2x.png" alt />
              <button class="cancel-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                  <path
                    class="the-back"
                    d="M150.889-23.111a10,10,0,0,0-10,10,10,10,0,0,0,10,10,10,10,0,0,0,10-10,10,10,0,0,0-10-10Z"
                    transform="translate(-140.889 23.111)"
                  />
                  <path
                    class="cross"
                    d="M155.889-9.524l-1.413,1.413L150.889-11.7,147.3-8.111l-1.413-1.413,3.588-3.588L145.889-16.7l1.413-1.413,3.587,3.588,3.587-3.588,1.413,1.413L152.3-13.111Z"
                    transform="translate(-140.889 23.111)"
                  />
                </svg>
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
          <router-link :to="{name:'商品列表'}">
            <div class="img-area">
              <img src="~@/assets/img/photos/M106192065-900n@3x-1@2x.png" alt />
              <button class="cancel-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                  <path
                    class="the-back"
                    d="M150.889-23.111a10,10,0,0,0-10,10,10,10,0,0,0,10,10,10,10,0,0,0,10-10,10,10,0,0,0-10-10Z"
                    transform="translate(-140.889 23.111)"
                  />
                  <path
                    class="cross"
                    d="M155.889-9.524l-1.413,1.413L150.889-11.7,147.3-8.111l-1.413-1.413,3.588-3.588L145.889-16.7l1.413-1.413,3.587,3.588,3.587-3.588,1.413,1.413L152.3-13.111Z"
                    transform="translate(-140.889 23.111)"
                  />
                </svg>
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
          <router-link :to="{name:'商品列表'}">
            <div class="img-area">
              <img src="~@/assets/img/photos/M106192065-900n@3x-1@2x.png" alt />
              <button class="cancel-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                  <path
                    class="the-back"
                    d="M150.889-23.111a10,10,0,0,0-10,10,10,10,0,0,0,10,10,10,10,0,0,0,10-10,10,10,0,0,0-10-10Z"
                    transform="translate(-140.889 23.111)"
                  />
                  <path
                    class="cross"
                    d="M155.889-9.524l-1.413,1.413L150.889-11.7,147.3-8.111l-1.413-1.413,3.588-3.588L145.889-16.7l1.413-1.413,3.587,3.588,3.587-3.588,1.413,1.413L152.3-13.111Z"
                    transform="translate(-140.889 23.111)"
                  />
                </svg>
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
          <router-link :to="{name:'商品列表'}">
            <div class="img-area">
              <img src="~@/assets/img/photos/M106192065-900n@3x-1@2x.png" alt />
              <button class="cancel-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                  <path
                    class="the-back"
                    d="M150.889-23.111a10,10,0,0,0-10,10,10,10,0,0,0,10,10,10,10,0,0,0,10-10,10,10,0,0,0-10-10Z"
                    transform="translate(-140.889 23.111)"
                  />
                  <path
                    class="cross"
                    d="M155.889-9.524l-1.413,1.413L150.889-11.7,147.3-8.111l-1.413-1.413,3.588-3.588L145.889-16.7l1.413-1.413,3.587,3.588,3.587-3.588,1.413,1.413L152.3-13.111Z"
                    transform="translate(-140.889 23.111)"
                  />
                </svg>
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
          <router-link :to="{name:'商品列表'}">
            <div class="img-area">
              <img src="~@/assets/img/photos/M106192065-900n@3x-1@2x.png" alt />
              <button class="cancel-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                  <path
                    class="the-back"
                    d="M150.889-23.111a10,10,0,0,0-10,10,10,10,0,0,0,10,10,10,10,0,0,0,10-10,10,10,0,0,0-10-10Z"
                    transform="translate(-140.889 23.111)"
                  />
                  <path
                    class="cross"
                    d="M155.889-9.524l-1.413,1.413L150.889-11.7,147.3-8.111l-1.413-1.413,3.588-3.588L145.889-16.7l1.413-1.413,3.587,3.588,3.587-3.588,1.413,1.413L152.3-13.111Z"
                    transform="translate(-140.889 23.111)"
                  />
                </svg>
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
  data() {
    return {};
  },
  components: {
    carousel
  }
};
</script>

<style lang="scss" scoped>
</style>
