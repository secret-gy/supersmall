<template>
    <div class="goods" >
        <GoodsListItem v-for="(item, index) in goods" :key="index" :goodsitem='item' @click="click(item)"></GoodsListItem>
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
        click(item){
            console.log(1);
            console.log(item);
            // this.$router.push('/detail' + item)
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