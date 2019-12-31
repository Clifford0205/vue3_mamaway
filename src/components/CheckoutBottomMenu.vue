<template>
  <div class="CheckoutBottom">
    <!-- fixed留白區域 -->
    <div class="mobile-block-mobile"></div>
    <!-- fixed留白區域 -->
    <div class="checkout-bottom-menu">
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
        <p>結帳(1)</p>
      </button>
    </div>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  data() {
    return {};
  },

  methods: {
    openMenu: function() {
      $(".big-menu").css({ display: "flex" });
      setTimeout(function() {
        $(".big-menu").addClass("menu-show");
      }, 500);
    },

    openAddCart: function() {
      $(".add-in-cart-mobile").css({ display: "block" });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
