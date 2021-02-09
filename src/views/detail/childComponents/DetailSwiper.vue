<template>
    <Swiper>
        <SwiperItem v-for="(item, index) in topImg" :key="index" class="detailswipe">
            <img :src="item" alt="">
        </SwiperItem>
    </Swiper>
</template>

<script>
import {Swiper, SwiperItem} from '../../../components/common/swiper/index'
export default {
    data(){
        return {

        }
    },
    props: {
        topImg: {
            type: Array,
            default: []
        },
        
    },
    components: {
        Swiper,
        SwiperItem
    }
    
}
</script>

<style scoped>
    .detailswipe {
        height: 420px;
    }
</style>