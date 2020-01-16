import Vue from 'vue'
import VueRouter from 'vue-router'
//官方的元件

import Home from '@/views/Home';
import SortMenuImg from '@/components/SortMenuImg';
import BottomMenu from '@/components/BottomMenu';
import CheckoutBottomMenu from '@/components/CheckoutBottomMenu';
import SendOrderBottomMenu from '@/components/SendOrderBottomMenu';
import ProductDetails from '@/views/ProductDetails'
import DetailsPage from '@/views/DetailsPage'
import HomeIndex from '@/views/HomeIndex'
import ProductList from '@/views/ProductList'
import ProductIntro from '@/views/ProductIntro'
import CartList from '@/views/CartList'
import DeliveryWay from '@/views/DeliveryWay'
import CartFinish from '@/views/CartFinish'
import SpecialOffer from '@/views/SpecialOffer'
import EventDescription from '@/views/EventDescription'
import Member from '@/views/Member'
import MyAccount from '@/views/MyAccount'


//自訂的分頁文件

Vue.use(VueRouter)


export default new VueRouter({
    // mode:'history',    //開發時先不要打開
    linkActiveClass: 'active',
    routes: [{
            //name:'首頁', //元件的呈現名稱
            path: '/', //對應的虛擬路徑
            component: Home, //對應的元件
            children: [{
                    name: '首頁',
                    path: '',
                    components: {
                        default: HomeIndex,
                        bottommenu: BottomMenu,
                    },
                },
                {
                    name: '商品列表',
                    path: 'product_list',
                    components: {
                        default: ProductList,
                        bottommenu: BottomMenu,
                    }
                },
                {
                    name: '商品介紹頁',
                    path: 'product_intro',
                    components: {
                        default: ProductIntro,
                        sortmenuimg: SortMenuImg,
                        bottommenu: BottomMenu,
                    },
                },
                {
                    name: '購物車清單',
                    path: 'cart_list',
                    components: {
                        default: CartList,
                        checkoutbottommenu: CheckoutBottomMenu,
                    }
                },
                {
                    name: '配送方式',
                    path: 'cart_deliverway',
                    components: {
                        default: DeliveryWay,
                        sendorderbottommenu: SendOrderBottomMenu
                    }
                },
                {
                    name: '完成訂購',
                    path: 'cart_finish',
                    components: {
                        default: CartFinish,
                        bottommenu: BottomMenu
                    }

                }, 
                {
                    name: '特惠活動頁',
                    path: 'special_offer',
                    components: {
                        default: SpecialOffer,
                        bottommenu: BottomMenu
                    }
                },
                {
                    name: '活動說明頁',
                    path: 'event_description',
                    components: {
                        default: EventDescription,
                        bottommenu: BottomMenu
                    }
                },
                {
                    path: '/member', //對應的虛擬路徑
                    // component: Member, //對應的元件
                    components: {
                        default: Member,
                    },
                    children:[
                        {
                            name: '我的帳戶',
                            path: 'my_account',
                            components: {
                                default: MyAccount,
                                
                            }
                        }
                    ]
                }
            ]
        },
        {
            //name:'商品詳細頁',
            path: '/product_details', //對應的虛擬路徑
            component: ProductDetails, //對應的元件
            children: [{
                name: '商品詳細頁',
                path: '',
                component: DetailsPage,
            }]
        },
        {
            path: '*', 
            redirect: {
                name: '首頁'
            }
        }

    ],

    scrollBehavior () {
        return {
          x: 0,
          y: 0
        }
      }
});