<template>
    <div class="NavBar">
        <div class="NavBar-left"><slot name="NavBar-left"></slot></div>
        <div class="NavBar-center"><slot name="NavBar-center"></slot></div>
        <div class="NavBar-right"><slot name="NavBar-right"></slot></div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.NavBar {
    display: flex;
    line-height: 44px;
    height: 44px;
    text-align: center;
}

.NavBar-left {
    width: 50px;
}

 .NavBar-right{
    width: 50px;
}

.NavBar-center {
    flex: 1;
}
</style>