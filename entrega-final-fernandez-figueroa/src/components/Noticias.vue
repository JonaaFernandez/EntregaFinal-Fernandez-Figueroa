<template>
    <div>
        <div class="container">
            <p class="row ml-1 w-25 font-weight-bold mt-2">Dale estilo a la tabla ! ! !</p>
            <input  class="w-25 row ml-1 mb-1 container" placeholder="Escribe tu color en ingles..."  v-model="color" type="text">
        </div>
    
        <div  class="container mt-4">
      <h1 class="display-4"> Lista de temas</h1>
            <table id="tablita" v-directivaPersonalizada="color"   class="container table table-striped table-dark">
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
                </thead>

                    <FilaComponent
                    v-for="persona in personaFiltrada" 
                    :key="persona.id"
                    :persona="persona"
                    @guardarFilaBorrada="guardarFilaBorrada"
                    @almacenarData="almacenarData"
                    ></FilaComponent>
                    
            </table>
        </div>
       
        <div class="font-weight-bold mb-2 mt-2  d-flex justify-content-center">
            <label class="mt-1">Buscate tu <span class="font-weight-bolder text-danger">NOMBRE</span> (en minuscula) en la lista: </label>
            <input class="mb-2 ml-2" type="text" v-model="busqueda" placeholder="Ingrese nombre">
        </div>
     

       
       <!-- MODAL AGREGAR -->
                 
<button type="button" class="btn btn-primary bg-dark text-warning" data-toggle="modal" data-target="#modalAgregar">Agregar Nueva Persona</button>
  
  <!-- Modal Agregar -->
  <div class="modal fade" id="modalAgregar" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header bg-dark text-warning">
          <h5 class="modal-title " id="exampleModalLabel">Complete los campos: </h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body bg-dark text-warning">
            <input class="d-none" type="text"  v-model="idVm">
            <p class="">Ingrese Nombre</p>
            <input class="" type="text"   v-model="nombreVm">
            <p class="mt-2">Ingrese Apellido</p>
            <input class="" type="text"   v-model="apellidoVm">
            <p class="mt-2">Ingrese Email</p>
            <input class="" type="text"   v-model="emailVm">
            <p class="mt-2">Ingrese Tema</p>
            <input class="" type="text"   v-model="temaVm">
            <p class="mt-2">Ingrese Año</p>
            <input class="" type="text"   v-model="anioVm">
        </div>
        <div class="modal-footer bg-dark text-warning">
            <button type="button" class="btn btn-success"  data-dismiss="modal" @click="agregarFila()">Insertar</button>
          <button type="button" class="btn btn-danger" data-dismiss="modal">Cerrar</button>
        </div>
      </div>
    </div>
  </div>

<!-- Formulario para editar -->
       <div id="formulario" @abrirElForm="abrirFormulario()"  class="bg-dark w-25 mt-3 text-warning font-weight-bold mx-auto d-none">
            <div class="p-4">
                <input class="m-1 d-none" type="text" placeholder="Ingrese Nombre" v-model="idVm">
            <p>Ingrese Nombre</p>
            <input class="m-1" type="text" id="inpNombre" placeholder="Ingrese Nombre" v-model="nombreVm">
            <p>Ingrese Apellido</p>
            <input class="m-1" type="text" id="inpApellido" placeholder="Ingrese Apellido"  v-model="apellidoVm">
            <p>Ingrese Email</p>
            <input class="m-1" type="text" id="inpEmail" placeholder="Ingrese Email"  v-model="emailVm">
            <p>Ingrese Tema</p>
            <input class="m-1" type="text" id="inpTema" placeholder="Ingrese Tema"  v-model="temaVm">
            <p>Ingrese Año</p>
            <input class="m-1" type="text" id="inpAnio" placeholder="Ingrese Año"  v-model="anioVm">

            <!--  <button id="botonInsertar" class="bg-dark font-weight-bold text-warning border-1 mt-1"  @click="agregarFila()">Insertar</button> -->
           
            <button id="botonConfirmar" class="bg-dark font-weight-bold text-warning border-1 mt-1" @click="cargarDatos()">Confirmar</button> 
        </div>
        </div>  
        
   
</div>


</template>

<script>
    import FilaComponent from './FilaComponent';


    import axios from "axios";

    export default {

        components: {
            FilaComponent,
        },
        computed: { /* busqueda por letra */
            personaFiltrada: function() {
                return this.personas.filter((persona) => {
                    return persona.Nombre.toLowerCase().match(this.busqueda);
                })
            },

        },
        data() {
            return {
                personas: [],
                /* vinculamos los inputs del modal agregar */
                idVm: '',
                nombreVm: '',
                apellidoVm: '',
                emailVm: '',
                temaVm: '',
                anioVm: '',



                color: '',
                busqueda: '',

            }
        },

        mounted() {
            this.getDatos();

        },
        methods: {
            getDatos() {
                axios.get('https://603047d0a1e9d20017af1a3b.mockapi.io/ListaTemas')
                    .then((response) => {
                        const data = response.data
                        this.personas = data;
                    })
                    .catch(e => console.log(e))
            },
            agregarFila() {

                axios.post('https://603047d0a1e9d20017af1a3b.mockapi.io/ListaTemas/', {
                        Nombre: this.nombreVm,
                        Apellido: this.apellidoVm,
                        Email: this.emailVm,
                        Tema: this.temaVm,
                        Anio: this.anioVm,

                    })
                    .then((response) => {

                        const data = response.data
                        this.nuevoUsuario = data;

                        this.resetInputs();
                        this.getDatos();

                    })
                    .catch(function(error) {
                        console.log(error);
                    });

            },
            almacenarData(evento) {
                console.log("Data almacenada", evento);
                /* almacenamos los datos que traemos y los montamos en los inputs del form */
                this.idVm = evento.idVmEditar
                this.nombreVm = evento.nombreVmEditar
                this.apellidoVm = evento.apellidoVmEditar
                this.emailVm = evento.emailVmEditar
                this.temaVm = evento.temaVmEditar
                this.anioVm = evento.anioVmEditar
            },
            cargarDatos() {
                axios.put("https://603047d0a1e9d20017af1a3b.mockapi.io/ListaTemas/" + this.idVm, {
                        /* asignamos los nuevos datos */
                        Nombre: this.nombreVm,
                        Apellido: this.apellidoVm,
                        Email: this.emailVm,
                        Tema: this.temaVm,
                        Anio: this.anioVm,
                    })
                    .then(response => {
                        console.log(response.data);
                        this.getDatos();
                    })
                    .catch(e => console.log(e));

                this.resetInputs();
                this.cerrarFormulario()
            },



            guardarFilaBorrada(e) {
                /* le avisamos al padre que ya borramos la fila */
                console.log("Borramos la peronsa con la ID: ", e.id);
                this.getDatos();
            },

            resetInputs() {
                this.nombreVm = '';
                this.apellidoVm = '';
                this.emailVm = '';
                this.temaVm = '';
                this.anioVm = '';
            },

            abrirFormulario() {
                let formulario = document.getElementById("formulario");
                formulario.classList.remove("d-none");
                let botonInsertar = document.getElementById("botonInsertar");
                botonInsertar.classList.remove("d-none");
            },
            cerrarFormulario() {
                let formulario = document.getElementById("formulario");
                formulario.classList.add("d-none");
            },

        },
        /* FIN METHODS */


    }

    /* fin export default! */
</script>
<style>

</style>