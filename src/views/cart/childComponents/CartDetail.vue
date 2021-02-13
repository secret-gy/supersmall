<template>
    <div class="list">
        <Scroll class="listItem" >
            <CartDetailItem v-for="(item, index) in getList" :key="index" :itemInfo='item'></CartDetailItem>
        </Scroll>
    </div>
</template>

<script>
import Scroll from '../../../components/common/scroll/Scroll'
import CartDetailItem from './CartDetailItem'
import {mapGetters} from 'vuex'
export default {
    data(){ 
        return {

        }
    },
    components: {
        Scroll,
        CartDetailItem
    },
    computed: {
        ...mapGetters({
            getList: 'getList'
        })
    }
}
</script>

<style scoped>
.list {
    /* height: calc(100% -44px); */
    /* height: 100vh; */
    position: relative;
    height: 100vh;
}

.listItem {
    height: calc(100% - 90px);
    overflow: hidden;
}
</style>