<template>
  <div>
    <div class="list-content">
      <div class="row">
        <div class="col-lg-8">
          <ShopProcess />
          <ShopCartDetail />
          <AddPriceBuy />
          <FullGift2000 />
          <FullGift5000 />
        </div>
        <div class="col-lg-4">
          <CheckOut />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import carousel from "vue-owl-carousel";
import ShopProcess from "./ShopProcess";
import ShopCartDetail from "./ShopCartDetail";
import AddPriceBuy from "./AddPriceBuy";
import FullGift2000 from "./FullGift2000";
import FullGift5000 from "./FullGift5000";
import CheckOut from "./CheckOut";

export default {
  data() {
    return {};
  },
  components: {
    carousel,
    ShopProcess,
    ShopCartDetail,
    AddPriceBuy,
    FullGift2000,
    FullGift5000,
    CheckOut
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
