<template>
  <div class="cart-finish">
    <Breadcrumb class="breadcrumb" />
    <ListContent />
  </div>
</template>

<script>
import Breadcrumb from "@/components/Breadcrumb";
import ListContent from "@/components/pages/CartFinish/ListContent";

export default {
  components: {
    Breadcrumb,
    ListContent
  }
};
</script>

<style  lang="scss" >
@import "@/assets/helpers/_myset.scss";
body {
  .cart-finish {
    max-width: 750px !important;
  }
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
      display: none;
    }
  }
}
</style>




