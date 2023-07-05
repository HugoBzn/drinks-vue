import { onMounted, ref, reactive } from 'vue';
import { defineStore } from 'pinia';
import APIService from '../services/APIService';
import { useModalStore } from './modal';

export const useBebidasStore = defineStore('bebidas', () => {
  const modalStore = useModalStore();

  const categorias = ref([]);
  const busqueda = reactive({
    nombre: '',
    categoria: '',
  });
  const recetas = ref([]);
  const receta = ref({});

  // Si creamos una función que modifica el state, tienes que crear una "function"
  onMounted(async function () {
    const {
      data: { drinks },
    } = await APIService.obtenerCategorias();
    categorias.value = drinks;
  });

  async function obtenerRecetas() {
    const {
      data: { drinks },
    } = await APIService.buscarRecetas(busqueda);
    recetas.value = drinks;
  }

  async function seleccionarBebida(id) {
    const {
      data: { drinks },
    } = await APIService.buscarReceta(id);
    receta.value = drinks[0];
    modalStore.handleClickModal();
  }

  return {
    categorias,
    busqueda,
    recetas,
    receta,
    obtenerRecetas,
    seleccionarBebida,
  };
});
