<template>
  <div>
    <router-link to="/blog/showall">Show Blogs</router-link> | 
    <router-link to="/blog/add">Add Blog</router-link> |
    <router-view />
    <!-- <add-blog /> -->
     <!-- <show-blogs  /> -->
  </div>
</template>

<script>
// import AddBlog from "./AddBlog.vue";
// import ShowBlogs from "./ShowBlogs.vue";

export default {
  // components:{
  //   // 'add-blog':AddBlog,
  //   'show-blogs':ShowBlogs
  // }
  
}
</script>

<style scoped>
  body{
    margin:0;
    font-family: 'Nunito SemiBold';
  }
</style>
