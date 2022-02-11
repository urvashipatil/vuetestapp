<template>
  <div id="show-blogs">
    <h1>All Blogs</h1>
    <input type="text" v-model="search" placeholder="Search Blogs" />
      <div v-for="blog in filterBlogs" :key="blog.id" class="single-blog">
        <h2>{{blog.title | upper-case}}</h2>
        <article>{{blog.body | snippet}}</article>
      </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        blogs:[],
        search:""
      }
    },
    created: async function(){
      let response = await this.$http.get("https://jsonplaceholder.typicode.com/posts");
      this.blogs = response.data.slice(0,10);
    }  ,
    filters:{
      'upper-case': function (data) {
           return (data || "").toUpperCase();
      },
      snippet: function (value) {
           if(value.length >100){
             return value.slice(0,100) + "..."
            }
          return value;
      }      
    },
    computed:{
      filterBlogs:function(){
       return this.blogs.filter(blog=>blog.title.match(this.search))
      }
    }  
  }
</script>
<style scoped>
#show-blogs{
  max-width:800px;
  margin: 0 auto;
}
.single-blog{
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}
input{
  width: 100%;
  height: 25px;
}
</style>