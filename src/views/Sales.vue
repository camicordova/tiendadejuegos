<template>
<div>
    
    <h1> TOTAL VENTAS</h1>
    <div class="total">
    <ventaTotal :ventas="ventas" :totalSuma="totalSuma"></ventaTotal>
    </div>
</div>
</template>

<script>
import {mapState, mapGetters} from 'vuex';
import ventaTotal from '../components/VentaTotal'
export default {
    name: 'Productos',
    // props: {},
    data: function(){
        return {}
    },
    computed: {
        ...mapState(['Juegos','ventas']),
        ...mapGetters(['totalJuegos','JuegosParaVender','ventasRealizadas','totalSuma']),
    },
    methods: {
        // -- Metodos
    },
     components: {
         'ventaTotal':ventaTotal
     },
}
</script>

<style scoped>
 
     .total{
        text-align:left;
        display:flex;
        flex-direction:column;
        width:800px;
        justify-content:center;
        margin:auto ;
        margin-top:50px;
    
    }
</style>