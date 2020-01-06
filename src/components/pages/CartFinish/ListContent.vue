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
import ChoosePayWay from "./ChoosePayWay";
import ChooseDeliveryWay from "./ChooseDeliveryWay";
import RecipientInformation from "./RecipientInformation";
import OrderDetail from "./OrderDetail";
import InvoiceInfo from "./InvoiceInfo";
import MobileTotal from "./MobileTotal";
import InformationDetail from "./InformationDetail";

export default {
  components: {
    ShopProcess,
    ChoosePayWay,
    ChooseDeliveryWay,
    RecipientInformation,
    InvoiceInfo,
    MobileTotal,
    OrderDetail,
    InformationDetail
  }
};
</script>

