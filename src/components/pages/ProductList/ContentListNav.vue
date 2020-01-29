<template>
  <div class="content-list-nav" :class="{show:isFilterBox}">
    <div class="top-nav">
      <nav aria-label="breadcrumb">
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
      </nav>

      <div class="d-flex ar-nav">
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

        <a href class="arrange active">
          <div class="icon-icn_array4 active"></div>
        </a>
        <a href class="arrange">
          <div class="icon-icn_array3"></div>
        </a>
      </div>
    </div>

    <div class="mobile-nav">
      <div class="d-flex btns">
        <button>
          <img src="~@/assets/img/icons/icn_arrow_d_g2.svg" alt />
          <span>分類</span>
        </button>
        <button @click="openFilter">
          <img src="~@/assets/img/icons/组件 33 – 3.svg" alt />
          <span>篩選</span>
        </button>
        <button>
          <img src="~@/assets/img/icons/组件 34 – 3.svg" alt />
          <span>排序</span>
        </button>
      </div>
      <div class="d-flex the-array">
        <a href class="arrange">
          <div class="icon-icn_array2 active"></div>
        </a>
        <a href class="arrange">
          <div class="icon-icn_array1"></div>
        </a>
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
    openFilter: function() {
      $("body").addClass("filter-page-open");
      this.$store.dispatch("filterPageOpen", true);
    },

    openFilterBlock() {
      this.$store.dispatch("isFilterBox", !this.$store.state.isFilterBox);
    }
  }
};
</script>

