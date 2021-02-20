<template>
        <tr>
            <td>{{persona.id}}</td>
            <td>{{persona.Nombre}}</td>
            <td>{{persona.Apellido}}</td>
            <td>{{persona.Email}}</td>
            <td>{{persona.Tema}}</td>
            <td>{{persona.Anio}}</td>
            <td class="d-flex justify-content-around table-dark"> <button class="bg-dark text-warning">Editar</button> <button class="bg-dark text-warning" @click="eliminarFila(persona.id)">Eliminar</button> </td> 
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
                axios.delete("https://6030477ea1e9d20017af1a35.mockapi.io/listatemas/" + id).then(response => {
                    this.personas = response.id
                    
                    window.location.reload()
                })


            }
        }
    }
</script>
<style>

</style>