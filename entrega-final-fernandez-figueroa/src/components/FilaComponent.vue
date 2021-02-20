<template>
        <tr>
            <td>{{persona.id}}</td>
            <td>{{persona.Nombre}}</td>
            <td>{{persona.Apellido}}</td>
            <td>{{persona.Email}}</td>
            <td>{{persona.Tema}}</td>
            <td>{{persona.Anio}}</td>
            <td class="d-flex justify-content-around table-dark"> <button class="bg-dark text-warning" @click="obtenerDatos(persona.id)">Editar</button> <button class="bg-dark text-warning" @click="eliminarFila(persona.id)">Eliminar</button> </td> 
        </tr>         
</template>
<script>
    import axios from "axios"
    export default {
        props: {
            persona: {
                type: Object,
                required: true,
                personas: []
            }

        },
        methods: {
            eliminarFila(id) {
                axios.delete("https://6030477ea1e9d20017af1a35.mockapi.io/listatemas/" + id)
                    .then(response => {
                        this.personas = response.id
                        window.location.reload()
                    })
            },
            obtenerDatos(id) {

                /*  console.log("CLICK EN LA FILA:" + id); */
                let nombreInput = document.getElementById("inpNombre");
                let apellidoInput = document.getElementById("inpApellido");
                let emailInput = document.getElementById("inpEmail");
                let temaInput = document.getElementById("inpTema");
                let anioInput = document.getElementById("inpAnio");

                axios.get("https://6030477ea1e9d20017af1a35.mockapi.io/listatemas/" + id, {


                    })
                    .then(response => {
                        this.personas = response.data
                        console.log(response.data);
                        nombreInput.value = this.persona.Nombre;
                        apellidoInput.value = this.persona.Apellido;
                        emailInput.value = this.persona.Email;
                        temaInput.value = this.persona.Tema;
                        anioInput.value = this.persona.Anio;
                    })
                    .catch(e => console.log(e));





            }
        }
    }
</script>

<style>

</style>