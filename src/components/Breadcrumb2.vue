<template>
  <div class="breadcrumb">
    <ol>
      <li
        class="breadcrumb-item"
        v-for="(item,index) in breadcrumbList"
        :key="index"
        @click="routeTo(index)"
      >
        <a>{{ item.name }}</a>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  data() {
    return {
      breadcrumbList: []
    };
  },
  mounted() {
    this.updateList();
  },
  watch: {
    $route() {
      this.updateList();
    }
  },
  methods: {
    routeTo(pRouteTo) {
      if (this.breadcrumbList[pRouteTo].link) {
        this.$router.push(this.breadcrumbList[pRouteTo].link);
      }
    },
    updateList() {
      console.log(this.$route);
      this.breadcrumbList = this.$route.meta.breadcrumb;
    }
  }
};
</script>

