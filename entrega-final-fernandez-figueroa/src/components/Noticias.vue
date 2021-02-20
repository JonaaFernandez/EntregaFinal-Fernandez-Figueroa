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
                personas: []
            }
        },
        mounted() {
            this.getDatos();

        },
        methods: {
            getDatos() {
                axios
                    .get('https://6030477ea1e9d20017af1a35.mockapi.io/listatemas')
                    .then(response => {
                        this.personas = response.data

                    })
                    .catch(e => console.log(e))

            }
        },
    };
</script>
<style>

</style>