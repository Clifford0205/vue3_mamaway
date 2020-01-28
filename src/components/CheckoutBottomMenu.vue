<template>
  <div class="CheckoutBottom">
    <!-- fixed留白區域 -->
    <div class="mobile-block-checkout"></div>
    <!-- fixed留白區域 -->

    <div class="checkout-bottom-menu">
      <a class="coupon-dis-bar" @click="openUseOffer">
        <p class="dis-bar-text">使用優惠折抵</p>
        <div class="dis-nu">
          <div class="num">-$10,000</div>
          <div class="arrow">
            <img src="~@/assets/img/icons/icn_arrow_r.svg" alt />
          </div>
        </div>
      </a>

      <div class="btns">
        <button class="menu-btn subtotal">
          <p>
            小計
            <span class="price">＄100,000</span>
          </p>
        </button>
        <button class="menu-btn keep-shop">
          <p>繼續購物</p>
        </button>
        <button class="menu-btn checkout">
          <p>結帳</p>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  computed: {
    userForMobile() {
      return this.$store.state.userForMobile;
    }
  },
  methods: {
    openUseOffer() {
      this.$store.dispatch("userForMobile", true);
    }
  }
};
</script>

