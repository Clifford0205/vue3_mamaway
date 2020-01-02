<template>
  <div>
    <div class="list-content">
      <div class="row">
        <div class="col-lg-8">
          <ShopProcess />
          <ChoosePayWay />
          <ChooseDeliveryWay />
          <RecipientInformation />
        </div>
        <div class="col-lg-4 check-out-part">
          <CheckOut />
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
import CheckOut from "./CheckOut";

export default {
  components: {
    ShopProcess,
    ChoosePayWay,
    ChooseDeliveryWay,
    RecipientInformation,
    CheckOut
  }
};
</script>

