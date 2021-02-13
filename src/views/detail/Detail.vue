<template>
    <div id="detail">
        <NavBar class="navbar" ref="nav">
            <div slot="NavBar-left" class="back" @click="backclick">
                <img src="@/assets/img/common/back.svg" alt="">
            </div>
            <div slot="NavBar-center" class="title">
                <div v-for="(item, index) in names" 
                :key="index" 
                class="title-item" 
                :class="{actived : curryindex === index}"  
                @click="titleClick(index)" >
                {{item.name}}
            </div>
            </div>
        </NavBar>
        <Scroll class="content" ref="betterscroll" @scroll='scroll' :probeType='3'>
            <DetailSwiper :topImg="topImg"></DetailSwiper>
            <DetailBaseInfo :goods="goods"></DetailBaseInfo>
            <DetailShopInfo :shop="shop"></DetailShopInfo>
            <DetailGoodsInfo :detailInfo="detailInfo" @loadimg='loadimg'></DetailGoodsInfo>
            <DetailParamInfo ref="Param" :paramInfo="paramInfo"></DetailParamInfo>
            <DetailCommentInfo ref="Comment" :commentInfo="commentInfo"></DetailCommentInfo>
            <GoodsList ref="GoodsList" :goods='recommends' ></GoodsList>
        </Scroll>
        <DetailBottomBar @addToCart='addToCart'></DetailBottomBar>
    </div>
</template>

<script>
import Scroll from '../../components/common/scroll/Scroll'
import NavBar from '../../components/common/navbar/NavBar'
import DetailSwiper from './childComponents/DetailSwiper'
import { getTopImg, Goods, Shop, GoodsParam, getRecomment } from '../../network/detail' 
import DetailBaseInfo from './childComponents/DetailBaseInfo'
import DetailShopInfo from './childComponents/DetailShopInfo'
import DetailGoodsInfo from './childComponents/DetailGoodsInfo'
import DetailParamInfo from './childComponents/DetailParamInfo'
import DetailCommentInfo from './childComponents/DetailCommentInfo'
import GoodsList from '../../components/context/goods/GoodsList'
import {Debounce} from '../../common/utils'
import DetailBottomBar from './childComponents/DetailBottomBar'
export default {
    data(){
        return {
            iid: null,
            names: [
                {
                    name: '商品'
                },
                {
                    name: '参数'
                },
                {
                    name: '评论'
                },
                {
                    name: '推荐'
                }
            ],
            curryindex: 0,
            topImg: [],
            goods: {},
            shop: {},
            detailInfo: {},
            paramInfo: {},
            commentInfo: {},
            recommends: [],
            moveToY: [0],
            fangdou: null,
            curindex:0,
            isshow: 'cnm'
        }
    },
    components: {
        Scroll,
        NavBar,
        DetailSwiper,
        DetailBaseInfo,
        DetailShopInfo,
        DetailGoodsInfo,
        DetailParamInfo,
        DetailCommentInfo,
        GoodsList,
        DetailBottomBar
    },
    created(){
        // console.log(this.$route);
        this.iid = this.$route.params.iid
        this.getTopImg(this.iid)
        getRecomment().then(res => [
            // console.log(res)
            this.recommends = res.data.data.list
        ])

        this.fangdou = Debounce(() => {
            this.moveToY = [0]
            this.moveToY.push(this.$refs.Param.$el.offsetTop)
            this.moveToY.push(this.$refs.Comment.$el.offsetTop)
            this.moveToY.push(this.$refs.GoodsList.$el.offsetTop)
            console.log(this.moveToY);
        },100)
    },
    methods: {
        addToCart(){
            const obj = {}
            obj.iid = this.iid
            obj.imgURL = this.topImg[0]
            obj.title = this.goods.title
            obj.desc = this.goods.desc;
            obj.newPrice = this.goods.nowPrice;
            this.$store.dispatch('addCart', obj).then(res => {
                // console.log(this.$toast);
                this.$toast.show(res)
                // console.log(this.$toast.methods.show(res));
                // console.log(res);
            })
        },
        scroll(pos){
            for(let i=0; i<this.moveToY.length; i++){
                if(i<this.moveToY.length-1){
                    if(this.moveToY[i+1]>Math.abs(pos.y) && this.moveToY[i]<Math.abs(pos.y)){
                        this.curryindex = i
                    }
                }
                if(i>=this.moveToY.length-1){
                    if(this.moveToY[i]<Math.abs(pos.y)){
                        this.curryindex = i
                    }
                }
            }            
        },
        loadimg(){
            this.fangdou()
            
        },
        backclick(){
            this.$router.go(-1)
        },
        titleClick(index){
            this.curryindex = index
            this.$refs.betterscroll.scrollTo(0, -this.moveToY[index], 1000)
            
        },
        getTopImg(iid){
            getTopImg(iid).then(res => {
                this.topImg.push(...res.data.result.itemInfo.topImages)
                // this.topImg = res.data.result.itemInfo.topImages

                const data = res.data.result

                this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

                this.shop = new Shop(data.shopInfo);

                this.detailInfo = data.detailInfo

                this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule);

                if (data.rate.list) {
                    this.commentInfo = data.rate.list[0];
                }

                // this.$nextTick(() => {
                // })  
            })
        }
    }
}
</script>

<style scoped>
#detail {
    position: relative;
    z-index: 10;
    background-color: #fff;
    height: 100vh;
  }

.content {
    height: calc(100% - 44px);
}

.navbar {
    position: relative;
    z-index: 10;
    background-color: #fff;
}

.back {
    padding-top: 5px;
}

.title {
    display: flex;
}

.title-item {
    flex: 1;
    font-size: 14px;
}  

.actived {
    color: #ff5777;
}
</style>