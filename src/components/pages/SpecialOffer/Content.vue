<template>
  <div>
    <div class="content">
      <RecommendSlider />
      <KV />
      <ChooseBuy />
      <FunctionList />
      <FilterBox />
      <ProductList />
      <Pagination />
    </div>
  </div>
</template>

<script>
import RecommendSlider from "./RecommendSlider";
import KV from "./KV";
import FunctionList from "./FunctionList";
import FilterBox from "./FilterBox";
import ChooseBuy from "./ChooseBuy";
import ProductList from "./ProductList";
import Pagination from "./Pagination";

export default {
  components: {
    RecommendSlider,
    KV,
    FunctionList,
    FilterBox,
    ChooseBuy,
    ProductList,
    Pagination
  }
};
</script>
