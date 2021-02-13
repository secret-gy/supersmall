<template>
    <div v-if="isshow" class="toast">
        <div>{{message}}</div>
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
        show(message, time=1500){
            this.message = message
            this.isshow = true
            setTimeout(() => {
                this.message = '',
                this.isshow = false
            },time)
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