<template>
<div>
    <div class="filtro">
        <filtro :Juegos="JuegosConFiltro" :totalJuegosstock="totalJuegosstock" @buscar="search"></filtro>
    </div>

</div>
</template>

<script>
import {
    mapState,
    mapGetters
} from 'vuex';
import filter from '../components/filtro';
export default {
    name: 'presentacion',
    data: function () {
        return {
            search_codigo: ''
        }
    },
    computed: {
        ...mapState(['Juegos']),
        ...mapGetters(['totalJuegos', 'JuegosParaVender', 'totalJuegosstock']),
        JuegosConFiltro() {
            return this.JuegosParaVender.filter((juego) => juego.codigo.includes(this.search_codigo))
        }
    },
    methods: {

        search(e) {

            this.search_codigo = e.search_codigo;

        }
    },
    components: {
        'filtro': filter,
    },
}
</script>

<style lang="scss" scoped>

</style>
