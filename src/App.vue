<script setup>
import { RouterView } from 'vue-router';
import Header from './components/Header.vue';
import Modal from './components/Modal.vue';
import Notificacion from './components/Notificacion.vue';
</script>

<template>
  <div>
    <Header />

    <main class="container mx-auto mt-10">
      <RouterView />
    </main>

    <Modal />

    <Notificacion />
  </div>
</template>

<style>
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #fff;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #ea7437;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #d35f25;
}
</style>