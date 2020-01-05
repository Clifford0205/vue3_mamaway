<template>
  <div>
    <div class="list-content">
      <div class="row">
        <div class="col-lg-7">
          <ShopProcess />
          <ChoosePayWay />
          <ChooseDeliveryWay />
          <RecipientInformation />
          <InvoiceInfo />
          <MobileTotal />
        </div>
        <div class="col-lg-5 check-out-part">
          <OrderDetail />
        </div>
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

