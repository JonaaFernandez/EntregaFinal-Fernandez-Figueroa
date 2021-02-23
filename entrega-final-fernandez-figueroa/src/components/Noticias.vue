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
                    @datosEditar="inyectar()"
                    @almacenarData="almacenarData"
                    ></FilaComponent>
                    
            </table>
        </div>
        <div class="font-weight-bold mb-2 mt-2  d-flex justify-content-center">
            <label class="mt-1">Buscate tu <span class="font-weight-bolder text-danger">NOMBRE</span>  en la lista: </label>
            <input class="mb-2 ml-2" type="text" v-model="busqueda" placeholder="Ingrese año">
        </div>
        <button id="btnForm" class="mb-2 bg-dark text-warning" @click="abrirFormEditar()">Agregar Persona</button>
       
         <div id="formulario" @abrirElForm="abrirFormulario()"  class="bg-dark w-25 text-warning font-weight-bold mx-auto d-none">
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

            <button id="botonInsertar" class="bg-dark font-weight-bold text-warning border-1 mt-1"  @click="agregarFila()">Insertar</button>
          
            <button id="botonConfirmar" class="bg-dark font-weight-bold text-warning border-1 mt-1" @click="cargarDatos()">Confirmar</button> 
            </div>
        </div> 
   
</div>


</template>

<script>
    import FilaComponent from './FilaComponent'

    import axios from "axios"

    export default {

        props: {
            formAbierto: {
                type: Boolean,
                default: false,
            },
            esEditar: {
                type: Boolean,
                default: false,
            }
        },
        components: {
            FilaComponent,

        },
        computed: {
            personaFiltrada: function() {
                return this.personas.filter((persona) => {
                    return persona.Nombre.toLowerCase().match(this.busqueda);
                })
            }
        },

        data() {
            return {
                personas: [],
                nuevoUsuario: '',
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
                        this.personas.push(response.data);

                    })
                    .catch(function(error) {
                        console.log(error);
                    });
                this.resetInputs();
            },
            cargarDatos() {
                axios.put("https://603047d0a1e9d20017af1a3b.mockapi.io/ListaTemas/" + this.idVm, {
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
            abrirFormEditar() {
                let formulario = document.getElementById("formulario");
                let botonConfirmar = document.getElementById("botonConfirmar");
                formulario.classList.remove("d-none");
                botonConfirmar.classList.add("d-none");
            },
            resetInputs() {
                this.nombreVm = '';
                this.apellidoVm = '';
                this.emailVm = '';
                this.temaVm = '';
                this.anioVm = '';
            },
            almacenarData(evento) {
                console.log(evento);
                this.idVm = evento.idVm
                this.nombreVm = evento.nombreVm
                this.apellidoVm = evento.apellidoVm
                this.emailVm = evento.emailVm
                this.temaVm = evento.temaVm
                this.anioVm = evento.anioVm

            },
            guardarFilaBorrada(e) {
                console.log(e);
                this.getDatos();

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
                let botonInsertar = document.getElementById("botonInsertar");
                botonInsertar.classList.remove("d-none");
            }
        },
        /* FIN METHODS */


    }

    /* fin export default! */
</script>
<style>

</style>