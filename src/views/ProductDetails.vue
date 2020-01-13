<template>
  <div>
    <Navbar class="top-nav" />
    <router-view></router-view>
    <CustomerInfo />
    <Footer />
    <BottomMenuCart />
    <AddInCartMobile />
    <BigMenu />
    <FilterPage />
    <GoTop />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomerInfo from "@/components/CustomerInfo";
import BottomMenuCart from "@/components/BottomMenuCart";
import AddInCartMobile from "@/components/AddInCartMobile";
import BigMenu from "@/components/BigMenu";
import FilterPage from "@/components/FilterPage";
import GoTop from "@/components/GoTop";

export default {
  components: {
    Navbar,
    Footer,
    CustomerInfo,
    BigMenu,
    GoTop,
    FilterPage,
    BottomMenuCart,
    AddInCartMobile
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/helpers/_myset.scss";
.top-nav {
  @include lg {
    display: none;
  }
}

.btn-menu {
  @include lg {
    display: none;
  }
}
</style>
