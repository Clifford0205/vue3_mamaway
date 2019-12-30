<template>
  <div aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <a href="#">首頁</a>
      </li>
      <li class="breadcrumb-item">
        <a href="#">孕哺服飾</a>
      </li>
      <li class="breadcrumb-item active" aria-current="page">
        <a href="#">內衣著孕</a>
      </li>
    </ol>
  </div>
</template>

<script>
import $ from "jquery";
import carousel from "vue-owl-carousel";

export default {
  data() {
    return {
      options: [
        {
          title: "Visa",
          cardImage: "~@/assets/img/icons/组件 33 – 3.svg"
        },
        {
          title: "country1",
          cardImage: "https://via.placeholder.com/20"
        }
      ]
    };
  },
  components: {
    carousel
  }
};
</script>

