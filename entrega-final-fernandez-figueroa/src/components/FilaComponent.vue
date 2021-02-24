<template>
    
        <tr>
            <td> {{persona.id}}</td>
            <td>{{persona.Nombre  |minuscula |capitalize}}</td>
            <td>{{persona.Apellido  |minuscula | capitalize}}</td>
            <td>{{persona.Email | snippet  |minuscula | capitalize}}</td>
            <td>{{persona.Tema |minuscula | capitalize }}</td>
            <td>{{persona.Anio}}</td>
            
            <td class="d-flex justify-content-around table-dark"> 
                <button class="bg-dark text-warning"   @click="obtenerDatosEditar(persona.id)">Editar</button> 
                  <button class="bg-dark text-warning" @click="eliminarFila(persona.id)">Eliminar</button>  
           
            <!-- Button trigger modal -->
   <!--   <button type="button" class="btn btn-primary"    @click="obtenerDatosEditar(persona.id)" data-toggle="modal" data-target="#exampleModalEditar">
    EditarModal
  </button>
  <div class="modal fade" id="exampleModalEditar" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabelEditar" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalEditar">EDITAR</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body text-warning bg-dark" >
            <input class="d-none" type="text" >
            <p class="">Ingrese Nombre</p>
            <input class="" type="text" >
        <p>{{persona.Nombre}}</p>
            <p class="mt-2">Ingrese Apellido</p>
            <input class="" type="text"  >
            <p class="mt-2">Ingrese Email</p>
            <input class="" type="text"   >
            <p class="mt-2">Ingrese Tema</p>
            <input class="" type="text"  >
            <p class="mt-2">Ingrese Año</p>
            <input class="" type="text" >
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>  -->
</td> 
</tr>
       

        
</template>
<script>
    import axios from "axios";
    export default {

        props: {
            persona: {
                type: Object,
                required: true,
                personas: [],
            },



        },
        data() {
            return {
                idVmEdit: '',
                nombreVmEdit: '',
                apellidoVmEdit: '',
                emailVmEdit: '',
                temaVmEdit: '',
                anioVmEdit: '',
                /* abrirModal: false */
            }
        },
        methods: {
            abrirForm() {
                let formulario = document.getElementById("formulario");
                formulario.classList.remove("d-none");
            },
            eliminarFila(id) {
                axios.delete("https://603047d0a1e9d20017af1a3b.mockapi.io/ListaTemas/" + id)
                    .then(response => {

                        console.log("BORRE DE LA API LA PERSONA: " + response.data.Nombre)
                        this.personas = response.data.id;
                        this.$emit('guardarFilaBorrada', {
                            delete: true
                        });
                    })
            },
            obtenerDatosEditar(id) {
                this.abrirForm();
                axios.get("https://603047d0a1e9d20017af1a3b.mockapi.io/ListaTemas/" + id, )
                    .then(response => {

                        this.personas = response.data;
                        /*  this.nombreVm = this.persona.Nombre */
                        console.log(this.nombreVm);
                        this.$emit("almacenarData", {
                            idVm: this.persona.id,
                            nombreVm: this.persona.Nombre,
                            apellidoVm: this.persona.Apellido,
                            emailVm: this.persona.Email,
                            temaVm: this.persona.Tema,
                            anioVm: this.persona.Anio,
                        });
                    })
                    .catch(function(error) {
                        console.log(error);
                    });
            },
            /* cambiarBotones() {
                let botonInsertar = document.getElementById("botonInsertar");
                let botonConfirmar = document.getElementById("botonConfirmar");
                botonInsertar.classList.add("d-none");
                botonConfirmar.classList.remove("d-none");
            }, */

        }

    }
</script>

<style>

</style>