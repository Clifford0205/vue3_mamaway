import Vue from 'vue'
import VueRouter from 'vue-router'
//官方的元件

import Home from '@/views/Home';
import SortMenu from '@/components/SortMenu';
import SortMenuImg from '@/components/SortMenuImg';
import CheckoutBottomMenu from '@/components/CheckoutBottomMenu';
import ProductDetails from '@/views/ProductDetails'
import DetailsPage from '@/views/DetailsPage'
import DetailsPage2 from '@/views/DetailsPage2'
import AddInCartMobile from '@/components/AddInCartMobile'
import HomeIndex from '@/views/HomeIndex'
import ProductList from '@/views/ProductList'
import ProductIntro from '@/views/ProductIntro'
import CartList from '@/views/CartList'
import DeliveryWay from '@/views/DeliveryWay'


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
                        sortmenu: SortMenu,
                    },
                },
                {
                    name: '商品列表',
                    path: 'product_list',
                    component: ProductList,
                },
                {
                    name: '商品介紹頁',
                    path: 'product_intro',
                    components: {
                        default: ProductIntro,
                        sortmenuimg: SortMenuImg,
                    },
                },
                {
                    name: '商品詳細頁2',
                    path: '/product_details2',
                    components: {
                        default: DetailsPage2,
                        addincartmobile: AddInCartMobile,
                    }

                },
                {
                    name: '購物車清單',
                    path: '/cart-list',
                    components: {
                        default: CartList,
                        checkoutbottommenu: CheckoutBottomMenu,
                    }
                }, 
                {
                    name: '配送方式',
                    path: '/cart_deliverway',
                    component: DeliveryWay
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
        }

    ]
});