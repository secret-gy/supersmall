<template>
    <div>
        <NavBar>
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
        <DetailSwiper :topImg="topImg"></DetailSwiper>
    </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar'
import DetailSwiper from './childComponents/DetailSwiper'
import { getTopImg } from '../../network/detail' 
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
            topImg: []
        }
    },
    components: {
        NavBar,
        DetailSwiper
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
            })
        }
    }
}
</script>

<style scoped>
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