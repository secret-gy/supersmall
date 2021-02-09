<template>
        <Swiper>
            <SwiperItem v-for="(item, index) in banners" :key="index">
                <a :href="item.link">
                    <img :src="item.image" alt="" @load='swipeimgload'>
                </a>
            </SwiperItem>
        </Swiper>
</template>

<script>
import {Swiper, SwiperItem} from '../../../components/common/swiper/index'
export default {
    data(){
        return {
            isload: false
        }
    },
    props: {
        banners: {
            type: Array,
            default(){
                return []
            }
        }
    },
    components: {
        Swiper,
        SwiperItem
    },
    methods: {
        swipeimgload(){
            if(!this.isload){
                this.$emit('swipeimgload')
                this.isload = true
            }
        }
    }
}
</script>

<style scoped>

</style>