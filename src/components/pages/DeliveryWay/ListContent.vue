<template>
  <div>
    <div class="list-content">
      <div class="row">
        <div class="col-lg-8">
          <ShopProcess />
          <ChoosePayWay />
          <AddPriceBuy />
          <FullGift2000 />
          <FullGift5000 />
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
import AddPriceBuy from "./AddPriceBuy";
import FullGift2000 from "./FullGift2000";
import FullGift5000 from "./FullGift5000";
import CheckOut from "./CheckOut";

export default {
  components: {
    ShopProcess,
    ChoosePayWay,
    AddPriceBuy,
    FullGift2000,
    FullGift5000,
    CheckOut
  }
};
</script>

