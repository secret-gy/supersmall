<template>
    <div id="detail">
        <NavBar class="navbar">
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
        <Scroll class="content">
            <DetailSwiper :topImg="topImg"></DetailSwiper>
            <DetailBaseInfo :goods="goods"></DetailBaseInfo>
            <DetailShopInfo :shop="shop"></DetailShopInfo>
            <DetailGoodsInfo :detailInfo="detailInfo"></DetailGoodsInfo>
            <DetailParamInfo :paramInfo="paramInfo"></DetailParamInfo>
            <DetailCommentInfo :commentInfo="commentInfo"></DetailCommentInfo>
        </Scroll>
    </div>
</template>

<script>
import Scroll from '../../components/common/scroll/Scroll'
import NavBar from '../../components/common/navbar/NavBar'
import DetailSwiper from './childComponents/DetailSwiper'
import { getTopImg, Goods, Shop, GoodsParam } from '../../network/detail' 
import DetailBaseInfo from './childComponents/DetailBaseInfo'
import DetailShopInfo from './childComponents/DetailShopInfo'
import DetailGoodsInfo from './childComponents/DetailGoodsInfo'
import DetailParamInfo from './childComponents/DetailParamInfo'
import DetailCommentInfo from './childComponents/DetailCommentInfo'
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
            commentInfo: {}
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
        DetailCommentInfo
    },
    created(){
        // console.log(this.$route);
        this.iid = this.$route.params.iid
        this.getTopImg(this.iid)
    },
    methods: {
        backclick(){
            this.$router.go(-1)
        },
        titleClick(index){
            this.curryindex = index
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