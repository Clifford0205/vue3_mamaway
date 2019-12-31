<template>
  <div class="cart-list-page">
    <Breadcrumb class="breadcrumb" />
    <ListContent />
  </div>
</template>

<script>
import Breadcrumb from "@/components/Breadcrumb";
import ListContent from "@/components/pages/CartList/ListContent";

export default {
  components: {
    Breadcrumb,
    ListContent
  }
};
</script>

<style  lang="scss">
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
}
</style>




