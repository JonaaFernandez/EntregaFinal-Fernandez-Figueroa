<template>
    <div>
        <div class="container mt-4">
<h3 class="text-danger font-weight-bold">LOS ID ESTAN AGREGADOS DE FORMA MANUAL</h3>
<h4 class="text-danger font-weight-bold">Datos traidos de componente FilaComponent con directivas v-for</h4>
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
                
                    ></FilaComponent>
                    
            </table>
        </div>
        <button id="btnForm" class="mb-2 bg-dark text-warning" @click="abrirForm()">Agregar Persona</button>
       
         <div id="formulario" v-on:abrirElForm="abrilo()" class="bg-dark w-25 text-warning font-weight-bold mx-auto d-none">
            <div class="p-4">
            <p>Ingrese Nombre</p>
            <input class="m-1" type="text" id="inpNombre" placeholder="Ingresse Nombre">
            <p>Ingrese Apellido</p>
            <input class="m-1" type="text" id="inpApellido" placeholder="Ingresse Apellido">
            <p>Ingrese Email</p>
            <input class="m-1" type="text" id="inpEmail" placeholder="Ingresse Email">
            <p>Ingrese Tema</p>
            <input class="m-1" type="text" id="inpTema" placeholder="Ingresse Tema">
            <p>Ingrese Año</p>
            <input class="m-1" type="text" id="inpAnio" placeholder="Ingresse Año">
            <button id="botonInsertar" class="bg-dark font-weight-bold text-warning border-1 mt-1" @click="agregarFila()">Insertar</button>
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
            agregarFila() {
                let nombreInput = document.getElementById("inpNombre");
                let apellidoInput = document.getElementById("inpApellido");
                let emailInput = document.getElementById("inpEmail");
                let temaInput = document.getElementById("inpTema");
                let anioInput = document.getElementById("inpAnio");

                axios.post('https://603047d0a1e9d20017af1a3b.mockapi.io/ListaTemas/', {
                        Nombre: nombreInput.value,
                        Apellido: apellidoInput.value,
                        Email: emailInput.value,
                        Tema: temaInput.value,
                        Anio: anioInput.value,
                    })
                    .then((response) => {
                        const data = response.data
                        this.nuevoUsuario = data;
                        this.personas.push(response.data);

                    })
                    .catch(function(error) {
                        console.log(error);
                    });

            }
        },
        abrilo() {
            let formulario = document.getElementById("formulario");
            formulario.classList.remove("d-none");
            /*       let botonInsertar = document.getElementById("botonInsertar");
                  botonInsertar.innerText = "guardar "; */
        },

    };
</script>
<style>

</style>