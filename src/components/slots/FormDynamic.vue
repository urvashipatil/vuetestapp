
<template>  
  <!-- <header>   
    <slot name="title" />
    <h2>This is dynamic form</h2>
    <slot name="text" />
  </header>    -->
  <form>
      <h1>Please fill out the form...</h1>
      <div id="form-header">
        <slot name="form-header"></slot>
      </div>
      <div id="form-fields">
        <slot name="form-fields"></slot>
      </div>
      <div id="form-controls">
        <slot name="form-controls"></slot>
      </div>
      <div id="form-liks">
        <ul>
          <li><a href="#">Link1</a></li>
          <li><a href="#">Link2 </a></li>
          <li> <a href="#">Link3</a></li>        
        </ul>
      </div>
  </form>
</template>
<script>
  export default({  
  })
</script>
<style scoped> 
 form > div{
   padding: 20px;
   background: #aeaeae;
   margin: 20px 0;
 }

 #form-header{
   background:#ddd;
   border:1px solid #bbb;
 }


</style>