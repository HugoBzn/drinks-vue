import { onMounted, ref, reactive } from 'vue';
import { defineStore } from 'pinia';
import APIService from '../services/APIService';

export const useBebidasStore = defineStore('bebidas', () => {
  const categorias = ref([]);

  const busqueda = reactive({
    nombre: '',
    categoria: '',
  });

  onMounted(async function () {
    const { data: { drinks } } = await APIService.obtenerCategorias();

    categorias.value = drinks;
  });

  // Si creamos una función que modifica el state, tienes que crear una function
  function obtenerRecetas() {
    console.log('Consultando API...');
  }

  return {
    categorias,
    busqueda,
    obtenerRecetas,
  };
});
