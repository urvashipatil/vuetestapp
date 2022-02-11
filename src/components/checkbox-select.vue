<template>
  <div v-theme:column="'narrow'">
    <div v-random>React: <input type="checkbox"  value="React" v-model="technology" /></div>
    <div  v-random>Angular: <input type="checkbox"  value="Angular"  v-model="technology"/></div>
    <div  v-random>Vue: <input type="checkbox" value="Vue"  v-model="technology"/></div>
    <div>
      <select v-model="project">
        <option value="ecommerce">E-Commerce</option>
        <option value="Todo">Todo</option>
        <option value="Blog">Blog</option>
      </select>
    </div>
    <div>Preview {{id}}</div>
    <div> {{ technology  }}</div>
    <div> {{ project | mycase | snippet }}</div>

    <router-view />
  </div>
</template>
<script>

export default ({
data(){
  return{
    technology:[],
    project:"",
    id: this.$route.params.id
  }
},
filters:{
    mycase:function (data) {
    return (data || "").toUpperCase();
    },
    snippet:function(value){
      if(value.length >2){
        return value.slice(0,2) + "..."
      }
      return value;
    }
  },
  directives:{
    theme:{
        bind(el, binding) {
          if (binding.value == "wide") {
            el.style.background = "lightgray";
            el.style.width = "1200px";
          } else if (binding.value == "narrow") {
            el.style.background = "cyan";
            el.style.width = "600px";
          }

          if (binding.arg == "column") {
            el.style.padding = "20px";
            el.style.background = "yellow";
          }
        },
      }
  }
})
</script>
