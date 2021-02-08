<template>
    <div class="wrapper">
        <ul class="content">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>10</li>
            <li>11</li>
            <li>12</li>
            <li>13</li>
            <li>14</li>
            <li>15</li>
            <li>16</li>
            <li>17</li>
            <li>18</li>
            <li>19</li>
            <li>20</li>
        </ul>
    </div>
</template>

<script>
import BS from 'better-scroll'
export default {
    data(){
        return {
            BS: null
        }
    },
    mounted(){
        this.BS = new BS('.wrapper', {
            movable: true,
            zoom: true,
            pullUpLoad: true,
            wheel: true,
            scrollbar: true,
            probeType: 2
        })
        this.BS.on('scroll', (position) => {
            console.log(position)
        })
    }
}
</script>

<style scoped>
    .wrapper {
        height: 100px;
        background:pink;
        overflow: hidden;
    }
</style>