<script setup>
import FooterLayout from './layout/FooterLayout.vue';
import HeaderLayout from './layout/HeaderLayout.vue';


</script>

<template>
  <HeaderLayout></HeaderLayout>
  <main class="my-5">
    <RouterView></RouterView>
  </main>
  <FooterLayout></FooterLayout>
</template>