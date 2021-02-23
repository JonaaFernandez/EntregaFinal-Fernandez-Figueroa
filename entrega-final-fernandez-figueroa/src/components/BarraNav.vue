<template>
    <nav class="navbar navbar-expand-lg py-3 navbar-dark bg-dark shadow-sm navbarcolor">
        <div class="container ">
            <a href="#" class="navbar-brand">
                <!-- Logo Image -->
                <img src="../../images/logocb3.png" width="45" alt="" class="d-inline-block align-middle mr-2">
                <!-- Logo Text -->

              

            </a>

            <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler"><span class="navbar-toggler-icon"></span></button>

            <div id="navbarSupportedContent" class="collapse navbar-collapse">
                <ul class="navbar-nav ml-auto">
                  
                    <li class="nav-item"> <router-link  to="/" class="nav-link"> Home </router-link> <span class="sr-only">(current)</span></li>
                    <li class="nav-item"> <router-link class="nav-link" to="noticias"> Noticias</router-link></li>
                    <li class="nav-item"> <router-link class="nav-link" to="historia"> Historia</router-link></li>
                    <li class="nav-item"> <router-link class="nav-link" to="tickets"> Tickets</router-link></li>
               </ul>
            </div>
        </div>
    </nav>
</template>
<script>
    export default {

    }
</script>
<style>
    .navbarcolor {
        background-image: url(../../images/fondologo.jpg);
    }
</style>