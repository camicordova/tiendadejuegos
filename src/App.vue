<template>
<div id="app">
    <div id="nav">
        <router-link to="/">Inicio</router-link> |
        <router-link to="/busquedas">Búsquedas</router-link> |
        <router-link to="/productos">Ventas</router-link> |
        <router-link to="/total">Total</router-link>
    </div>
    <router-view />
</div>
</template>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 50px;

    a {
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 600;
        color: rgb(32, 32, 32);

        &.router-link-exact-active {
            color: blue;
        }
    }
}
</style>
