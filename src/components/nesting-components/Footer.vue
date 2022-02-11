
<template>  
<footer>
    <p>{{ copyright }}  {{title}}</p>
</footer>
  
</template>
<script>
export default({
  //  props:{
  //   title:{
  //     tpe:String
  //   }
  // },
  data() {
    return{
      copyright:"Copyright 2022",
      title:""
    }   
  },
  beforeCreate(){
    console.log("beforeCreate")
  },
  created(){
     console.log("created")
    this.$root.$on("changeTitle",(data)=>{
      console.log("root data",data);
      this.title=data;
      // this.$router.push("/hello")
    })

  },
  beforeMount(){
    console.log("beforeMount")
  },
  mounted(){
    console.log("mounted")
    
    console.log(document.getElementsByTagName("p")[0].innerHTML);
  },
  beforeUpdate(){
    console.log("beforeUpdate")
  },
  updated(){
    console.log("updated")
  },
   beforeDestroy(){
    console.log("beforeDestroy")
  },
  destroyed(){
    console.log("destroyed")
  },
})
</script>
<style scoped>
  footer{
    background: #222;
    padding: 6px;
  }
  p{
    color:lightgreen;
    text-align: center;
  }
</style>