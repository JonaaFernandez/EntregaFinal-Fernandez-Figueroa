<template>
        <tr>
            <td> {{persona.id}}</td>
            <td>{{persona.Nombre  |minuscula |capitalize}}</td>
            <td>{{persona.Apellido  |minuscula | capitalize}}</td>
            <td>{{persona.Email | snippet  |minuscula | capitalize}}</td>
            <td>{{persona.Tema |minuscula | capitalize }}</td>
            <td>{{persona.Anio}}</td>
            
            <td class="d-flex justify-content-around table-dark"> 
                <button class="bg-dark text-warning"  @click="obtenerDatosEditar(persona.id),cambiarBotones()">Editar</button> 
                <button class="bg-dark text-warning" @click="eliminarFila(persona.id)">Eliminar</button> 
            </td> 
        </tr>    
</template>
<script>
    import axios from "axios"
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
                /* idVm: '',
                nombreVm: '',
                apellidoVm: '',
                emailVm: '',
                temaVm: '',
                anioVm: '', */
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
                        this.nombreVm = this.persona.Nombre
                            /*      console.log(response.data); */
                            /* console.log("nombrevM");
                            console.log(this.nombreVm); */
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
            cambiarBotones() {
                let botonInsertar = document.getElementById("botonInsertar");
                let botonConfirmar = document.getElementById("botonConfirmar");
                botonInsertar.classList.add("d-none");
                botonConfirmar.classList.remove("d-none");
            },

        }

    }
</script>

<style>

</style>