<template>
    <div class="fix">
        <div class="relative flex-middle">
            <img src="" class="absolute"/>

        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            
        }
    },
    methods:{
       close(){
        this.$emit("close")
       } 
    }
}
</script>
<style lang="scss" scoped>
@import url("./index.scss");
</style>