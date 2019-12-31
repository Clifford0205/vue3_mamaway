<template>
  <div class="chcek-out">
    <div class="purchase">
      <div class="subtotal purchase-item">
        <p>小計 共12件商品</p>
        <p>NT$99,000</p>
      </div>

      <div class="buy-item purchase-item">
        <p class="buy-name">加價購 - 襯衫式印花孕哺洋裝...</p>
        <p>NT$99,000</p>
      </div>

      <div class="buy-item purchase-item">
        <p class="buy-name">加價購 - 襯衫式印花孕哺洋裝</p>
        <p>NT$99,000</p>
      </div>

      <div class="activity-discount purchase-item">
        <p>活動折抵</p>
        <p class="discount-text">-NT$9,000</p>
      </div>
    </div>
    <div class="total">
      <p>總計</p>
      <p class="total-text">NT$99,000</p>
    </div>

    <div class="gap-price">
      <p>
        還差
        <span class="red-text">$500</span>元，就有2000元的滿額贈品
      </p>
    </div>

    <div class="discount-way">
      <p class="discount-title">
        選擇優惠方式
        <span class="remind">只可擇一使用</span>
      </p>

      <form class="choose-way">
        <div class="purchase-money">
          <div class="purchase-money-radio">
            <input type="radio" name="pay-way" value="Taipei" /> 購物金
          </div>
          <p>
            目前購物金
            <span class="red-text">1328 元</span>
          </p>
        </div>
        <div class="purchase-money-form">
          <input type="text" placeholder="欲使用的購物金額度" class="money-input" />
          <button class="money-btn">全部抵用</button>
        </div>

        <div class="coupon">
          <div class="coupon-radio">
            <input type="radio" name="pay-way" value="Taoyuan" /> 抵用券
          </div>
          <select class="coupon-select">
            <option value>請選擇抵用券</option>
            <option value>ＸＸＸ</option>
            <option value>ＯＯＯ</option>
          </select>
        </div>

        <div class="activity-string">
          <div class="string-radio">
            <input type="radio" name="pay-way" value="Taoyuan" /> 活動字串
          </div>

          <div class="for-pos">
            <input type="text" placeholder="活動字串" class="string-input" />

            <span class="discount-price">108 元</span>
            <span class="triangle"></span>
            <img src="~@/assets/img/icons/icn_close10.svg" class="close-img" alt />
          </div>
        </div>
      </form>
    </div>

    <button>繼續選購</button>
    <button>結帳</button>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  data() {
    return {};
  },
  components: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
