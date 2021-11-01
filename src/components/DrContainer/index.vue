<template>
    <div class="fix">
        <div class="relative flex-middle">
            <img src="" class="absolute"/>
            <img src="" class="absolute close" @click="close"/>
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
<style lang="<%= css %>" scoped>
@import url("./index.<%= css %>");
</style>