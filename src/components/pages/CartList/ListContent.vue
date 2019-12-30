<template>
  <div>
    <div class="list-content">
      <div class="row">
        <div class="col-lg-7">
          <ShopProcess />
          <ShopCartDetail />
        </div>
        <div class="col-lg-5"></div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import carousel from "vue-owl-carousel";
import ShopProcess from "./ShopProcess";
import ShopCartDetail from "./ShopCartDetail";

export default {
  data() {
    return {};
  },
  components: {
    carousel,
    ShopProcess,
    ShopCartDetail
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
