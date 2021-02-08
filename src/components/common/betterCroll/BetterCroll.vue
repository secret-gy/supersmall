<template>
    <div class="swiper1" ref="swiper">
        <div class="content">
            <slot></slot>
        </div>
    </div>    
</template>

<script>
import BS from 'better-scroll'

export default {
    data(){
        return {
            BS1: null
        }
    },
    mounted(){
        this.BS1 = new BS(this.$refs.swiper,{
            movable: true,
            zoom: true,
            pullUpLoad: true,
            scrollbar: true,
            probeType: 2
        })
        // this.BS1.on('scroll', (position) => {
        //     console.log(position)
        // })
        this.BS1.on('pullingUp',(o) => {
            console.log('上拉完成');
        })  
    }
}
</script>

<style scoped>

</style>