<template>
  <div class="deliver-way">
    <Breadcrumb class="breadcrumb" />
    <ListContent />
  </div>
</template>

<script>
import Breadcrumb from "@/components/Breadcrumb";
import ListContent from "@/components/pages/DeliveryWay/ListContent";

export default {
  components: {
    Breadcrumb,
    ListContent
  }
};
</script>

<style  lang="scss" scoped>
@import "@/assets/helpers/_myset.scss";
body {
  .breadcrumb {
    display: flex;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 0;

    @include lg {
      margin-top: 10px;
      margin-bottom: 10px;
    }
  }

  .BottomMenu {
    @include lg {
      display: none;
    }
  }
}
</style>




