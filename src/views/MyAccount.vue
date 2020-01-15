<template>
  <div class="my-account-page">
    <AccountTitle />
    <MyMoney />
  </div>
</template>

<script>
import AccountTitle from "@/components/pages/MyAccount/AccountTitle";
import MyMoney from "@/components/pages/MyAccount/MyMoney";

export default {
  components: {
    AccountTitle,
    MyMoney
  }
};
</script>
