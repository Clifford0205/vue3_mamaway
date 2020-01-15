<template>
  <div class="shop-cart-detail">
    <div class="add-price-buy">
      <div class="add-title">
        <div class="the-line"></div>
        <p class="title-text">加價購</p>
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
            items: 2,
            nav: false,
            
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
              <div class="circle">
                <object>
                  <a class="love-area">
                    <div class="icon-icn_like_b_h"></div>
                  </a>
                </object>
              </div>
            </div>
            <p class="title">襯衫式印花孕哺洋裝(兩穿)</p>
            <div class="d-flex price">
              <p class="o-price">NT$1380</p>
              <p class="new-price">NT$990</p>
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
          <div class="item">
            <div class="img-area">
              <img src="~@/assets/img/photos/M106192065-900n@3x-1@2x.png" alt />
              <div class="circle">
                <object>
                  <a class="love-area">
                    <div class="icon-icn_like_b_h"></div>
                  </a>
                </object>
              </div>
            </div>
            <p class="title">襯衫式印花孕哺洋裝(兩穿)</p>
            <div class="d-flex price">
              <p class="o-price">NT$1380</p>
              <p class="new-price">NT$990</p>
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

          <div class="item">
            <div class="img-area">
              <img src="~@/assets/img/photos/M106192065-900n@3x-1@2x.png" alt />
              <div class="circle">
                <object>
                  <a class="love-area">
                    <div class="icon-icn_like_b_h"></div>
                  </a>
                </object>
              </div>
            </div>
            <p class="title">襯衫式印花孕哺洋裝(兩穿)</p>
            <div class="d-flex price">
              <p class="o-price">NT$1380</p>
              <p class="new-price">NT$990</p>
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

          <div class="item">
            <div class="img-area">
              <img src="~@/assets/img/photos/M106192065-900n@3x-1@2x.png" alt />
              <div class="circle">
                <object>
                  <a class="love-area">
                    <div class="icon-icn_like_b_h"></div>
                  </a>
                </object>
              </div>
            </div>
            <p class="title">襯衫式印花孕哺洋裝(兩穿)</p>
            <div class="d-flex price">
              <p class="o-price">NT$1380</p>
              <p class="new-price">NT$990</p>
            </div>

            <div class="style-input">
              <input type="text" placeholder="尺寸" />
              <input type="text" placeholder="罩杯" />
              <input type="text" placeholder="數量" />
            </div>
            <div class="buy-it">
              <button>選 購</button>
            </div>
          </div>

          <div class="item">
            <div class="img-area">
              <img src="~@/assets/img/photos/M106192065-900n@3x-1@2x.png" alt />
              <div class="circle">
                <object>
                  <a class="love-area">
                    <div class="icon-icn_like_b_h"></div>
                  </a>
                </object>
              </div>
            </div>
            <p class="title">襯衫式印花孕哺洋裝(兩穿)</p>
            <div class="d-flex price">
              <p class="o-price">NT$1380</p>
              <p class="new-price">NT$990</p>
            </div>

            <div class="style-input">
              <input type="text" placeholder="尺寸" />
              <input type="text" placeholder="罩杯" />
              <input type="text" placeholder="數量" />
            </div>
            <div class="buy-it">
              <button>選 購</button>
            </div>
          </div>
        </carousel>
      </div>
    </div>
    <div class="mobile-line price-buy-line"></div>
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

<style lang="scss" scoped>
.price-buy-line {
  margin-top: 40px !important;
}
</style>

