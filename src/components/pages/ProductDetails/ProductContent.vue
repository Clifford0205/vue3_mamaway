<template>
  <div class="row product-content">
    <div class="format-menu">
      <div class="btns">
        <a class="menubtn" :class="{active:whatShow=='content'}" @click="whatShow='content'">商品內容</a>
        <a
          class="menubtn"
          :class="{active:whatShow=='chart_size'}"
          @click="whatShow='chart_size'"
        >尺寸表</a>
        <a
          class="menubtn"
          :class="{active:whatShow=='product_quality'}"
          @click="whatShow='product_quality'"
        >商品材質</a>
      </div>
    </div>

    <div class="the-line"></div>

    <div class="content-area" v-if="whatShow=='content'">
      <div class="product-description">
        <ul>
          <li>●立體五分袖，遮住手臂肉</li>
          <li>●抓皺ALINE剪裁，更顯瘦</li>
          <li>●夏日清新風格</li>
          <li>●涼爽材質, 透氣不悶熱</li>
          <li>●背心+罩衫，可分開隨意搭配</li>
          <li>
            ●可與B101191714搭配親子裝→
            <a href>請點我</a>
          </li>
        </ul>

        <p class="inform">※親愛的顧客，您好，每台電腦皆有色差之問題，標準顏色以實品為準。 下單前請仔細對照上方衣服尺寸表、試穿建議報告，再依您的身材挑選合適的尺吋！</p>
      </div>

      <div class="Intro-img">
        <img src="~@/assets/img/photos/B101192720-1000@2x.png" alt />
      </div>

      <div class="size-table">
        <img src="~@/assets/img/photos/尺寸表.svg" alt />
      </div>
    </div>

    <div class="chart-size-web" v-if="whatShow=='chart_size'">
      <table class="table size-table table-striped">
        <thead>
          <tr>
            <th scope="col" class="table-title">尺寸表</th>
            <th scope="col">XS</th>
            <th scope="col">S</th>
            <th scope="col">M</th>
            <th scope="col">L</th>
            <th scope="col">XL</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">胸圍</th>
            <td>21</td>
            <td>21</td>
            <td>21</td>
            <td>21</td>
            <td>21</td>
          </tr>
          <tr>
            <th scope="row">肩寬</th>
            <td>34</td>
            <td>34</td>
            <td>34</td>
            <td>34</td>
            <td>34</td>
          </tr>
          <tr>
            <th scope="row">前身長</th>
            <td>42</td>
            <td>42</td>
            <td>42</td>
            <td>42</td>
            <td>42</td>
          </tr>
          <tr>
            <th scope="row">後身長</th>
            <td>52</td>
            <td>52</td>
            <td>52</td>
            <td>52</td>
            <td>52</td>
          </tr>
          <tr>
            <th scope="row">下擺寬</th>
            <td>35.1</td>
            <td>35.1</td>
            <td>35.1</td>
            <td>35.1</td>
            <td>35.1</td>
          </tr>

          <tr>
            <th scope="row">袖攏</th>
            <td>15</td>
            <td>15</td>
            <td>15</td>
            <td>15</td>
            <td>15</td>
          </tr>

          <tr>
            <th scope="row">袖長</th>
            <td>55.7</td>
            <td>55.7</td>
            <td>55.7</td>
            <td>55.7</td>
            <td>55.7</td>
          </tr>

          <tr>
            <th scope="row">袖口寬</th>
            <td>124.2</td>
            <td>124.2</td>
            <td>124.2</td>
            <td>124.2</td>
            <td>124.2</td>
          </tr>

          <tr>
            <th scope="row">胸圍</th>
            <td>12</td>
            <td>12</td>
            <td>12</td>
            <td>12</td>
            <td>12</td>
          </tr>
        </tbody>
      </table>

      <div class="comment">
        <ul>
          <li>※單位：吋(1吋=2.54公分)</li>
          <li>※以上尺吋為平放攤開測量(來回一圈請乘於2)，誤差±1吋為正常範圍</li>
          <li>※平量時需視衣料彈性，再針酌個人穿衣鬆緊度來做選擇！</li>
        </ul>
      </div>

      <div class="measure">
        <div class="measure-title">
          <p>尺寸丈量法 How To Measure</p>
        </div>
      </div>
    </div>

    <div class="product_quality-area" v-if="whatShow=='product_quality'">
      <ul class="texture">
        <li>MAIN：100%POLYESTER</li>
        <li>OTHER：96%COTTON 4%POLYESTER</li>
        <li>哺乳開口：門襟式-兩側腋下哺乳開口</li>
        <li>洗滌：機洗/低溫/入袋/反面/不可浸泡/不可漂白/不可烘乾</li>
        <li>彈性：適中</li>
        <li>產地：台灣</li>
      </ul>
    </div>

    <div class="product_quality"></div>

    <div class="product-detail">
      <div class="mobile-content">
        <div class="expand-item" :class="{ open_menu: size_chart }">
          <a class="expand-menu-title size_chart" @click.prevent="expandSizeChart">
            尺寸表
            <i class="fas fa-chevron-right transition"></i>
          </a>

          <div class="expand-content transition">
            <div class="chart-size-mobile">
              <table class="table size-table table-striped">
                <thead>
                  <tr>
                    <th scope="col" class="table-title">尺寸表</th>
                    <th scope="col">XS</th>
                    <th scope="col">S</th>
                    <th scope="col">M</th>
                    <th scope="col">L</th>
                    <th scope="col">XL</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">胸圍</th>
                    <td>21</td>
                    <td>21</td>
                    <td>21</td>
                    <td>21</td>
                    <td>21</td>
                  </tr>
                  <tr>
                    <th scope="row">肩寬</th>
                    <td>34</td>
                    <td>34</td>
                    <td>34</td>
                    <td>34</td>
                    <td>34</td>
                  </tr>
                  <tr>
                    <th scope="row">前身長</th>
                    <td>42</td>
                    <td>42</td>
                    <td>42</td>
                    <td>42</td>
                    <td>42</td>
                  </tr>
                  <tr>
                    <th scope="row">後身長</th>
                    <td>52</td>
                    <td>52</td>
                    <td>52</td>
                    <td>52</td>
                    <td>52</td>
                  </tr>
                  <tr>
                    <th scope="row">下擺寬</th>
                    <td>35.1</td>
                    <td>35.1</td>
                    <td>35.1</td>
                    <td>35.1</td>
                    <td>35.1</td>
                  </tr>

                  <tr>
                    <th scope="row">袖攏</th>
                    <td>15</td>
                    <td>15</td>
                    <td>15</td>
                    <td>15</td>
                    <td>15</td>
                  </tr>

                  <tr>
                    <th scope="row">袖長</th>
                    <td>55.7</td>
                    <td>55.7</td>
                    <td>55.7</td>
                    <td>55.7</td>
                    <td>55.7</td>
                  </tr>

                  <tr>
                    <th scope="row">袖口寬</th>
                    <td>124.2</td>
                    <td>124.2</td>
                    <td>124.2</td>
                    <td>124.2</td>
                    <td>124.2</td>
                  </tr>

                  <tr>
                    <th scope="row">胸圍</th>
                    <td>12</td>
                    <td>12</td>
                    <td>12</td>
                    <td>12</td>
                    <td>12</td>
                  </tr>
                </tbody>
              </table>

              <div class="comment">
                <ul>
                  <li>※單位：吋(1吋=2.54公分)</li>
                  <li>※以上尺吋為平放攤開測量(來回一圈請乘於2)，誤差±1吋為正常範圍</li>
                  <li>※平量時需視衣料彈性，再針酌個人穿衣鬆緊度來做選擇！</li>
                </ul>
              </div>

              <div class="measure">
                <div class="measure-title">
                  <p>尺寸丈量法 How To Measure</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="product-detail">
      <div class="mobile-content">
        <div class="expand-item" :class="{open_menu:product_description}">
          <a
            class="expand-menu-title product_description"
            @click.prevent="expandProductDescription"
          >
            商品描述
            <i class="fas fa-chevron-right transition"></i>
          </a>

          <div class="expand-content transition"></div>
        </div>
      </div>
    </div>

    <div class="product-detail">
      <div class="mobile-content">
        <div class="expand-item" :class="{open_menu:product_quality}">
          <a class="expand-menu-title product_quality" @click.prevent="expandProductQuality">
            商品材質
            <i class="fas fa-chevron-right transition"></i>
          </a>

          <div class="expand-content transition">
            <ul class="texture">
              <li>MAIN：100%POLYESTER</li>
              <li>OTHER：96%COTTON 4%POLYESTER</li>
              <li>哺乳開口：門襟式-兩側腋下哺乳開口</li>
              <li>洗滌：機洗/低溫/入袋/反面/不可浸泡/不可漂白/不可烘乾</li>
              <li>彈性：適中</li>
              <li>產地：台灣</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="product-detail">
      <div class="mobile-content">
        <div class="expand-item" :class="{open_menu:product_details}">
          <a class="expand-menu-title product_details" @click="expandProductDetails">
            商品詳情
            <i class="fas fa-chevron-right transition"></i>
          </a>

          <div class="expand-content transition">
            <div class="Intro-img-mobile">
              <img src="~@/assets/img/photos/B101192720-1000@2x.png" alt />
            </div>

            <div class="size-table-mobile">
              <img src="~@/assets/img/photos/尺寸表.svg" alt />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import carousel from "vue-owl-carousel";

export default {
  data() {
    return {
      // expand: false
      size_chart: false,
      product_description: false,
      product_quality: false,
      product_details: false,
      whatShow: "content"
    };
  },
  components: {
    carousel
  },
  methods: {
    expandItem: function(e) {
      console.log(e.target.classList[1]);
      let tname = e.target.classList[1];
      let vm = this;
      vm[tname] = !vm[tname];
    },
    expand(name) {
      this[name] = !this[name];
    },
    expandSizeChart() {
      this.expand("size_chart");
    },
    expandProductDescription() {
      this.expand("product_description");
    },
    expandProductQuality() {
      this.expand("product_quality");
    },
    expandProductDetails() {
      this.expand("product_details");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
