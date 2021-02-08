<template>
    <div id="home">
        <NavBar class="home-div">
            <div slot="NavBar-center">购物街</div>
        </NavBar>         
        <HomeSwiper :banners='banners'></HomeSwiper>
        <RecommendView :recommends='recommends'></RecommendView>
        <Feature></Feature>
        <TabControl :titles='["流行", "新款", "精品"]' class="tab-control"></TabControl>
    </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar'
import { getHomemultidata, getHomeGoodsData } from '../../network/home' 
import HomeSwiper from './childComponents/HomeSwiper'
import RecommendView from './childComponents/RecommendView'
import Feature from './childComponents/Feature'
import TabControl from '../../components/context/tabControl/TabControl'
export default {
    data(){
        return {
            banners : [],
            recommends: [],
            goods: {
                pop: {
                    page: 1,
                    list: []
                },
                new: {
                    page: 1,
                    list: []
                },
                sell: {
                    page: 1,
                    list: []
                }
            }
        }
    },
    components: {
        NavBar,
        HomeSwiper,
        RecommendView,
        Feature,
        TabControl
    },
    created(){
        this.getHomemultidata(),
        this.getHomeGoodsData('pop')
        this.getHomeGoodsData('new'),
        this.getHomeGoodsData('sell')
    },
    methods: {
        getHomemultidata(){
            getHomemultidata().then(res => {
            this.banners = res.data.data.banner.list
            this.recommends = res.data.data.recommend.list
            })
        },
        getHomeGoodsData(type){
            const page = this.goods[type].page
            getHomeGoodsData(type, page).then(res => {
                console.log(res);
                this.goods[type].list.push(...res.data.data.list)
            })
            this.goods[type].page = page + 1
        }
    }
}
</script>

<style scoped>
    #home {
        padding-top: 44px;
    }

    .home-div {
        color: white;
        background-color: pink;
        position: fixed;
        right: 0;
        left: 0;
        top: 0;
        z-index: 9;
    }

    .tab-control {
        position: sticky;
        top: 44px;
    }
</style>