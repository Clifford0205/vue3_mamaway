<template>
  <div class="my-account-page">
    <AccountTitle />
    <MyMoney />
    <DetailList />
  </div>
</template>

<script>
import AccountTitle from "@/components/pages/MyAccount/AccountTitle";
import MyMoney from "@/components/pages/MyAccount/MyMoney";
import DetailList from "@/components/pages/MyAccount/DetailList";

export default {
  components: {
    AccountTitle,
    MyMoney,
    DetailList
  }
};
</script>
