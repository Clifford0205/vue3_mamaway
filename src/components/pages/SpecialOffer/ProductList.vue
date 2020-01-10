<template>
  <div class="product-list">
    <product v-for="(item, index) in InfoData" :key="index" :product="item" />
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";
import Product from "@/components/pages/SpecialOffer/Product";
export default {
  data() {
    return {
      InfoData: [
        {
          img: require("@/assets/img/photos/M106192065-900n@3x-1@2x.png"),
          carouselImg: [
            "https://images2.imgbox.com/d3/eb/RyWGmKXT_o.png",
            "https://images2.imgbox.com/be/12/cZ9YajXz_o.png"
          ],
          title: "襯衫式印花孕哺洋裝(兩穿)",
          oldPrice: "NT$1380",
          newPrice: "NT$990"
        },
        {
          img: require("@/assets/img/photos/M106192065-900n@3x-1@2x.png"),
          carouselImg: [
            "https://images2.imgbox.com/d3/eb/RyWGmKXT_o.png",
            "https://images2.imgbox.com/be/12/cZ9YajXz_o.png"
          ],
          title: "襯衫式印花孕哺洋裝(兩穿)",
          oldPrice: "NT$1380",
          newPrice: "NT$990"
        },
        {
          img: require("@/assets/img/photos/M106192065-900n@3x-1@2x.png"),
          carouselImg: [
            "https://images2.imgbox.com/d3/eb/RyWGmKXT_o.png",
            "https://images2.imgbox.com/be/12/cZ9YajXz_o.png"
          ],
          title: "襯衫式印花孕哺洋裝(兩穿)",
          oldPrice: "NT$1380",
          newPrice: "NT$990"
        },
        {
          img: require("@/assets/img/photos/M106192065-900n@3x-1@2x.png"),
          carouselImg: [
            "https://images2.imgbox.com/d3/eb/RyWGmKXT_o.png",
            "https://images2.imgbox.com/be/12/cZ9YajXz_o.png"
          ],
          title: "襯衫式印花孕哺洋裝(兩穿)",
          oldPrice: "NT$1380",
          newPrice: "NT$990"
        },
        {
          img: require("@/assets/img/photos/M106192065-900n@3x-1@2x.png"),
          carouselImg: [
            "https://images2.imgbox.com/d3/eb/RyWGmKXT_o.png",
            "https://images2.imgbox.com/be/12/cZ9YajXz_o.png"
          ],
          title: "襯衫式印花孕哺洋裝(兩穿)",
          oldPrice: "NT$1380",
          newPrice: "NT$990"
        },
        {
          img: require("@/assets/img/photos/M106192065-900n@3x-1@2x.png"),
          carouselImg: [
            "https://images2.imgbox.com/d3/eb/RyWGmKXT_o.png",
            "https://images2.imgbox.com/be/12/cZ9YajXz_o.png"
          ],
          title: "襯衫式印花孕哺洋裝(兩穿)",
          oldPrice: "NT$1380",
          newPrice: "NT$990"
        },
        {
          img: require("@/assets/img/photos/M106192065-900n@3x-1@2x.png"),
          carouselImg: [
            "https://images2.imgbox.com/d3/eb/RyWGmKXT_o.png",
            "https://images2.imgbox.com/be/12/cZ9YajXz_o.png"
          ],
          title: "襯衫式印花孕哺洋裝(兩穿)",
          oldPrice: "NT$1380",
          newPrice: "NT$990"
        },
        {
          img: require("@/assets/img/photos/M106192065-900n@3x-1@2x.png"),
          carouselImg: [
            "https://images2.imgbox.com/d3/eb/RyWGmKXT_o.png",
            "https://images2.imgbox.com/be/12/cZ9YajXz_o.png"
          ],
          title: "襯衫式印花孕哺洋裝(兩穿)",
          oldPrice: "NT$1380",
          newPrice: "NT$990"
        },
        {
          img: require("@/assets/img/photos/M106192065-900n@3x-1@2x.png"),
          carouselImg: [
            "https://images2.imgbox.com/d3/eb/RyWGmKXT_o.png",
            "https://images2.imgbox.com/be/12/cZ9YajXz_o.png"
          ],
          title: "襯衫式印花孕哺洋裝(兩穿)",
          oldPrice: "NT$1380",
          newPrice: "NT$990"
        }
      ]
    };
  },
  components: {
    Product
  }
};
</script>

<style lang="scss" scoped>
</style>
