<template>
  <div class="details-page">
    <div>
      <Breadcrumb />
      <AddInCart />
      <ProductContent />
      <SeeSharing />
      <div class="three-carousels">
        <Recommend />
        <RelatedProducts />
        <BrowsingHistory />
      </div>
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

<style  lang="scss" scoped>
@import "@/assets/helpers/_myset.scss";
.details-page {
  color: #525b67;
  .breadcrumb {
    display: flex;
    margin-top: 20px;
    margin-bottom: 20px;
    padding-left: 15px !important;

    @include lg {
      display: none !important;
    }
  }

  .three-carousels {
    @include lg {
      background-color: #fff;
    }
  }
}
</style>




