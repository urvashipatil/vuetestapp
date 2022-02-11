<template>
  <div id="add-blog">
    <h2>Add a new Blog</h2>
    <form v-if="!submitted">
      <label>Blog Title:</label>
      <input type="text" v-model.lazy="blog.title" required />
      <label>Blog Content:</label>
      <textarea v-model.lazy="blog.content" required/>
      <button @click.prevent="saveBlog">Save</button>
    </form>
    <div v-if="submitted">
      <h3>Thanks for adding</h3>
    </div>
    <div id="preview">
      <h3>Preview Blog</h3>
      <p>Blog Title: {{blog.title}}</p>
      <p>Blog Content:</p>
      <p>{{blog.content}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      blog:{
        title:"",
        content:"",        
      } ,
      submitted:false     
    }
  },
  methods:{
    saveBlog:async function(){
      let response = await this.$http.post("https://jsonplaceholder.typicode.com/posts",{
        title:this.title,
        body:this.content,
        userId:1
      });
      console.log("response",response);
      this.submitted=true;
    }
  }
}
</script>
<style scoped>
#add-blog{
  box-sizing: border-box;
  margin: 20px auto;
  max-width: 500px;
}
label{
  display: block;
  margin: 20px 0 10px;
}
input[type=text], textarea{
  display:block;
  width: 100%;  
}
#preview{
  padding: 10px 20px;
  border: 1px dotted #ccc;
 margin: 30px 0;
}
h3{
  margin-top:10px;
}

</style>

