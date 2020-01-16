<template>
  <div class="member-menu-ph">
    <div class="member-drop-down" :class="ExpendClass">
      <a class="the-drop-down" @click="expandAction">
        <div class="icon-title">
          <div class="icon-icn_man side-icon transition"></div>
          <p class="transition">我的帳戶</p>
        </div>

        <div class="fas fa-chevron-down transition"></div>
      </a>

      <div class="expand-content transition">
        <ul>
          <li>
            <a>
              <div class="icon-icn_notice side-icon"></div>
              <p>消息中心</p></a
            >
          </li>
          <li>
            <a>
              <img src="~@/assets/img/icons/icn_list2.svg" alt />
              <p>訂單/退換貨查詢</p></a
            >
          </li>
          <li>
            <a>
              <div class="icon-icn_like_b-1 side-icon"></div>
              <p>收藏清單</p></a
            >
          </li>
          <li>
            <a>
              <div class="icon-icn_qa side-icon"></div>
              <p>客服問與答</p></a
            >
          </li>
          <li>
            <a>
              <div class="icon-icn_class side-icon"></div>
              <p>媽媽教室報名</p></a
            >
          </li>
          <li>
            <a>
              <div class="icon-icn_set side-icon"></div>
              <p>個人資料管理</p></a
            >
          </li>
        </ul>
      </div>
    </div>

    <h2 class="member-name">
      王大大
      <span class="member-level">一般會員</span>
    </h2>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  data() {
    return {
      isExpand: false
    };
  },
  computed: {
    ExpendClass() {
      return {
        expand: this.isExpand
      };
    }
  },
  methods: {
    expandAction() {
      this.isExpand = !this.isExpand;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
