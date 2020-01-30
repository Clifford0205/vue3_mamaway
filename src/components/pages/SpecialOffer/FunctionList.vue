<template>
  <div class="function-list-nav" :class="{show:isFilterBox}">
    <div class="ar-nav">
      <button class="filter-btn" :class="{active:isFilterBox}" @click="openFilterBlock">
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
    return {};
  },
  components: {
    carousel
  },
  computed: {
    isFilterBox() {
      return this.$store.state.isFilterBox;
    },
    filterPageOpen() {
      return this.$store.state.filterPageOpen;
    }
  },
  methods: {
    openFilter() {
      $("body").addClass("filter-page-open");
      this.$store.dispatch("filterPageOpen", true);
    },

    openFilterBlock() {
      this.$store.dispatch("isFilterBox", !this.$store.state.isFilterBox);
    }
  }
};
</script>

