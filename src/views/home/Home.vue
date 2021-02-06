<template>
    <div id="home">
        <NavBar class="home-div">
            <div slot="NavBar-center">购物街</div>
        </NavBar>         
        <Swiper>
            <SwiperItem v-for="(item, index) in banners" :key="index">
                <a :href="item.link">
                    <img :src="item.image" alt="">
                </a>
            </SwiperItem>
        </Swiper>
    </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar'
import { getHomemultidata } from '../../network/home' 
import {Swiper, SwiperItem} from '../../components/common/swiper/index'
export default {
    data(){
        return {
            banners : [],
            recommends: []
        }
    },
    components: {
        NavBar,
        Swiper,
        SwiperItem
    },
    created(){
        getHomemultidata().then(res => {
            this.banners = res.data.data.banner.list
            this.recommends = res.data.data.recommend.list
        })
    }
}
</script>

<style scoped>
    .home-div {
        color: white;
        background-color: pink;
    }
</style>