<template>
  <div>
    <div class="top-float">
      <div class="top-area" :class="{longer:babyDownLoad}">
        <section class="download-area" v-show="babyDownLoad">
          <a class="close-d" @click="closeDArea">
            <img src="~@/assets/img/icons/icn_close-1.svg" alt />
          </a>
          <p>寶寶大餵營APP</p>
          <a href class="d-btn">下載</a>
        </section>

        <nav class>
          <div class="nav-inside">
            <a class="web-menu" @click.prevent="openMenu">
              <img src="~@/assets/img/icons/icn_menu_b.svg" alt />
            </a>
            <div class="theLogo mx-auto">
              <img src="~@/assets/img/icons/LOGO2@2x.png" alt class="logo" />
            </div>
            <div class="features ml-auto d-flex justify-content-end">
              <button class="open-sch" @click="openMobileSeach">
                <img src="~@/assets/img/icons/icn_search.svg" alt />
              </button>

              <button
                class="open-sch-forweb transition"
                :class="{ noshow: theOpacity }"
                v-if="!isOpen"
                @click="showTheInput"
              >
                <img src="~@/assets/img/icons/icn_search.svg" alt />
              </button>

              <div class="search-for-web transition" :class="{ show: schBarShow }" v-if="isOpen">
                <div class="search-bar-area d-flex align-items-center justify-content-between">
                  <input type="text" placeholder="search" class="search-bar" />
                  <button class="search-btn" @click="hideInput">
                    <img src="~@/assets/img/icons/icn_search.svg" alt />
                  </button>
                </div>
              </div>

              <button class="like">
                <img src="~@/assets/img/icons/icn_like_g.svg" alt />
              </button>

              <button class="man" @mouseover="openDrop" :class="{ active: isMemActive }">
                <div class="icon-icn_man_h"></div>
              </button>

              <button class="cart">
                <img src="~@/assets/img/icons/icn_shop_g.svg" alt />
                <span class="num">1</span>
              </button>
            </div>

            <!-- 會員下拉式選單 -->
            <div class="float-member-area" v-show="isMemActive">
              <ul>
                <li>
                  <a class="float-member-item title">
                    <p>會員專區</p>
                  </a>
                </li>
                <li>
                  <router-link :to="{ name: '我的帳戶' }" class="float-member-item">
                    <img src="~@/assets/img/icons/icn_bonus.svg" alt />
                    <p>紅利點數</p>
                    <p class="red-text four-text">30點</p>
                  </router-link>
                </li>
                <li>
                  <a class="float-member-item">
                    <img src="~@/assets/img/icons/icn_stored.svg" alt />
                    <p>儲值金</p>
                    <p class="red-text">5000元</p>
                  </a>
                </li>
                <li>
                  <a class="float-member-item">
                    <img src="~@/assets/img/icons/icn_ticket.svg" alt />
                    <p>抵用券</p>
                    <p class="red-text">10張</p>
                  </a>
                </li>
                <li>
                  <a class="float-member-item">
                    <img src="~@/assets/img/icons/icn_money.svg" alt />
                    <p>購物金</p>
                    <p class="red-text">1000元</p>
                  </a>
                </li>
                <li>
                  <a class="float-member-item">
                    <img src="~@/assets/img/icons/icn_list2.svg" alt />
                    <p>購買訂單</p>
                  </a>
                </li>
                <li>
                  <a class="float-member-item">
                    <img src="~@/assets/img/icons/icn_man 拷貝.svg" alt />
                    <p>帳號設定</p>
                  </a>
                </li>
                <li>
                  <a class="float-member-item">
                    <img src="~@/assets/img/icons/icn_longout.svg" alt />
                    <p>登出</p>
                  </a>
                </li>
              </ul>
            </div>
            <!-- 會員下拉式選單 -->
          </div>
        </nav>

        <div
          class="search-area transition"
          v-show="mobileSearchAreaDisplay"
          :class="{ showit: mobileSearchAreaOpacity }"
        >
          <div class="search-bar-area d-flex align-items-center justify-content-between">
            <input type="text" placeholder="search" class="search-bar" />
            <button class="s-btn">
              <img src="~@/assets/img/icons/icn_search.svg" alt />
            </button>
          </div>
          <button class="cancel" @click="closeMobileSearch">取消</button>
        </div>
      </div>

      <div class="sort-menu">
        <carousel :items="4" :dots="false" :nav="false">
          <a class="text-center classify activity">孕哺時尚</a>
          <a class="text-center classify">迪士尼</a>
          <a class="text-center classify">機能用品</a>
          <a class="text-center classify">寶寶衣著</a>
          <a class="text-center classify">孕哺時尚</a>
          <a class="text-center classify">迪士尼</a>
          <a class="text-center classify">機能用品</a>
          <a class="text-center classify">寶寶衣著</a>
        </carousel>
      </div>

      <router-view name="sortmenuimg"></router-view>
    </div>

    <!-- fixed留白區域 -->
    <div class="makeup-block" :class="classList"></div>
    <!-- fixed留白區域 -->
  </div>
</template>

<script>
import $ from "jquery";
import carousel from "vue-owl-carousel";

export default {
  data() {
    return {
      theOpacity: false,
      isOpen: false,
      schBarShow: false,
      isMemActive: false,
      mobileSearchAreaDisplay: false,
      mobileSearchAreaOpacity: false,
      babyDownLoad: true,
      productIntroPage: false
    };
  },
  computed: {
    classList() {
      return {
        two_sort: this.productIntroPage,
        short: !this.babyDownLoad
      };
    }
  },
  components: {
    carousel
  },
  methods: {
    openMenu: function() {
      $(".big-menu").css({ display: "flex" });
      setTimeout(function() {
        $(".big-menu").addClass("menu-show");
      }, 500);
    },
    closeDArea: function() {
      let vm = this;
      vm.babyDownLoad = false;
    },

    showTheInput: function(e) {
      let vm = this;
      vm.theOpacity = !vm.theOpacity;
      setTimeout(function() {
        vm.isOpen = true;
        //search BAR出現的動畫
        setTimeout(function() {
          vm.schBarShow = !vm.schBarShow;
        }, 200);
      }, 200);
    },

    hideInput: function(e) {
      let vm = this;
      vm.schBarShow = !vm.schBarShow;
      //search BAR消失的動畫
      setTimeout(function() {
        vm.isOpen = false;
        //出現指標的動畫
        setTimeout(function() {
          vm.theOpacity = !vm.theOpacity;
        }, 200);
      }, 200);
    },

    sortChange: function() {
      if (this.$route.name == "商品介紹頁") {
        this.productIntroPage = true;
      } else {
        this.productIntroPage = false;
      }
    },

    openDrop: function() {
      let vm = this;
      vm.isMemActive = true;
    },

    //開啟手機版搜尋
    openMobileSeach() {
      let vm = this;
      vm.mobileSearchAreaDisplay = true;
      setTimeout(function() {
        vm.mobileSearchAreaOpacity = true;
      }, 500);
    },

    //關掉手機版搜尋
    closeMobileSearch() {
      let vm = this;
      vm.mobileSearchAreaOpacity = false;
      setTimeout(function() {
        vm.mobileSearchAreaDisplay = false;
      }, 500);
    }
  },

  updated() {
    this.sortChange();
  },

  mounted() {
    let vm = this;
    vm.sortChange();
    let body = document.body;

    body.addEventListener(
      "click",
      function() {
        vm.isMemActive = false;
      },
      false
    );
  }
};
</script>


