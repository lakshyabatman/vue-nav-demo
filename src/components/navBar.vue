<template>

  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <a class="navbar-brand" href="#">{{name}}</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <router-link to='/' class="nav-link">HOME</router-link>
      </li>
      <li class="nav-item">
  <router-link to='/about' class="nav-link">ABOUT</router-link>     
   </li>
      
      
    </ul>
  </div>
</nav>           
</template>


<script>
import '../.././node_modules/jquery/dist/jquery.min.js';
import '../.././node_modules/popper.js/dist/popper.min.js';
import '../.././node_modules/bootstrap/dist/js/bootstrap.min.js';

export default {
    name:"Navbar",
    props:[
      'name'
    ]
}
</script>

<style scoped>
@import url('../.././node_modules/bootstrap/dist/css/bootstrap.min.css');

</style>
