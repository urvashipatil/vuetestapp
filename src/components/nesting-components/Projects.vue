
<template>  
  <div id="projects">
     Count is {{count}}
    <ul>
      <!-- <li v-for="project in projects" :key="project.name" v-on:click="project.show=!project.show"> -->
      <li v-for="project in projects" :key="project.name" v-on:click="click(project)">
        <h2>{{project.name}}</h2>
        <h3 v-show="project.show">{{project.technology}}</h3>
      </li>
    </ul>
    <button @click="deleteProject">Delete</button>
  </div>
</template>
<script>
export default({
  // props:["projects"],
  props:{
    projects:{
      type:Array,
      // required: true,
      default:function(){
        return [];
      }    
    },
    count:{
      type:Number,
      default:0
    }
  },
  methods:{
    click:function(project){
      project.show=!project.show;
      console.log(this.projects);
    },
    deleteProject:function(){
      this.projects.pop();
    }
  }
  //  data:function(){
  //     return {
  //           projects:[
  //             {name:"E-Commerce",technology:"React", show:false},
  //             {name:"Blog",technology:"Angular", show:false},
  //             {name:"Todo",technology:"Vue", show:false},
  //             {name:"Import-Export",technology:"Backbone", show:false},
  //             {name:"Leave Application",technology:"JQuery", show:false},
  //             {name:"Propeak",technology:"React", show:false}
  //             ]
  //       }
  //   }
})
</script>
<style scoped>
  #projects{
    width:100%;
    max-width: 1200px ;
    margin:40px auto;
    padding: 0 20px;
    box-sizing: border=box
  }

  ul{
    display: flex;
    flex-wrap:wrap;
    list-style-type:none;
    padding:0;
  }
  li{
    flex-grow:1;
    flex-basis: 300px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
  }
</style>