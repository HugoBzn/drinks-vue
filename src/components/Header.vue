<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <div>
    <header class="bg-slate-800">
      <div class="mx-auto container px-5 py-16">
        <div class="flex justify-between items-center">
          <div>
            <RouterLink :to="{ name: 'home' }">
              <img class="w-32" src="/img/logo.svg" alt="logotipo" />
            </RouterLink>
          </div>

          <nav class="flex gap-4">
            <RouterLink
              :to="{ name: 'home' }"
              class="text-white uppercase font-bold"
              active-class="text-orange-500"
            >
              Home
            </RouterLink>
            <RouterLink
              :to="{ name: 'favorites' }"
              class="text-white uppercase font-bold"
              active-class="text-orange-500"
            >
              Favorites
            </RouterLink>
          </nav>
        </div>

        <form class="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6">
          <div class="space-y-4">
            <label for="ingrediente" class="block text-white uppercase font-extrabold text-lg">
              Nombre o Ingredientes
            </label>
            <input
              id="ingrediente"
              type="text"
              class="p-3 w-full rounded-lg focus:outline-none"
              placeholder="Nombre o Ingrediente: Ej. Vodka, Tequila, etc"
            />
          </div>

          <div class="space-y-4">
            <label for="categoria" class="block text-white uppercase font-extrabold text-lg">
              Categoría
            </label>
            <select id="categoria" class="p-3 w-full rounded-lg focus:outline-none">
              <option value="">-- Seleccione --</option>
            </select>
          </div>

          <input
            type="submit"
            class="bg-orange-800 hover:bg-orange-900 text-white cursor-pointer font-extrabold w-full p-2 rounded-lg uppercase"
            value="Buscar recetas"
          />
        </form>
      </div>
    </header>
  </div>
</template>
