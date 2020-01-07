<template>
  <li class="big-menu transition" style="display: none;" @click="closeMenu"></li>
</template>

<script>
import $ from "jquery";
import carousel from "vue-owl-carousel";

export default {
  data() {
    return {};
  },
  components: {
    carousel
  },
  methods: {
    closeMenu: function() {
      $(".big-menu").removeClass("menu-show");
      setTimeout(function() {
        $(".big-menu").css({ display: "none" });
      }, 500);
    },
    openLittleItem: function(e) {
      console.log(e.target.className);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
