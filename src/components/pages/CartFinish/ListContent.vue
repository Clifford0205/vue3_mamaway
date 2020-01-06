<template>
  <div>
    <div class="content-area">
      <ShopProcess />
      <ChoosePayWay />
      <ChooseDeliveryWay />
      <RecipientInformation />
      <InvoiceInfo />
      <MobileTotal />
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

export default {
  components: {
    ShopProcess,
    ChoosePayWay,
    ChooseDeliveryWay,
    RecipientInformation,
    InvoiceInfo,
    MobileTotal,
    OrderDetail
  }
};
</script>

