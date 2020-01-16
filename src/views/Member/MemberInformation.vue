<template>
  <div class="member-information-page">
    <BasicInformation />
    <CommonPassword />
    <MyMoney />
  </div>
</template>

<script>
import BasicInformation from "@/components/pages/MemberInformation/BasicInformation";
import MyMoney from "@/components/pages/MyAccount/MyMoney";
import CommonPassword from "@/components/pages/MemberInformation/CommonPassword";

export default {
  components: {
    BasicInformation,
    CommonPassword,
    MyMoney
  }
};
</script>
