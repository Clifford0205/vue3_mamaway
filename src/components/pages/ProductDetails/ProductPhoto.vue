<template>
  <div class="product-photo">
    <ul class="album">
      <li
        v-for="(item,index) in album"
        :key="index"
        :class="{'active': activePhoto == index}"
        @click="activePhoto = index"
      >
        <img :src="item" alt />
      </li>
      <!-- <li>555</li> -->
    </ul>
    <div class="big-img">
      <img :src="album[activePhoto]" alt />
      <button class="arrow arrow-left" @click="previousPhoto">
        <img src="~@/assets/img/icons/icn_arrow_l_b.svg" alt />
      </button>
      <button class="arrow arrow-right" @click="nextPhoto">
        <img src="~@/assets/img/icons/icn_arrow_r_b.svg" alt />
      </button>
    </div>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  props: {
    album: {
      require: true,
      type: Array
    }
  },
  data() {
    return {
      activePhoto: null
    };
  },
  components: {},

  methods: {
    nextPhoto() {
      let vm = this;
      vm.activePhoto =
        vm.activePhoto + 1 < vm.album.length ? vm.activePhoto + 1 : 0;
    },
    previousPhoto() {
      let vm = this;
      vm.activePhoto =
        vm.activePhoto - 1 > 0 ? vm.activePhoto - 1 : vm.album.length;
    }
  },

  mounted() {
    this.activePhoto = 0;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
