<template>
  <div class="BottomMenuCart">
    <!-- fixed留白區域 -->
    <div class="mobile-block-mobile"></div>
    <!-- fixed留白區域 -->
    <div class="bottom-menu-cart">
      <div class></div>
      <button class="menu-btn" @click="openMenu">
        <img src="~@/assets/img/icons/icn_menu.svg" alt />
        <p>主選單</p>
      </button>
      <button class="menu-btn">
        <img src="~@/assets/img/icons/icn_talk.svg" alt />
        <p>客服</p>
      </button>
      <button class="menu-btn">
        <img src="~@/assets/img/icons/icn_like.svg" alt />
        <span class="num">1</span>
        <p>追蹤清單</p>
      </button>
      <button class="menu-btn">
        <img src="~@/assets/img/icons/icn_shop.svg" alt />
        <span class="num">1</span>
        <p>購物車</p>
      </button>
      <button class="menu-btn" @click="openAddCart">
        <p>加入購物車</p>
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

  computed: {
    isBigMenuShow() {
      return this.$store.state.isBigMenuShow;
    },
    BigMenuOpacity() {
      return this.$store.state.BigMenuOpacity;
    }
  },

  methods: {
    openMenu() {
      const vm = this;
      vm.$store.dispatch("BigMenuShow", true);
      setTimeout(function() {
        vm.$store.dispatch("BigMenuOpacity", true);
      }, 500);
    },

    openAddCart() {
      this.$store.dispatch("cartMobileShow", true);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
