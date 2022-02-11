
<template>
  <div id="app"> 
    <router-view />
    <CheckboxSelect />   
    <FormDynamic>
      <!-- <h2 slot="title">{{ title }}</h2>
      <p slot="text">This para is from dynamic form.</p> -->
      <div slot="form-controls">
        <button v-on:click="submitdata">Submit</button>
      </div>

      <div slot="form-header"><h3>Input the Data</h3></div>
      <div slot="form-fields">
        <div><label>Name</label><input type="text" v-model="name" required /></div>
        <div><label>Address</label><textarea  v-model="address" required/></div>
      </div>
    </FormDynamic>
    <component v-bind:is="componentname" />

    <button @click="componentname=`HelloWorld`" >Show Hello World</button>
     <button @click="componentname=`NestedApp`" >Show NestedApp</button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import NestedApp from './components/nesting-components/NestedApp.vue'
// import NestedApp from './components/nesting-components/NestedApp.vue'
import FormDynamic from './components/slots/FormDynamic.vue'
import CheckboxSelect from './components/checkbox-select.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    NestedApp,
    FormDynamic,
    CheckboxSelect
  },
  data(){
    return {
      title: "new title added",
      name:"",
      address:"",
      componentname:""
    }
  },
  methods:{
    submitdata:function(){
      console.log("data submitted",this);
    }
  }
}
</script>

<style scoped>
h2{
   color: red;
   text-align: center;
 }
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
