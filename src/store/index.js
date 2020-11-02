import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Juegos:[
      {
        codigo: "0001",
        nombre: "Sekiro",
        stock: 100,
        precio: 30000,
        color: "red",
        destacado: true
      },
      {
        codigo: "0002",
        nombre: "Fifa 21",
        stock: 100,
        precio: 25000,
        color: "blue",
        destacado: false,
      },
      {
        codigo: "0003",
        nombre: "Gears of War 4",
        stock: 100,
        precio: 15000,
        color: "green",
        destacado: true
      },
      {
        codigo: "0004",
        nombre: "Mario Tennis Aces",
        stock: 100,
        precio: 35000,
        color: "yellow",
        destacado: false
      },
      {
        codigo: "0005",
        nombre: "Bloodborne",
        stock: 100,
        precio: 10000,
        color: "blue",
        destacado: true,
      },
      {
        codigo: "0006",
        nombre: "Forza Horizon 4",
        stock: 100,
        precio: 20000,
        color: "red",
        destacado: true
      }
    ],
    ventas: [],
    titulo: "Productos en venta",
    totalGanancias:[],
    suma:""
  },
  getters: {
    totalJuegos: state=>{
      return state.Juegos.length;
    },
    JuegosParaVender: state=>{
      return state.Juegos.filter(juego=>{
        return juego.stock>0
      })
    },
    totalJuegosstock:(state,getters)=>{
      return getters.JuegosParaVender.length
    },
    ventasRealizadas: state=>{
      return state.ventas.length
    },
    totalSuma:state=>{
      return state.totalGanancias.reduce((a,b)=>a+b)
    }

  },
  mutations: {
    venderJuego: (state, juego_codigo)=>{
      state.Juegos.forEach((juego)=>{
        if(juego.codigo === juego_codigo){
          juego.stock--
        }
      })
    },
    registrarVenta:(state, juego)=>{
      state.ventas.push({
        codigo:juego.codigo,
        nombre: juego.nombre,
        stock:juego.stock,
        precio:juego.precio
      }),
      state.totalGanancias.push(
        parseInt(juego.precio)
      )
    }
  },
  actions: {
    ProcesarVenta({commit,state}, juego_codigo){
      return new Promise((resolve,reject)=>{
        setTimeout(() => {
          let venta_exitosa = false
          state.Juegos.forEach(juego=>{
          if(juego.codigo === juego_codigo){
            //llamo a mutacion
            commit('venderJuego', juego_codigo)
            venta_exitosa= true
          }
        })
        if(venta_exitosa){
          resolve()
        }
        else{
          reject()
        }
        }, 2000);
        
      })
    },
    registrarVenta({commit}, juego){
      return new Promise((resolve)=>{
        setTimeout(() => {
          commit('registrarVenta', juego)
          resolve()
        }, 1000);
      })
    },
    async vender({dispatch},juego){
      try {
        await dispatch('ProcesarVenta', juego.codigo)
        await dispatch('registrarVenta', juego)
        alert("venta procesada")
        
      } catch (error) {
        this.console.log(error);
      }
    }
  },
  modules: {
  }
})
