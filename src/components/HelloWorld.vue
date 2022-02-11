<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <projects />
    <styleComponent/>
  </div>
</template>

<script>
import MyProjects from "./Projects.vue";
import Style from "./Style.vue";
export default {
  name: 'HelloWorld',
  components:{
    projects:MyProjects,
    styleComponent: Style
  },  
 data: function(){
    return {
        msg:"Hello World"
      }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
