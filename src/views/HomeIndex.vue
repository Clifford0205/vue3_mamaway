<template>
  <div>
    <MainKv />
    <ThemeAct />
    <MainEvent />
    <HotProduct />
    <VideoPart />
    <Recommend />
    <MomWiki />
    <Witness />
    <IgArea />
    <MemberInfo />
  </div>
</template>

<script>
import MainKv from "@/components/pages/HomeIndex/MainKv";
import ThemeAct from "@/components/pages/HomeIndex/ThemeAct";
import MainEvent from "@/components/pages/HomeIndex/MainEvent";
import HotProduct from "@/components/pages/HomeIndex/HotProduct";
import VideoPart from "@/components/pages/HomeIndex/VideoPart";
import Recommend from "@/components/pages/HomeIndex/Recommend";
import MomWiki from "@/components/pages/HomeIndex/MomWiki";
import Witness from "@/components/pages/HomeIndex/Witness";
import IgArea from "@/components/pages/HomeIndex/IgArea";
import MemberInfo from "@/components/pages/HomeIndex/MemberInfo";

export default {
  components: {
    MainKv,
    ThemeAct,
    MainEvent,
    HotProduct,
    VideoPart,
    Recommend,
    MomWiki,
    Witness,
    IgArea,
    MemberInfo
  }
};
</script>
