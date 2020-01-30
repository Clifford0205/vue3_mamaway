<template>
  <div class="recommend-slider">
    <carousel
      :items="9"
      :dots="false"
      :nav="false"
      :responsive="{
          0: {
            items: 3,
            nav: false,
          },
          996: {
            items: 9,
          }
        }"
    >
      <template slot="prev">
        <button class="prev">
          <img src="~@/assets/img/icons/icn_arrow_l.svg" alt />
        </button>
      </template>

      <template slot="next">
        <button class="next" style="display:block">
          <img src="~@/assets/img/icons/icn_arrow_r_b.svg" alt />
        </button>
      </template>
      <a class="text-center classify now-show">
        <p>暖心推薦 任選399</p>
        <div class="triangle"></div>
      </a>
      <a class="text-center classify">
        <p>暖心推薦 任選399</p>
        <div class="triangle"></div>
      </a>
      <a class="text-center classify">
        <p>暖心推薦 任選399</p>
        <div class="triangle"></div>
      </a>
      <a class="text-center classify">
        <p>暖心推薦 任選399</p>
        <div class="triangle"></div>
      </a>
      <a class="text-center classify">
        <p>暖心推薦 任選399</p>
        <div class="triangle"></div>
      </a>
      <a class="text-center classify">
        <p>暖心推薦 任選399</p>
        <div class="triangle"></div>
      </a>
      <a class="text-center classify">
        <p>暖心推薦 任選399</p>
        <div class="triangle"></div>
      </a>
      <a class="text-center classify">
        <p>暖心推薦 任選399</p>
        <div class="triangle"></div>
      </a>
      <a class="text-center classify">
        <p>暖心推薦 任選399</p>
        <div class="triangle"></div>
      </a>

      <a class="text-center classify">
        <p>暖心推薦 任選399</p>
        <div class="triangle"></div>
      </a>

      <a class="text-center classify">
        <p>暖心推薦 任選399</p>
        <div class="triangle"></div>
      </a>
    </carousel>
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";
export default {
  data() {
    return {};
  },
  components: {
    carousel
  }
};
</script>

<style lang="scss" scoped>
</style>
