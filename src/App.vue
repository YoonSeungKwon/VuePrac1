<script setup>
  import HelloWorld from '@/components/HelloWorld.vue';
  import { createApp } from 'vue';
  
  const app = createApp();
  app.component('HelloWorld', HelloWorld);
  app.mount('#app');
</script>

<template>
  <div>
    <HelloWorld/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
