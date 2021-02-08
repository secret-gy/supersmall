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
            click: true,
            movable: true,
            zoom: true,
            pullUpLoad: true,
            scrollbar: true,
            probeType: 3
        })
        this.BS1.on('scroll', (position) => {
            this.$emit('scroll', position)
        })
        this.BS1.on('pullingUp',(o) => {
            console.log('上拉完成');
        })  
    },
    methods: {
        scrollto(x,y,time=5000){
            this.BS1.scrollto(x,y,time)
        }
    }
}
</script>

<style scoped>

</style>