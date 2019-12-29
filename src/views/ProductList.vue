<template>
  <div class>
    <!-- <Breadcrumb /> -->
    <ProductKv />
    <ContentArea />
  </div>
</template>

<script>
import Breadcrumb from "@/components/pages/ProductList/Breadcrumb";
import ProductKv from "@/components/pages/ProductList/ProductKv";
import ContentArea from "@/components/pages/ProductList/ContentArea";

export default {
  components: {
    ProductKv,
    ContentArea,
    Breadcrumb
  }
};
</script>

<style scoped lang="scss">
</style>
