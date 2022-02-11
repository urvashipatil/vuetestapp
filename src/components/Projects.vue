<template>
<div>
    <h1>Projects</h1>
    <ul>
      <li v-for="project in projects" v-bind:key="project.name">
        {{project.name}}
      </li>
    </ul>
  </div>
</template>

<script>

  export default{
    data:function(){
      return {
        projects:[{name:"React"},{name:"Angular"},{name:"Vue"}]
        }
    }
  }
</script>

<style scoped>
  h1{
    color: red;
  }
</style>