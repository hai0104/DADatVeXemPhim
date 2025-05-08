<script setup>
import { ref, reactive } from "vue";

const filters = reactive({
  genre: "",
  country: "",
  year: "",
  status: "",
  sort: "",
});

const movies = ref([
  {
    id: 1,
    title: "Avengers: Endgame",
    likes: 2604836,
    description: "Cú búng tay của Thanos...",
    image:
      "https://www.galaxycine.vn/media/2019/4/10/640wx396h_1554864314405.jpg",
  },
  {
    id: 2,
    title: "Avengers: Infinity War",
    likes: 1336313,
    description: "Biệt đội siêu anh hùng...",
    image:
      "https://www.galaxycine.vn/media/2020/9/3/avengers-infinity-war-4k-8k_1599105170451.jpg",
  },
  {
    id: 3,
    title: "Cua Lại Vợ Bầu",
    likes: 1054097,
    description: "Một bộ phim Việt Nam...",
    image:
      "https://www.galaxycine.vn/media/2019/1/14/1f53141dfb45271131393dd9635d6ed73c4fb4329ae9b786c0pimgpsh-fullsize-distr_1547463128661.jpg",
  },
]);

const booking = reactive({
  movie: "",
  cinema: "",
  date: "",
});
</script>

<template>
  <div id="app" class="bg-white text-dark min-vh-100 p-3">
    <!-- FILTER SECTION -->
    <div>
      <h4 class="mb-3 border-start border-primary ps-2">
        🎬 Ưu Đãi Rạp Galaxy Cinema 🎟️
      </h4>
    </div>

    <!-- MAIN CONTENT -->
    <div class="row g-0">
      <!-- MOVIE LIST -->
      <div class="col-md-8">
        <div class="row g-3">
          <div class="col-md-4 col-sm-6 promo-card">
            <a href="https://www.galaxycine.vn/khuyen-mai/" target="_blank">
              <img
                src="https://cdn.galaxycine.vn/media/2025/4/18/500_1744965721527.jpg"
                alt="Promo 1"
              />
              <div class="promo-info">PHIM BOM TẤN THÁNG 4</div>
            </a>
          </div>
          <div class="col-md-4 col-sm-6 promo-card">
            <a href="https://www.galaxycine.vn/khuyen-mai/" target="_blank">
              <img
                src="https://cdn.galaxycine.vn/media/2025/4/18/500_1744949933199.jpg"
                alt="Promo 2"
              />
              <div class="promo-info">PHIM BOM TẤN THÁNG 4</div>
            </a>
          </div>
          <div class="col-md-4 col-sm-6 promo-card">
            <a href="https://www.galaxycine.vn/khuyen-mai/" target="_blank">
              <img
                src="https://cdn.galaxycine.vn/media/2025/4/18/500_1744949933199.jpg"
                alt="Promo 3"
              />
              <div class="promo-info">PHIM BOM TẤN THÁNG 4</div>
            </a>
          </div>
          <div class="col-md-4 col-sm-6 promo-card">
            <a href="https://www.galaxycine.vn/khuyen-mai/" target="_blank">
              <img
                src="https://cdn.galaxycine.vn/media/2025/4/18/500_1744949933199.jpg"
                alt="Promo 4"
              />
              <div class="promo-info">PHIM BOM TẤN THÁNG 4</div>
            </a>
          </div>
          <div class="col-md-4 col-sm-6 promo-card">
            <a href="https://www.galaxycine.vn/khuyen-mai/" target="_blank">
              <img
                src="https://cdn.galaxycine.vn/media/2025/4/18/500_1744949933199.jpg"
                alt="Promo 5"
              />
              <div class="promo-info">PHIM BOM TẤN THÁNG 4</div>
            </a>
          </div>
          <div class="col-md-4 col-sm-6 promo-card">
            <a href="https://www.galaxycine.vn/khuyen-mai/" target="_blank">
              <img
                src="https://cdn.galaxycine.vn/media/2025/4/18/500_1744949933199.jpg"
                alt="Promo 6"
              />
              <div class="promo-info">PHIM BOM TẤN THÁNG 4</div>
            </a>
          </div>
          <div class="col-md-4 col-sm-6 promo-card">
            <a href="https://www.galaxycine.vn/khuyen-mai/" target="_blank">
              <img
                src="https://cdn.galaxycine.vn/media/2025/4/18/500_1744949933199.jpg"
                alt="Promo 6"
              />
              <div class="promo-info">PHIM BOM TẤN THÁNG 4</div>
            </a>
          </div>
        </div>
      </div>

      <!-- RIGHT SIDEBAR: QUICK BOOKING + NOW SHOWING -->
      <div class="col-md-4">
                <!-- QUICK BOOKING -->
                <div class="card bg-secondary text-white mb-4">
                    <div class="card-header bg-primary" style="color: black;">Mua Vé Nhanh</div>
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
                    <h5 style="color: black;">PHIM ĐANG CHIẾU</h5>
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
.now-showing-img {
  width: 300px;
  height: 200px;
  object-fit: cover;
  border-radius: 5px;
}

.promo-card img {
  width: 240px;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: block;
  transition: transform 0.3s ease;
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
.promo-card {
  margin-bottom: 2rem; /* khoảng cách theo chiều dọc */
}
</style>
