<template>
    <div>
    Listado de ventas registradas: 
    <ul>
    <li v-for="venta in ventas" :key="venta.codigo">
      <div>Codigo:{{venta.codigo}} - Nombre:{{venta.nombre}} - Precio: ${{venta.precio}} </div>
    </li>
    </ul>

    <p>Monto total de ventas: ${{totalSuma}}</p>
    </div>
</template>

<script>
export default {
    name: 'component-name',
    props: {
        JuegosParaVender:{
            type:Array,
        },
        ventas:{
        },
        totalSuma:{}
    },
    data: function(){
        return {}
    },
    // computed: {},
    methods: {
        // -- Metodos
    },
    // components: {},
}
</script>

<style scoped>
    p{
        margin-bottom:100px;
    }
</style>