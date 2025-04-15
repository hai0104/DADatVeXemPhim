<script setup>
import { ref, reactive } from 'vue'

const filters = reactive({
    genre: '',
    country: '',
    year: '',
    status: '',
    sort: ''
})

const movies = ref([
    { id: 1, title: 'Avengers: Endgame', likes: 2604836, description: 'Cú búng tay của Thanos...', image: 'https://www.galaxycine.vn/media/2019/4/10/640wx396h_1554864314405.jpg' },
    { id: 2, title: 'Avengers: Infinity War', likes: 1336313, description: 'Biệt đội siêu anh hùng...', image: 'https://www.galaxycine.vn/media/2020/9/3/avengers-infinity-war-4k-8k_1599105170451.jpg' },
    { id: 3, title: 'Cua Lại Vợ Bầu', likes: 1054097, description: 'Một bộ phim Việt Nam...', image: 'https://www.galaxycine.vn/media/2019/1/14/1f53141dfb45271131393dd9635d6ed73c4fb4329ae9b786c0pimgpsh-fullsize-distr_1547463128661.jpg' }
])

const booking = reactive({
    movie: '',
    cinema: '',
    date: ''
})
</script>

<template>
    <div id="app" class="bg-dark text-white min-vh-100 p-3">
        <!-- FILTER SECTION -->
        <div>
            <h4 class="mb-3 border-start border-primary ps-2">Đao Diễn</h4>
            <div class="row g-2 mb-4">
                <div class="col-md-2">
                    <select class="form-select" v-model="filters.country">
                        <option disabled value="">Quốc Gia</option>
                        <option value="Việt Nam">Việt Nam</option>
                        <option value="Mỹ">Mỹ</option>
                        <option value="Hàn Quốc">Hàn Quốc</option>
                    </select>
                </div>
                <div class="col-md-3">
                    <select class="form-select" v-model="filters.sort">
                        <option disabled value="">Xem Nhiều Nhất</option>
                        <option value="">Mới Nhất</option>
                        <option value="">Đánh giá Nhất</option>
                    </select>
                </div>
            </div>
        </div>

        <!-- MAIN CONTENT -->
        <div class="row">
            <!-- MOVIE LIST -->
            <div class="col-md-8">
                <div v-for="movie in movies" :key="movie.id" class="d-flex mb-4">
                    <img :src="movie.image" class="me-3" style="width: 200px; height: auto;">
                    <div>
                        <h5>{{ movie.title }}</h5>
                        <div class="mb-2">
                            <button class="btn btn-primary btn-sm me-2">Thích</button>
                            <span class="text-muted">{{ movie.likes }}</span>
                        </div>
                        <p class="text-white-50">{{ movie.description }}</p>
                    </div>
                </div>
            </div>

            <!-- RIGHT SIDEBAR: QUICK BOOKING + NOW SHOWING -->
            <div class="col-md-4">
                <!-- QUICK BOOKING -->
                <div class="card bg-secondary text-white mb-4">
                    <div class="card-header bg-primary">Mua Vé Nhanh</div>
                    <div class="card-body">
                        <select class="form-select mb-2" v-model="booking.movie">
                            <option disabled value="">Chọn phim</option>
                        </select>
                        <select class="form-select mb-2" v-model="booking.cinema">
                            <option disabled>Chọn rạp</option>
                        </select>
                        <select class="form-select mb-2" v-model="booking.date">
                            <option disabled>Chọn ngày</option>
                        </select>
                    </div>
                </div>

                <!-- NOW SHOWING SECTION -->
                <div>
                    <h5 class="border-start border-primary ps-2 mb-3">PHIM ĐANG CHIẾU</h5>
                    <div class="card bg-dark text-white border-0">
                        <img src="https://cdn.galaxycine.vn/media/2025/3/25/dia-dao-2_1742873342430.jpg"
                            class="card-img now-showing-img" alt="Phim Địa Đạo">
                        <div class="card-img-overlay d-flex flex-column justify-content-end">
                            <div class="bg-dark bg-opacity-75 p-3">
                                <h5 class="card-title">ĐỊA ĐẠO</h5>
                                <p>Suất chiếu đặc biệt: 19h, 02/04 & 03/04/2025</p>
                                <p><span class="text-warning">★</span> 8.7</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<style>
body {
    background-color: #121212;
}

.now-showing-img {
    width: 300px;
    height: 200px;
    object-fit: cover;
    border-radius: 5px;
}
</style>