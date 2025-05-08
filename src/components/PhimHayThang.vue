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
    <div id="app" class="bg-white text-dark min-vh-100 p-3">
        <!-- FILTER SECTION -->
        <div>
            <h4 class="mb-4 border-start border-primary ps-2">PHIM HAY THEO THÁNG</h4>
        </div>

        <!-- MAIN CONTENT -->
        <div class="row g-0">
            <!-- MOVIE LIST -->
            <!-- ƯU ĐÃI THEO THÁNG -->
            <div class="col-md-8">

                <!-- Ưu đãi tháng 04 -->
                <div class="d-flex mb-4">
                    <img src="https://www.galaxycine.vn/media/2025/3/28/1800x1200_1743133581467.jpg"
                        alt="Ưu đãi tháng 4"
                        style="width: 220px; height: 130px; object-fit: cover; border-radius: 8px; margin-right: 1rem;">
                    <div>
                        <h5 class="mb-1">Ưu Đãi Tháng 04.2025: Mặt Trời Trong Bóng Tối</h5>
                        <p>Chào tháng 4 với hàng loạt bom tấn và ưu đãi hấp dẫn tại Galaxy Cinema. Đừng bỏ lỡ nhé!</p>
                        <a href="https://www.galaxycine.vn/khuyen-mai/" target="_blank"
                            class="btn btn-sm btn-outline-primary">Xem chi tiết</a>
                    </div>
                </div>

                <!-- Ưu đãi tháng 03 -->
                <div class="d-flex mb-4">
                    <img src="https://www.galaxycine.vn/media/2025/2/27/1800x1200_1740651635343.jpg"
                        alt="Ưu đãi tháng 3"
                        style="width: 220px; height: 130px; object-fit: cover; border-radius: 8px; margin-right: 1rem;">
                    <div>
                        <h5 class="mb-1">Ưu Đãi Tháng 03.2025: Bạch Tuyết pk Quỷ Nhập Tràng</h5>
                        <p>Ưu đãi cho mọi thể loại phim yêu thích từ hành động đến hoạt hình, dành cho cả gia đình.</p>
                        <a href="https://www.galaxycine.vn/khuyen-mai/" target="_blank"
                            class="btn btn-sm btn-outline-primary">Xem chi tiết</a>
                    </div>
                </div>

                <!-- Ưu đãi tháng 02 -->
                <div class="d-flex mb-4">
                    <img src="https://www.galaxycine.vn/media/2025/2/12/pht2-750_1739332729661.jpg" alt="Ưu đãi tháng 2"
                        style="width: 220px; height: 130px; object-fit: cover; border-radius: 8px; margin-right: 1rem;">
                    <div>
                        <h5 class="mb-1">Ưu Đãi Tháng 02.2025: Captain Chốt Đơn!</h5>
                        <p>Đón Tết cùng ưu đãi phim hành động, siêu anh hùng, kinh dị hot nhất tại Galaxy.</p>
                        <a href="https://www.galaxycine.vn/khuyen-mai/" target="_blank"
                            class="btn btn-sm btn-outline-primary">Xem chi tiết</a>
                    </div>
                </div>

                <!-- Ưu đãi mùa Tết -->
                <div class="d-flex mb-4">
                    <img src="https://www.galaxycine.vn/media/2025/1/9/phim-hay-mua-tet-750_1736415471306.jpg"
                        alt="Ưu đãi mùa Tết"
                        style="width: 220px; height: 130px; object-fit: cover; border-radius: 8px; margin-right: 1rem;">
                    <div>
                        <h5 class="mb-1">Ưu Đãi Mùa Tết 2025: Yêu Nhầm Báo Thủ</h5>
                        <p>Tết thêm rộn ràng với ưu đãi hấp dẫn từ Galaxy Cinema cho những bộ phim Việt đình đám.</p>
                        <a href="https://www.galaxycine.vn/khuyen-mai/" target="_blank"
                            class="btn btn-sm btn-outline-primary">Xem chi tiết</a>
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

.promo-card img {
    width: 240px;
    height: 400px;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    display: block;
    transition: transform 0.3s ease
}

.promo-card {
    position: relative;
    overflow: hidden;
    cursor: pointer;
}

.promo-card {
    display: flex;
    justify-content: center;
    padding: 0.25rem;
}

.promo-card:hover img {
    transform: scale(1.05);
    /* Làm mờ ảnh khi hover */
    opacity: 0.3;
}

/* Lớp phủ đè lên ảnh */
.promo-info {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    text-align: center;
    opacity: 0;
    transition: opacity 0.3s ease;
    font-size: 18px;
    font-weight: bold;
    z-index: 2;
}

.promo-card:hover .promo-info {
    opacity: 1;
}
</style>