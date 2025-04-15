<template>
  <div class="bg-white shadow-md p-4 rounded-md border">
    <h2 class="text-lg font-semibold bg-blue-600 text-black px-4 py-2 rounded-t-md">Mua Vé Nhanh</h2>
    <div class="p-4 space-y-4">
      <select class="w-full border p-2 rounded" v-model="selectedMovie">
        <option disabled>Chọn phim</option>
        <option v-for="movie in movies" :key="movie.id">{{ movie.title }}</option>
      </select>
      <br/>
      <select class="w-full border p-2 rounded" v-model="selectedCinema">
        <option disabled>Chọn rạp</option>
        <option>Galaxy Nguyễn Du</option>
        <option>CGV Lê Văn Việt</option>
      </select>
      <br/>
      <input type="date" class="w-full border p-2 rounded" v-model="selectedDate" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const selectedMovie = ref('')
const selectedCinema = ref('')
const selectedDate = ref('')

const movies = ref([
  { id: 1, title: 'Địa Đạo' },
  { id: 2, title: 'Cười Ban Mạn Anh Rồng' },
])
</script>
