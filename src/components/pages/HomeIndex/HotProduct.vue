<template>
  <div class="hot-product">
    <h2>熱銷商品</h2>
    <div class="carousel-area">
      <carousel
        :dots="false"
        :items="5"
        :margin="26"
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
            items: 5
          }
        }"
      >
        <div class="item">
          <router-link :to="{name:'商品列表'}">
            <div class="img-area">
              <img src="~@/assets/img/photos/M106192065-900n@3x-1@2x.png" alt />
              <div class="circle">
                <object>
                  <a href="https://github.com/dashboard" class="love-area" @click="showBlack">
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
            <object>
              <a class="buy">買2送1</a>
            </object>
          </router-link>
        </div>
        <div class="item">
          <a href>
            <div class="img-area">
              <img src="~@/assets/img/photos/M106192065-900n@3x@2x.png" alt />
              <div class="circle">
                <object>
                  <a href="https://github.com/dashboard" class="love-area">
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
            <object>
              <a href class="buy">買2送1</a>
            </object>
          </a>
        </div>

        <div class="item">
          <a href>
            <div class="img-area">
              <img src="~@/assets/img/photos/M106192065-900n@3x@2x.png" alt />
              <div class="circle">
                <object>
                  <a href="https://github.com/dashboard" class="love-area">
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
            <object>
              <a href class="buy">買2送1</a>
            </object>
          </a>
        </div>

        <div class="item">
          <a href>
            <div class="img-area">
              <img src="~@/assets/img/photos/M106192065-900n@3x@2x.png" alt />
              <div class="circle">
                <object>
                  <a href="https://github.com/dashboard" class="love-area">
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
            <object>
              <a href class="buy">買2送1</a>
            </object>
          </a>
        </div>

        <div class="item">
          <a href>
            <div class="img-area">
              <img src="~@/assets/img/photos/M106192065-900n@3x@2x.png" alt />
              <div class="circle">
                <object>
                  <a href="https://github.com/dashboard" class="love-area">
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
            <object>
              <a href class="buy">買2送1</a>
            </object>
          </a>
        </div>

        <div class="item">
          <a href>
            <div class="img-area">
              <img src="~@/assets/img/photos/M106192065-900n@3x@2x.png" alt />
              <div class="circle">
                <object>
                  <a href="https://github.com/dashboard" class="love-area">
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
            <object>
              <a href class="buy">買2送1</a>
            </object>
          </a>
        </div>
      </carousel>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import carousel from "vue-owl-carousel";

export default {
  data() {
    return {
      isShow: false
    };
  },
  components: {
    carousel
  },
  methods: {
    showBlack: function(e) {
      event.preventDefault();
      let vm = this;
      vm.isShow = !vm.isShow;
      e.target.parentNode.querySelector(".black");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
