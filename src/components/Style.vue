<template>
<div>
    <!-- static style -->
    <!-- <p style="text-decoration: underline">Hi all test style</p> -->
    <!-- Style using object -->
    <!-- <p v-bind:style="{'text-decoration': decoration}">Hi all test style</p> -->
    <!-- <h1>Style Title</h1>
    <p :style="styling">Hi all test style using Computed</p> -->

    <!-- <p class="underline">Using CSS Class</p> -->
    <!-- <p :class="{'underline': isUnderLine}">Using CSS Class</p> -->
    <!-- <p :class="underlineData">Using CSS Class data property</p> -->
    <!-- <p :class="underlineClass">Using CSS Class data property</p> -->

     <!-- <p :class="[underlineClass,paraColor]">Using CSS Class data property</p> -->
     <p :class="[underlineClass,paraColor]">Using CSS Class data property</p>
  </div>
</template>
<script>
export default({
  data() {
    // return{
    //   decoration: "underline"
    // }
    // return {
    //   isUnderLine:true,
    //   underlineData: {'underline': this.isUnderLine}
    // }
    // return {
    //   underlineClass:"underline",
    //   paraColor:"para-color"
    // }

    return {
      isUnderline:true,
      isBold:true
    }
  },
  computed:{
    styling: function(){
      return {
        textDecoration: "underline"
      }
    }
  }
})
</script>

<style scoped>
 h1{
   color: green;
 }
</style>

<style>
 .underline{
   text-decoration: underline;
 }
 .para-color{
   color:yellowgreen
 }
 .para-bold{
   font-weight: bold;
 }
</style>
