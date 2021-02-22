<template>
        <tr>
            <td>{{persona.id}}</td>
            <td>{{persona.Nombre}}</td>
            <td>{{persona.Apellido}}</td>
            <td>{{persona.Email}}</td>
            <td>{{persona.Tema}}</td>
            <td>{{persona.Anio}}</td>
            <td class="d-flex justify-content-around table-dark"> 
                <button class="bg-dark text-warning" @click="obtenerDatosEditar(persona.id)">Editar</button> 
                 <button class="bg-dark text-warning" @click="eliminarFila(persona.id)">Eliminar</button> 
              <!--  <button class="bg-dark text-warning" @click="obtenerTodos">Eliminar</button>  -->

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
                nombreVm: '',
                apellidoVm: '',
                emailVm: '',
                temaVm: '',
                anioVm: '',
            },
        },
        methods: {

            /*   obtenerTodos() {
                  axios.get('https://603047d0a1e9d20017af1a3b.mockapi.io/ListaTemas')
                      .then(response => {
                          this.personas = response.data
                          console.log(response.data);

                      })
                      .catch(e => console.log(e))
              }, */
            abrirForm() {
                let formulario = document.getElementById("formulario");
                formulario.classList.remove("d-none");
            },
            eliminarFila(id) {
                axios.delete("https://603047d0a1e9d20017af1a3b.mockapi.io/ListaTemas/" + id)
                    .then(response => {
                        /* const data = response.data */
                        console.log("BORRE DE LA API LA PERSONA: " + response.data.Nombre)
                        this.personas = response.data.id;
                        /* console.log(response.data); */
                        /*    console.log(data); */
                        this.$emit('deleteClicked', {
                            delete: true
                        });
                    })
            },
            obtenerDatosEditar(id) {
                this.abrirForm();
                console.log("ACA ABAJO");
                console.log(this.persona.Nombre);
                console.log(this.persona.Apellido);
                console.log(this.persona.Email);

                /* LLEVAR ESTOS A CADA INPUT DE NOTICIAS.VUE  
                            this.persona.Nombre
                          this.persona.Apellido
                            this.persona.Email
                             this.persona.Tema
                             this.persona.Anio */

                axios.get("https://603047d0a1e9d20017af1a3b.mockapi.io/ListaTemas/" + id, )
                    .then(response => {

                        this.personas = response.data;
                        console.log(response.data);

                        this.$emit('inyectarDatos'
                            /* ,
                                                            this.persona.Nombre, this.persona.Apellido, this.persona.Email, this.persona.Tema, this.persona.Anio */
                        )



                        /* nombreInput.value = this.persona.Nombre;
                            apellidoInput.value = this.persona.Apellido;
                            emailInput.value = this.persona.Email;
                            temaInput.value = this.persona.Tema;
                            anioInput.value = this.persona.Anio; */

                    })
                    .catch(e => console.log(e));





            }
        }
    }
</script>

<style>

</style>