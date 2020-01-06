<template>
  <div>
    <Navbar />
    <router-view></router-view>
    <CustomerInfo />
    <FloatMedia />
    <Footer />
    <BottomMenu />
    <router-view name="addincartmobile"></router-view>
    <router-view name="checkoutbottommenu"></router-view>
    <router-view name="sendorderbottommenu"></router-view>
    <BigMenu />
    <FilterPage />
    <GoTop />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomerInfo from "@/components/CustomerInfo";
import FloatMedia from "@/components/FloatMedia";
import BottomMenu from "@/components/BottomMenu";
import BigMenu from "@/components/BigMenu";
import FilterPage from "@/components/FilterPage";
import GoTop from "@/components/GoTop";

export default {
  components: {
    Navbar,
    Footer,
    CustomerInfo,
    BottomMenu,
    BigMenu,
    GoTop,
    FilterPage,
    FloatMedia
  }
};
</script>

<style lang="scss">
// @import "@/assets/all.scss";
</style>
