<template>
  <div class="products">
    <div class="row">
      <Product v-for="(item, index) in InfoData" :key="index" :product="item"></Product>
    </div>
  </div>
</template>

<script>
import $ from "jquery";

import carousel from "@/components/library/Carousel";
import Product from "@/components/pages/ProductList/Product";

export default {
  data() {
    return {
      InfoData: [
        {
          img: require("@/assets/img/photos/M106192065-900n@3x-1@2x.png"),
          carouselImg: require("@/assets/img/photos/M106192065-900n@3x-1@2x.png"),
          title: "襯衫式印花孕哺洋裝(兩穿)",
          oldPrice: "NT$1380",
          newPrice: "NT$990"
        },
        {
          img: require("@/assets/img/photos/M106192065-900n@3x-1@2x.png"),
          carouselImg: require("@/assets/img/photos/M106192065-900n@3x-1@2x.png"),
          title: "襯衫式印花孕哺洋裝(兩穿)",
          oldPrice: "NT$1380",
          newPrice: "NT$990"
        },
        {
          img: require("@/assets/img/photos/M106192065-900n@3x-1@2x.png"),
          carouselImg: require("@/assets/img/photos/M106192065-900n@3x-1@2x.png"),
          title: "襯衫式印花孕哺洋裝(兩穿)",
          oldPrice: "NT$1380",
          newPrice: "NT$990"
        },
        {
          img: require("@/assets/img/photos/M106192065-900n@3x-1@2x.png"),
          carouselImg: require("@/assets/img/photos/M106192065-900n@3x-1@2x.png"),
          title: "襯衫式印花孕哺洋裝(兩穿)",
          oldPrice: "NT$1380",
          newPrice: "NT$990"
        },
        {
          img: require("@/assets/img/photos/M106192065-900n@3x-1@2x.png"),
          carouselImg: require("@/assets/img/photos/M106192065-900n@3x-1@2x.png"),
          title: "襯衫式印花孕哺洋裝(兩穿)",
          oldPrice: "NT$1380",
          newPrice: "NT$990"
        },
        {
          img: require("@/assets/img/photos/M106192065-900n@3x-1@2x.png"),
          carouselImg: require("@/assets/img/photos/M106192065-900n@3x-1@2x.png"),
          title: "襯衫式印花孕哺洋裝(兩穿)",
          oldPrice: "NT$1380",
          newPrice: "NT$990"
        },
        {
          img: require("@/assets/img/photos/M106192065-900n@3x-1@2x.png"),
          carouselImg: require("@/assets/img/photos/M106192065-900n@3x-1@2x.png"),
          title: "襯衫式印花孕哺洋裝(兩穿)",
          oldPrice: "NT$1380",
          newPrice: "NT$990"
        },
        {
          img: require("@/assets/img/photos/M106192065-900n@3x-1@2x.png"),
          carouselImg: require("@/assets/img/photos/M106192065-900n@3x-1@2x.png"),
          title: "襯衫式印花孕哺洋裝(兩穿)",
          oldPrice: "NT$1380",
          newPrice: "NT$990"
        },
        {
          img: require("@/assets/img/photos/M106192065-900n@3x-1@2x.png"),
          carouselImg: require("@/assets/img/photos/M106192065-900n@3x-1@2x.png"),
          title: "襯衫式印花孕哺洋裝(兩穿)",
          oldPrice: "NT$1380",
          newPrice: "NT$990"
        },
        {
          img: require("@/assets/img/photos/M106192065-900n@3x-1@2x.png"),
          carouselImg: require("@/assets/img/photos/M106192065-900n@3x-1@2x.png"),
          title: "襯衫式印花孕哺洋裝(兩穿)",
          oldPrice: "NT$1380",
          newPrice: "NT$990"
        },
        {
          img: require("@/assets/img/photos/M106192065-900n@3x-1@2x.png"),
          carouselImg: require("@/assets/img/photos/M106192065-900n@3x-1@2x.png"),
          title: "襯衫式印花孕哺洋裝(兩穿)",
          oldPrice: "NT$1380",
          newPrice: "NT$990"
        }
      ]
    };
  },
  components: {
    Product
  },
  methods: {}
};
</script>
