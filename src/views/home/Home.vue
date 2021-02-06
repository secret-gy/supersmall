<template>
    <div id="home">
        <NavBar class="home-div">
            <div slot="NavBar-left"></div>
            <div slot="NavBar-center">购物车</div>
            <div slot="NavBar-right"></div>
        </NavBar>          
    </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar'
export default {
    data(){
        return {}
    },
    components: {
        NavBar
    }
}
</script>

<style scoped>
    .home-div {
        color: white;
        background-color: pink;
    }
</style>