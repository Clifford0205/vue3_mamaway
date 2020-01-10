<template>
  <div class="shop-process">
    <ul class="shop-process-bar">
      <li class="the-item list-item">
        <a>購物車清單</a>
      </li>
      <li class="the-item deliver-way-item">
        <a>配送方式</a>
      </li>
      <li class="the-item finish-oreder-item">
        <a>完成訂購</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>


<style  lang="scss" scoped>
@import "@/assets/helpers/_myset.scss";

.shop-process-bar .the-item:first-child a {
  padding-left: 12px;
  border-radius: 5px 0 0 5px;
  background-color: #ffffff !important;
  color: #525b67 !important;
  &:before {
    background-color: #ffffff !important;
  }
}

.shop-process-bar .the-item:last-child a {
  background-color: #a7acb2 !important;
  color: #ffffff !important;
  &:before {
    background-color: #a7acb2 !important;
  }
}
</style>
