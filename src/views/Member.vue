<template>
  <div>
    <div class="member-page">
      <Breadcrumb />
      <MemberKv />
      <div class="row">
        <MemberSideMenu class="col-lg-3" />
      </div>

      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Breadcrumb from "@/components/Breadcrumb";
import MemberKv from "@/components/MemberKv";
import MemberSideMenu from "@/components/MemberSideMenu";

export default {
  components: {
    Breadcrumb,
    MemberKv,
    MemberSideMenu
  }
};
</script>
