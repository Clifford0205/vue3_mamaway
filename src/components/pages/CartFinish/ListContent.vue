<template>
  <div>
    <div class="content-area order-finish-detail">
      <ShopProcess />
      <div class="check-out">
        <InformationDetail />
        <OrderDetail />
      </div>
    </div>
  </div>
</template>

<script>
import ShopProcess from "./ShopProcess";
import OrderDetail from "./OrderDetail";
import InformationDetail from "./InformationDetail";

export default {
  components: {
    ShopProcess,
    OrderDetail,
    InformationDetail
  }
};
</script>
