<template>
    
        <tr>
            <td>{{persona.id}}</td>
            <td>{{persona.Nombre}}</td>
            <td>{{persona.Apellido}}</td>
            <td>{{persona.Email}}</td>
            <td>{{persona.Tema}}</td>
            <td>{{persona.Anio}}</td>
            <td class="d-flex justify-content-around table-dark"> <button>Editar</button> <button>Eliminar</button> </td> 
        </tr> 

   
</template>
<script>
    export default {
        props: {
            persona: {
                type: Object,
                required: true
            }

        }
    }
</script>
<style lang="">

</style>