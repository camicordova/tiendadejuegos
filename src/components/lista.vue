<template>
    <div>
    <h4>Cantidad de Juegos con stock:{{totalJuegosstock}} </h4>

        <ul class="lista">
            <li v-for="juego in JuegosParaVender" :key="juego.codigo" :style="{background:juego.color,color:juego.font}">
                <span>{{juego.codigo}}</span>
                <span>{{juego.nombre}}</span>
                <span>{{juego.stock}}</span>
                <span>{{juego.precio}}</span>
                <span><button @click="vender(juego)">Vender</button></span>
                
            </li>
    </ul>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    name: 'lista-component',
    props: {
        Juegos:{
            type: Array,
            required: true,
        },
        JuegosParaVender:{
            type:Array,
        },
        totalJuegosstock:{

        }
    },
    data: function(){
        return {}
    },
    // computed: {},
    methods: {
          ...mapActions(['vender'])
    },
    // components: {},
}
</script>

<style scoped lang="scss">
.lista {
    width: fit-content;

    li {
        text-align: left;
        width: fit-content;
        list-style: none;

        &::before{
            content:"\2022";
            color: black;
            font-weight: bold;
            display: inline-block;
            margin-left: -1em;
        }

        span {
            margin-left: 1em;

        }
    }
}
</style>