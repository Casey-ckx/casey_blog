<template>
  <div>{{title}}11233{{name}}</div>
</template>

<script>
export default {
    props:{
        title
    },
    data(){
        return {
            name:1111
        }
    },
    mounted(){
        console.log(this.title)
    }
}
</script>

<style>
div{
    /* border: 1px solid black; */
}
</style>