<template>
<div>

    <h4> <label>Seleccione código de juego</label>
        <input type="text" v-model="search" @change="buscar">
    </h4>

    <h4> Cantidad de juegos disponibles: {{totalJuegosstock}}</h4>

    <ul class="lista">
            <li v-for="juego in Juegos" :key="juego.codigo" :style="{background:juego.color,color:juego.font}">
                <span>{{juego.codigo}}</span>
                <span>{{juego.nombre}}</span>
                <span>{{juego.stock}}</span>
                <span>{{juego.precio}}</span>

            </li>
    </ul>

</div>
</template>

<script>
export default {
    name: "filtro",
    props: {
        Juegos: {
            type: Array,
            required: true,
        },
        totalJuegosstock: {},
    },
    data: function () {
        return {
            search: "",
        };
    },
    // computed: {},
    methods: {
        buscar() {
            this.$emit("buscar", {
                search_codigo: this.search,
            });
        },
    },
    components: {},
};
</script>

<style lang="scss" scoped>
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
