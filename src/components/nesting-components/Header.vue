
<template>  
  <header>
    <h1 @click="updatetitle">{{ title }}</h1>
    <h2 @click="updateCount">Count from store- {{ $store.state.count }}</h2>
    <h3>New Count {{$store.getters.newCount}}</h3>
  </header>   
</template>
<script>
export default({
  props:{
    title:{
      tpe:String
    }
  },
  // data() {
  //   return {title:"Vue Projects"}
  // },
  methods:{
    updatetitle:function(){
      // this.title="New Title changed"
      // this.$emit("changeTitle","New Title Changes2","asasas");
      console.log("$root",this.$root);
      this.$root.$emit("changeTitle","New Title Changes2","asasas");
    },
    updateCount: function(){
      this.$store.commit("change",10);
    }
  }
})
</script>
<style scoped> 
 header{
   background: lightgreen;
   padding: 10px;
 }
 h1{
   color: #222;
   text-align: center;
 }
</style>