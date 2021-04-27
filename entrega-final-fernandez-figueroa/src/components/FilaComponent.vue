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
                            delete: true,
                            id
                        });
                    })
            },
            obtenerDatosEditar(id) {
                this.abrirForm();
                axios.get("https://603047d0a1e9d20017af1a3b.mockapi.io/ListaTemas/" + id, )
                    .then(response => {

                        this.personas = response.data;
                        /*  this.nombreVm = this.persona.Nombre */

                        this.$emit("almacenarData", {
                            idVmEditar: this.persona.id,
                            nombreVmEditar: this.persona.Nombre,
                            apellidoVmEditar: this.persona.Apellido,
                            emailVmEditar: this.persona.Email,
                            temaVmEditar: this.persona.Tema,
                            anioVmEditar: this.persona.Anio,

                        });
                    })
                    .catch(function(error) {
                        console.log(error);
                    });
            },
        }

    }
</script>

<style>

</style>