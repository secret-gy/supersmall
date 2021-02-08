<template>
    <div class="goods">
        <GoodsListItem v-for="(item, index) in goods" :key="index" :goodsitem='item'></GoodsListItem>
    </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'
export default {
    data(){
        return {

        }
    },
    components: {
        GoodsListItem
    },
    props: {
        goods: {
            type: Array,
            default(){
                return []
            }
        }
    },
    methods: {
        abc(){
            console.log(this.goods);
        }
    }
}
</script>

<style scoped>
.goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
</style>