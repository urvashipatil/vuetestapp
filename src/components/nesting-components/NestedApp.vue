
<template> 
  <div>
    <app-header :title="title" v-on:changeTitle="(...args)=>updatetitle(args)" />    
    <app-projects :projects="projects" :count="20"/>
    <!-- <app-projects :projects="projects" :count="30"/> -->
    <app-footer :title="title"/>
  </div> 
 
</template>
<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import Projects from "./Projects.vue";

export default({
  components:{
    'app-header':Header,
    'app-footer':Footer,
    'app-projects':Projects
  },
  methods:{   
    updatetitle: function(value,next){
      console.log("value",value, next);
      this.title=value;   
    }
  },
  data:function(){
      return {
            projects:[
              {name:"E-Commerce",technology:"React", show:false},
              {name:"Blog",technology:"Angular", show:false},
              {name:"Todo",technology:"Vue", show:false},
              {name:"Import-Export",technology:"Backbone", show:false},
              {name:"Leave Application",technology:"JQuery", show:false},
              {name:"Propeak",technology:"React", show:false}
              ],
              title:"Vue Js"
        }
    }
})
</script>
<style scoped>
 
</style>