<template>
    <div>
        <NavBar class="nav">
        <div slot="NavBar-center">购物车({{length}})</div>
        </NavBar>
        <CartDetaul></CartDetaul>
        <BottomBar></BottomBar>
    </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar'
import CartDetaul from './childComponents/CartDetail'
import {mapGetters} from 'vuex'
import BottomBar from './childComponents/BottomBar'

export default {
    data(){
        return {}
    },
    components: {
        NavBar,
        CartDetaul,
        BottomBar
    },
    computed: {
        ...mapGetters({
            length: 'getLength'
        })
    }
}
</script>

<style scoped>
    .nav {
        background-color:#ff5777;
        color: #fff;
        font-size: 10px;
    }
</style>