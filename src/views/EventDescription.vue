<template>
  <div class="event-description">
    <Breadcrumb />
    <Content />
  </div>
</template>

<script>
import Breadcrumb from "@/components/Breadcrumb";
import Content from "@/components/pages/EventDescription/Content";

export default {
  components: {
    Breadcrumb,
    Content
  }
};
</script>

<style  lang="scss" >
</style>
