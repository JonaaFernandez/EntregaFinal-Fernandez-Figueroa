<template>
    <div>
        <div class="container mt-4">
<h3 class="text-danger font-weight-bold">LOS ID ESTAN AGREGADOS DE FORMA MANUAL</h3>
            <table id="tablita" class="container table table-striped table-dark">
                <thead>
                    <tr class="bg-light text-dark">
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Email</th>
                        <th>Tema</th>
                        <th>Año</th>
                        <th>Acciones</th>
                    </tr>
                    <tr class="" v-for="persona in datos" :key="persona.id">
                        <td>{{persona.id}}</td>
                        <td>{{persona.Nombre}}</td>
                        <td>{{persona.Apellido}}</td>
                        <td>{{persona.Email}}</td>
                        <td>{{persona.Tema}}</td>
                        <td>{{persona.Anio}}</td>
                        <td class="d-flex justify-content-around table-dark"> <button>Editar</button> <button>Eliminar</button> </td> 
                    </tr>

                </thead>
            </table>
        </div>
    </div>
</template>

<script>
import axios from "axios"
export default {
  data() {
      return {
          datos:null
      }
  },
  mounted() {
      this.getDatos();

  },
  methods: {
      getDatos(){
          axios
               .get('https://602c695a30ba720017222ef9.mockapi.io/Datos')
               .then(response =>{
                   this.datos = response.data

               })
               .catch(e=>console.log(e))
               
      }
  },
};
</script>
<style>

</style>