<template>
  <div class="use-offer-mobile-out" @click="closeCartMobile" v-show="userForMobile">
    <div class="use-offer-mobile" @click.stop>
      <div class="for-pos">
        <button class="cart-close" @click="closeCartMobile">
          <img src="~@/assets/img/icons/icn_close_b.svg" alt />
        </button>

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

              <div class="purchase-money-form" v-if="!isSend">
                <input type="text" placeholder="請輸入活動字串" class="money-input" />
                <button class="money-btn" @click="sendActiveString">送出</button>
              </div>

              <div class="for-pos-input" v-if="isSend">
                <input type="text" placeholder="活動字串" class="string-input" />

                <span class="discount-price">108 元</span>
                <span class="triangle"></span>
                <img src="~@/assets/img/icons/icn_close10.svg" class="close-img" alt />
              </div>
            </div>
          </form>
        </div>

        <button class="confirm">確認使用</button>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  data() {
    return {
      isSend: false
    };
  },
  computed: {
    userForMobile() {
      return this.$store.state.userForMobile;
    }
  },

  methods: {
    closeCartMobile: function() {
      this.$store.dispatch("userForMobile", false);
    },
    sendActiveString: function() {
      let vm = this;
      vm.isSend = true;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
