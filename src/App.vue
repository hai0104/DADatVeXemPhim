<script setup>
import { provide, ref } from 'vue';
import FooterLayout from './layout/FooterLayout.vue';
import HeaderLayout from './layout/HeaderLayout.vue';

let chiTietVe = ref({
  tenPhim: "",
  moTa: "",
  thoiGian: "",
  diaChi: "",
})
provide("chiTietVe", chiTietVe)

</script>

<template>
  <HeaderLayout></HeaderLayout>
  <main class="my-5">
  <div class="container">
    <RouterView />
  </div>
</main>
  <FooterLayout></FooterLayout>
</template>