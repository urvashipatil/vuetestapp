
<template>
  <div id="app"> 
    <router-link to="/nestedapp">Nested App</router-link> | 
    <router-link to="/hello">Hello World</router-link> | 
      <router-link to="/checkbox">Checkbox</router-link> | 
       <router-link to="/blog">Blog</router-link> | 
    <!-- <router-link to="/checkbox/100">Checkbox</router-link> |  -->

    <router-view />    
  </div>
</template>

<script>

export default {
  name: 'App',    
}
</script>

<style scoped>
.router-link-active{
  background: red;
  color: white;
}
</style>


