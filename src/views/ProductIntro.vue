<template>
  <div class="product-intro-page">
    <Breadcrumb2 />
    <MainKv />
    <ExpandBar />
    <Slider />
    <VideoPart />
    <LookAll />
  </div>
</template>

<script>
import Breadcrumb2 from "@/components/Breadcrumb2";
import AddInCart from "@/components/pages/ProductDetails/AddInCart";
import MainKv from "@/components/pages/ProductIntro/MainKv";
import ExpandBar from "@/components/pages/ProductIntro/ExpandBar";
import Slider from "@/components/pages/ProductIntro/Slider";
import VideoPart from "@/components/pages/ProductIntro/VideoPart";
import LookAll from "@/components/pages/ProductIntro/LookAll";

export default {
  components: {
    Breadcrumb2,
    MainKv,
    ExpandBar,
    Slider,
    VideoPart,
    LookAll
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
    padding-left: 0;

    @include lg {
      // display: none;
    }
  }
}
</style>




