<template>
        <tr>
            <td> {{persona.id}}</td>
            <td>{{persona.Nombre}}</td>
            <td>{{persona.Apellido}}</td>
            <td>{{persona.Email}}</td>
            <td>{{persona.Tema}}</td>
            <td>{{persona.Anio}}</td>
            <td class="d-flex justify-content-around table-dark"> 
                <button class="bg-dark text-warning"  @click="obtenerDatosEditar(persona.id)">Editar</button> 
                 <button class="bg-dark text-warning" @click="eliminarFila(persona.id)">Eliminar</button> 
            <!--  <button class="bg-dark text-warning" @click="cargarDatos(persona.id)">CARGAR</button>   -->

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
                /*   nombreVm: '', */

            },

        },
        data() {
            return {
                idVm: '',
                nombreVm: '',
                apellidoVm: '',
                emailVm: '',
                temaVm: '',
                anioVm: '',

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
                        this.$emit('deleteClicked', {
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
                        this.$emit("editClicked", {
                            idVm: this.persona.id,
                            nombreVm: this.persona.Nombre,
                            apellidoVm: this.persona.Apellido,
                            emailVm: this.persona.Email,
                            temaVm: this.persona.Tema,
                            anioVm: this.persona.Anio,
                        });
                    })
                    .catch(e => console.log(e));
            },






        }
    }
</script>

<style>

</style>