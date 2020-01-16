<template>
  <div>
    <div class="member-page">
      <Breadcrumb />
      <MemberKv />
      <div class="row">
        <MemberMenuPh />
        <MemberSideMenu class="col-lg-3" />
        <router-view class="col-lg-9"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from "@/components/Breadcrumb";
import MemberKv from "@/components/MemberKv";
import MemberSideMenu from "@/components/MemberSideMenu";
import MemberMenuPh from "@/components/MemberMenuPh";

export default {
  components: {
    Breadcrumb,
    MemberKv,
    MemberSideMenu,
    MemberMenuPh
  }
};
</script>
