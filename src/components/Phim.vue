<template>
  <div class="container py-4">
    <h3 class="mb-4 fw-bold">PHIM ĐANG CHIẾU</h3>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
      <div class="col" v-for="movie in movies" :key="movie.id">
        <div class="card h-100">
          <img :src="movie.poster" class="card-img-top" :alt="movie.title" />
          <div class="card-body d-flex flex-column">
            <h6 class="card-title fw-bold">{{ movie.title }}</h6>
            <div class="mt-auto d-flex justify-content-between align-items-center">
              <span class="badge bg-warning text-dark">{{ movie.rating }}</span>
              <span class="badge bg-secondary">{{ movie.age }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container py-4">
    <h3 class="mb-4 fw-bold">PHIM SẮP CHIẾU</h3>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
      <div class="col" v-for="movie in movies" :key="movie.id">
        <div class="card h-100">
          <img :src="movie.poster" class="card-img-top" :alt="movie.title" />
          <div class="card-body d-flex flex-column">
            <h6 class="card-title fw-bold">{{ movie.title }}</h6>
            <div class="mt-auto d-flex justify-content-between align-items-center">
              <span class="badge bg-warning text-dark">{{ movie.rating }}</span>
              <span class="badge bg-secondary">{{ movie.age }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container py-4">
    <h3 class="mb-4 fw-bold">PHIM IMAX</h3>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
      <div class="col" v-for="movie in movies" :key="movie.id">
        <div class="card h-100">
          <img :src="movie.poster" class="card-img-top" :alt="movie.title" />
          <div class="card-body d-flex flex-column">
            <h6 class="card-title fw-bold">{{ movie.title }}</h6>
            <div class="mt-auto d-flex justify-content-between align-items-center">
              <span class="badge bg-warning text-dark">{{ movie.rating }}</span>
              <span class="badge bg-secondary">{{ movie.age }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const movies = ref([
  {
    id: 1,
    title: "Thám Tử Kiên: Kỳ Án Không Đầu",
    poster: "https://cdn.galaxycine.vn/media/2025/4/29/dia-dao-500_1745896687306.jpg",
    rating: 9.5,
    age: "T16",
  },
  {
    id: 2,
    title: "Biệt Đội Sấm Sét",
    poster: "https://cdn.galaxycine.vn/media/2025/4/29/dia-dao-500_1745896687306.jpg",
    rating: 9,
    age: "T13",
  },
  {
    id: 3,
    title: "Lật Mặt 8: Vòng Tay Nắng",
    poster: "https://cdn.galaxycine.vn/media/2025/4/29/dia-dao-500_1745896687306.jpg",
    rating: 7,
    age: "T13",
  },
  {
    id: 4,
    title: "Địa Đạo: Mặt Trời Trong Bóng Tối",
    poster: "https://cdn.galaxycine.vn/media/2025/4/29/dia-dao-500_1745896687306.jpg",
    rating: 8.6,
    age: "T16",
  },
]);
</script>

<style scoped>
.card-img-top {
  height: 300px;
  object-fit: cover;
}
</style>
