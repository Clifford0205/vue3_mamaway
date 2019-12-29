<template>
  <div class="details-page">
    <div>
      <Breadcrumb class="breadcrumb" />
      <AddInCart />
      <ProductContent />
      <SeeSharing />
      <Recommend />
      <RelatedProducts />
      <BrowsingHistory />
    </div>
  </div>
</template>

<script>
import Breadcrumb from "@/components/Breadcrumb";
import AddInCart from "@/components/pages/ProductDetails/AddInCart";
import ProductContent from "@/components/pages/ProductDetails/ProductContent";
import SeeSharing from "@/components/pages/ProductDetails/SeeSharing";
import Recommend from "@/components/pages/ProductDetails/Recommend";
import RelatedProducts from "@/components/pages/ProductDetails/RelatedProducts";
import BrowsingHistory from "@/components/pages/ProductDetails/BrowsingHistory";

export default {
  components: {
    Breadcrumb,
    AddInCart,
    ProductContent,
    SeeSharing,
    Recommend,
    RelatedProducts,
    BrowsingHistory
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

    @include lg {
      display: none;
    }
  }
}
</style>




