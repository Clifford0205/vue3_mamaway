<template>
  <div class="cart-list-page">
    <Breadcrumb />
    <ListContent />
    <UseOfferMobile />
  </div>
</template>

<script>
import Breadcrumb from "@/components/Breadcrumb";
import ListContent from "@/components/pages/CartList/ListContent";
import UseOfferMobile from "@/components/UseOfferMobile";

export default {
  components: {
    Breadcrumb,
    ListContent,
    UseOfferMobile
  }
};
</script>

<style  lang="scss" scoped>
@import "@/assets/helpers/_myset.scss";
body {
  .breadcrumb {
    display: flex;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 0;

    @include lg {
      margin-top: 10px;
      margin-bottom: 10px;
    }
  }

  .BottomMenu {
    @include lg {
      // display: none;
    }
  }
}
</style>




