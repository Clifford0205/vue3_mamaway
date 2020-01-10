<template>
  <div class="function-list-nav" :class="{show:isShow}">
    <div class="ar-nav">
      <button class="filter-btn" :class="{active:isFilterBlock}" @click="openFilterBlock">
        <img src="~@/assets/img/icons/组件 33 – 3.svg" alt />
        <span>篩選</span>
        <i class="fas fa-chevron-down"></i>
      </button>

      <button class="sort-btn">
        <img src="~@/assets/img/icons/组件 34 – 3.svg" alt />
        <span>排序</span>
        <i class="fas fa-chevron-down"></i>
      </button>
    </div>

    <div class="mobile-nav">
      <div class="d-flex btns">
        <button @click="openFilter">
          <img src="~@/assets/img/icons/组件 33 – 3.svg" alt />
          <span>篩選</span>
        </button>
        <button>
          <img src="~@/assets/img/icons/组件 34 – 3.svg" alt />
          <span>排序</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import carousel from "vue-owl-carousel";

export default {
  data() {
    return {
      isShow: false,
      isFilterBlock: false
    };
  },
  components: {
    carousel
  },
  methods: {
    openFilter: function() {
      $("body").addClass("filter-page-open");
      $(".filter-page").css({ display: "block" });
    },

    openFilterBlock: function() {
      let vm = this;
      vm.isFilterBlock = !vm.isFilterBlock;
      vm.isShow = !vm.isShow;
      $(".filter-box").toggleClass("show");
    }
  }
};
</script>

