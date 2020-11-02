<template>
<div>
    <div class="ventas">
    <h1> Ventas</h1>
    <lista :JuegosParaVender="JuegosParaVender" :totalJuegosstock="totalJuegosstock"></lista>
    </div>
</div>
</template>

<script>
import {mapState, mapGetters} from 'vuex';
import lista from '../components/lista'
export default {
    name: 'presentación',
    // props: {},
    data: function(){
        return {}
    },
    computed: {
        ...mapState(['Juegos']),
        ...mapGetters(['totalJuegos','JuegosParaVender', 'totalJuegosstock']),
    },
    methods: {
    
    },
     components: {
         'lista':lista
     },
}
</script>

<style scoped lang="scss">


</style>