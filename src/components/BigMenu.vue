<template>
  <div
    class="big-menu transition"
    v-show="isBigMenuShow"
    :class="{ menu_show: BigMenuOpacity }"
    @click="closeMenu(false)"
  >
    <div class="menu-frame" @click.stop>
      <div class="logo-search">
        <div class="menu-logo">
          <img src="~@/assets/img/icons/logo.png" alt />
        </div>

        <div
          class="search-bar-area d-flex align-items-center justify-content-between"
        >
          <input type="text" placeholder="search" class="search-bar" />
          <button class="s-btn">
            <img src="~@/assets/img/icons/icn_search.svg" alt />
          </button>
        </div>
      </div>

      <div class="web-close" @click="closeMenu(false)">
        <img src="~@/assets/img/icons/icn_close_b.svg" alt />
      </div>

      <div class="all-list">
        <div class="for-mothers">
          <div class="list-title">孕哺服飾</div>
          <ul class="mother-list">
            <li>
              <router-link :to="{ name: '商品詳細頁' }">孕哺內睡衣</router-link>
              <ul class="little-list">
                <li>
                  <a href>月子內衣</a>
                </li>
                <li>
                  <a href>無縫內衣</a>
                </li>
                <li>
                  <a href>軟鋼圈內衣</a>
                </li>
                <li>
                  <a href>BRA TOPS</a>
                </li>
                <li>
                  <a href>居家孕哺衣</a>
                </li>
                <li>
                  <a href>居家孕哺衣</a>
                </li>
                <li>
                  <a href>內褲</a>
                </li>
              </ul>
            </li>
            <li>
              <router-link :to="{ name: '商品詳細頁' }"
                >產後/產前必須</router-link
              >
            </li>
            <li>
              <router-link :to="{ name: '商品詳細頁' }">寶貝衣服</router-link>
            </li>
            <li>
              <router-link :to="{ name: '商品詳細頁' }"
                >雙邊電動吸乳</router-link
              >
            </li>
            <li>
              <router-link :to="{ name: '商品詳細頁' }">背巾/背帶</router-link>
            </li>
            <li>
              <router-link :to="{ name: '商品詳細頁' }">抗菌床寢</router-link>
            </li>
            <!-- 該項目不一定會有 -->
            <li class="sales">
              <a href class="sales-text">SALE 特惠活動</a>
              <a href class="sales-img">
                <img src="~@/assets/img/photos/20191126-MENU@2x.png" alt />
              </a>
            </li>
          </ul>

          <ul class="expand-menu">
            <li
              class="expand-item"
              @click="openLittleItem"
              :class="{ open_menu: mamaway_club }"
            >
              <a class="expand-menu-title mamaway_club">
                MAMAWAY CLUB
                <i class="fas fa-chevron-right transition"></i>
              </a>
            </li>
            <li
              class="expand-item"
              @click="openLittleItem"
              :class="{ open_menu: mom_mom_wiki }"
            >
              <a class="expand-menu-title mom_mom_wiki">
                媽媽百科
                <i class="fas fa-chevron-right transition"></i>
              </a>
            </li>
            <li
              class="expand-item for-mobile"
              @click="openLittleItem"
              :class="{ open_menu: shop_guide }"
            >
              <a class="expand-menu-title shop_guide">
                購物指南
                <i class="fas fa-chevron-right transition"></i>
              </a>
              <ul class="little-item transition">
                <li>
                  <a href>購物常見問題</a>
                </li>
                <li>
                  <a href>退換貨問題</a>
                </li>
                <li>
                  <a href>購物金、抵用券問題</a>
                </li>
                <li>
                  <a href>儲值金問題</a>
                </li>
                <li>
                  <a href>發票問題</a>
                </li>
                <li>
                  <a href>海外訂購</a>
                </li>
                <li>
                  <a href>會員紅利問題</a>
                </li>
                <li>
                  <a href>尺寸建議</a>
                </li>
              </ul>
            </li>
            <li
              class="expand-item for-mobile"
              @click="openLittleItem"
              :class="{ open_menu: about_us }"
            >
              <a class="expand-menu-title about_us">
                關於我們
                <i class="fas fa-chevron-right transition"></i>
              </a>
              <ul class="little-item transition">
                <li>
                  <a href>最新消息</a>
                </li>
                <li>
                  <a href>門市據點</a>
                </li>
                <li>
                  <a href>品牌故事</a>
                </li>
                <li>
                  <a href>人力招募</a>
                </li>
                <li>
                  <a href>隱私權聲明</a>
                </li>
              </ul>
            </li>
            <li
              class="expand-item for-mobile"
              @click="openLittleItem"
              :class="{ open_menu: follow_us }"
            >
              <a class="expand-menu-title follow_us">
                FOLLOW US
                <i class="fas fa-chevron-right transition"></i>
              </a>
              <ul class="little-item transition follow">
                <li>
                  <a href>
                    <img src="~@/assets/img/icons/btn_fb_b.svg" alt />
                  </a>
                </li>
                <li>
                  <a href>
                    <img src="~@/assets/img/icons/btn_line_b.svg" alt />
                  </a>
                </li>
                <li>
                  <a href>
                    <img src="~@/assets/img/icons/btn_ig_b.svg" alt />
                  </a>
                </li>
                <li>
                  <a href>
                    <img src="~@/assets/img/icons/btn_pin_b.svg" alt />
                  </a>
                </li>
                <li>
                  <a href>
                    <img src="~@/assets/img/icons/btn_b_b.svg" alt />
                  </a>
                </li>
                <li>
                  <a href>
                    <img src="~@/assets/img/icons/btn_youtube_b.svg" alt />
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="cross">
      <button>
        <img src="~@/assets/img/icons/icn_close-1.svg" alt />
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import carousel from "vue-owl-carousel";

export default {
  data() {
    return {
      follow_us: false,
      about_us: false,
      shop_guide: false,
      mom_mom_wiki: false,
      mamaway_club: false
    };
  },
  components: {
    carousel
  },
  computed: {
    isBigMenuShow() {
      return this.$store.state.isBigMenuShow;
    },
    BigMenuOpacity() {
      return this.$store.state.BigMenuOpacity;
    }
  },
  methods: {
    // closeMenu() {
    //   const vm = this;
    //   vm.$store.dispatch("BigMenuOpacity", false);
    //   setTimeout(function() {
    //     vm.$store.dispatch("BigMenuShow", false);
    //   }, 500);
    // },
    openLittleItem: function(e) {
      let tname = e.target.classList[1];
      let vm = this;
      vm[tname] = !vm[tname];
    },

    ...mapActions(["closeMenu"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
