<template>
    <div id="home">
        <NavBar class="home-div">
            <div slot="NavBar-center">购物街</div>
        </NavBar>         
        <BetterCroll class="content" ref="battercroll" @scroll='scrollclick'>
            <HomeSwiper :banners='banners'></HomeSwiper>
            <RecommendView :recommends='recommends'></RecommendView>
            <Feature></Feature>
            <TabControl :titles='["流行", "新款", "精品"]' class="tab-control" @choose='choose'></TabControl>
            <GoodsList :goods='goods[cType].list'></GoodsList>
        </BetterCroll>
        <BactTop @click.native='backtop' v-show="isshow"></BactTop>
    </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar'
import { getHomemultidata, getHomeGoodsData } from '../../network/home' 
import HomeSwiper from './childComponents/HomeSwiper'
import RecommendView from './childComponents/RecommendView'
import Feature from './childComponents/Feature'
import TabControl from '../../components/context/tabControl/TabControl'
import GoodsList from '../../components/context/goods/GoodsList'
import BetterCroll from '../../components/common/betterCroll/BetterCroll'
import BactTop from '../../components/context/backTop/BackTop'
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
            },
            cType: 'pop',
            isshow: false
        }
    },
    components: {
        NavBar,
        HomeSwiper,
        RecommendView,
        Feature,
        TabControl,
        GoodsList,
        BetterCroll,
        BactTop
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
                this.goods[type].list.push(...res.data.data.list)
            })
            this.goods[type].page = page + 1
        },
        choose(index){
            switch (index){
                case 0:
                    this.cType = 'pop'
                    break
                case 1:
                    this.cType = 'new'
                    break
                case 2:
                    this.cType = 'sell'
                    break
            }
        },
        backtop(){
            // console.log(this.$refs.battercroll.BS1);
            this.$refs.battercroll.BS1.scrollTo(0,0,1000)
        },
        scrollclick(position){
            this.isshow = Math.abs(position.y) > 700? true: false
            // console.log(position.y);
        }
    }
}
</script>

<style scoped>
    #home {
        /* padding-top: 44px; */
        height: 100vh;
    }

    .home-div {
        color: white;
        background-color: pink;
        position: fixed;
        right: 0;
        left: 0;
        top: 0;
        z-index: 8;
    }

    .tab-control {
        position: sticky;
        top: 44px;
        z-index: 9;
    }

    .content {
        position: absolute;
        top: 44px;
        bottom: 49px;
        left: 0;
        right: 0;
    }
</style>