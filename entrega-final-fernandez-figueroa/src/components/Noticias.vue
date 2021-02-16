<template>
    <div>
        <div class="container mt-4">
<h3 class="text-danger font-weight-bold">LOS ID ESTAN AGREGADOS DE FORMA MANUAL</h3>
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
                    <tr class="" v-for="persona in lista" :key="persona.id">
                        <td v-text="persona.Id"></td>
                        <td v-text="persona.Nombre"></td>
                        <td v-text="persona.Apellido"></td>
                        <td v-text="persona.Email"></td>
                        <td v-text="persona.Tema"></td>
                        <td v-text="persona.Año"></td>
                        <td class="d-flex justify-content-around table-dark"> <button>Editar</button> <button>Eliminar</button> </td> 
                    </tr>

                </thead>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                id: 0,
                lista: [{
                        Id: "1",
                        Nombre: "Carlos",
                        Apellido: "Medina",
                        Email: "carlitos@blalba.com",
                        Tema: "Rather Be",
                        Año: "2014"
                    }, {
                        Id: "2",
                        Nombre: "Juana",
                        Apellido: "Alberdi",
                        Email: "coquito@blablba.com",
                        Tema: "Miss you",
                        Año: "2000"

                    }, {
                        Id: "3",
                        Nombre: "Melani",
                        Apellido: "Cardenas",
                        Email: "Mela@blalba.com",
                        Tema: "Real love",
                        Año: "2000"

                    }, {
                        Id: "4",
                        Nombre: "Joaquin",
                        Apellido: "Marredo",
                        Email: "roaM@blalba.com",
                        Tema: "Miss You",
                        Año: "2000"

                    }, {
                        Id: "5",
                        Nombre: "Nicolas",
                        Apellido: "Benavi",
                        Email: "nico@blalba.com",
                        Tema: "Rather be",
                        Año: "2014"

                    }, {
                        Id: "6",
                        Nombre: "Rita",
                        Apellido: "Celeste",
                        Email: "riti@blalba.com",
                        Tema: "Symphony",
                        Año: "2000"

                    }, {
                        Id: "7",
                        Nombre: "Federica",
                        Apellido: "Miguel",
                        Email: "fede@blalba.com",
                        Tema: "Real love",
                        Año: "2001"

                    }, {
                        Id: "8",
                        Nombre: "Mirtha",
                        Apellido: "Mabel",
                        Email: "mirthi@blalba.com",
                        Tema: "Mama",
                        Año: "2012"

                    }, {
                        Id: "9",
                        Nombre: "Clara",
                        Apellido: "Oscura",
                        Email: "oscucla@blalba.com",
                        Tema: "Rather Be",
                        Año: "2014"

                    }, {
                        Id: "10",
                        Nombre: "Miguel",
                        Apellido: "Del Campo",
                        Email: "miguel@blalba.com",
                        Tema: "Rather be",
                        Año: "2014"
                    }, {
                        Id: "11",
                        Nombre: "Oscar",
                        Apellido: "Clima",
                        Email: "osqui@blalba.com",
                        Tema: "Mama",
                        Año: "2012"
                    }


                ]
            }
        },
    }
</script>
<style>

</style>