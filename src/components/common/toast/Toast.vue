<template>
    <div v-show="isshow" class="toast">
        <div>{{msg}}</div>
    </div>    
</template>

<script>
export default {
    data(){
        return {
            message: '未知操作',
            isshow: false
        }
    },
    methods: {
        show(message='未知操作', time=1500){
            console.log(this);
            console.log(this.isshow);
        }
    }
}
</script>

<style scoped>
.toast{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: (-50%, -50%);
    background: rgba(0, 0, 0, 0.7);
    z-index: 999;
}
</style>