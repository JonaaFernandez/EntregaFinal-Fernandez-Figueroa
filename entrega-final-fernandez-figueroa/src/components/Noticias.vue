<template>
    <div>
        <div class="container mt-4">

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
                </thead>

                    <FilaComponent
                    v-for="persona in personas" 
                    :key="persona.id"
                    :persona="persona"
                    @deleteClicked="deleteClicked"
                    @datosEditar="inyectar()"
                    @editClicked="editClicked"

                    ></FilaComponent>
                    
            </table>
        </div>

        <button id="btnForm" class="mb-2 bg-dark text-warning" @click="abrirForm()">Agregar Persona</button>
       
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
            <button id="botonInsertar" class="bg-dark font-weight-bold text-warning border-1 mt-1"   @click="agregarFila()">Insertar</button>
             <button id="" class="bg-dark font-weight-bold text-warning border-1 mt-1" @click="cargarDatos()"  >Confirmar</button> 
        </div>
    </div>
   
</div>



</template>

<script>
    import FilaComponent from './FilaComponent'
    import axios from "axios"


    export default {

        components: {
            FilaComponent
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
            abrirForm() {
                let formulario = document.getElementById("formulario");
                formulario.classList.remove("d-none");
            },
            abrirFormulario() {
                let formulario = document.getElementById("formulario");
                formulario.classList.remove("d-none");

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

            },



            deleteClicked(e) {
                console.log(e);
                this.getDatos();

            },
            editClicked(evento) {
                console.log(evento);
                this.idVm = evento.idVm
                this.nombreVm = evento.nombreVm
                this.apellidoVm = evento.apellidoVm
                this.emailVm = evento.emailVm
                this.temaVm = evento.temaVm
                this.anioVm = evento.anioVm
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
            },

        },


    }

    /* FIN METHODS */
    /* fin export default! */
</script>
<style>

</style>