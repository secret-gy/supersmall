<template>
    <div class="tabControl">
        <div v-for="(item, index) in titles" :key="index" class="tabControl-item" @click="chooes(index)" :class="{actice: index == isActivated}">
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            isActivated: 0
        }
    },
    props: {
        titles: {
            type: Array,
            default(){
                return []
            }
        }
    },
    methods: {
        chooes(index){
            this.isActivated = index
        }
    }
}
</script>

<style scoped>
.tabControl {
    display: flex;
    text-align: center;
    line-height: 40px;
    height: 40px;
    font-size: 14px;
    background-color: #fff;
}

.tabControl-item {
    flex: 1;
}

.tabControl-item span {
    padding: 5px;  
}

.actice {
    color: #ff5777;
}

.actice span {
    border-bottom: 3px solid #ff5777;
}
</style>