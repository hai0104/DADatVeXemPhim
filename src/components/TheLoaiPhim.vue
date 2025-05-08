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
  <div id="app" class=" text-black min-vh-100 p-3">
    <!-- FILTER SECTION -->
    <div>
      <h4 class="mb-3 border-start border-primary ps-2" style="color: black;" >PHIM ĐIỆN ẢNH</h4>
      <div class="row g-2 mb-4">
        <div class="col-md-2">
          <select class="form-select" v-model="filters.genre">
            <option disabled value="">Thể Loại</option>
            <option value="Hành Động">Hành Động</option>
            <option value="Tình Cảm">Tình Cảm</option>
            <option value="Kinh Dị">Kinh Dị</option>
          </select>

        </div>
        <div class="col-md-2">
          <select class="form-select" v-model="filters.country">
            <option disabled value="">Quốc Gia</option>
            <option value="Việt Nam">Việt Nam</option>
            <option value="Mỹ">Mỹ</option>
            <option value="Hàn Quốc">Hàn Quốc</option>
          </select>

        </div>
        <div class="col-md-2">
          <select class="form-select" v-model="filters.year">
            <option disabled value="">Năm</option>
            <option value="Việt Nam">2023</option>
            <option value="Mỹ">2024</option>
            <option value="Hàn Quốc">2025</option>
          </select>
        </div>
        <div class="col-md-3">
          <select class="form-select" v-model="filters.status">
            <option disabled value="">Đang Chiếu/Sắp</option>
            <option value="">Đang Chiếu</option>
            <option value="">Sắp</option>
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
          <div class="card-header bg-primary" >Mua Vé Nhanh</div>
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
          <h5 class="mb-3 border-start border-primary ps-2" style="color: black;">PHIM ĐANG CHIẾU</h5>
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
    <div>
      <h4 class="" style="color: black;">GALAXY CINEMA</h4>
      <p>Bạn là một người mê phim, bạn thích khám phá bí mật phía sau hậu trường của các bom tấn, bạn thần tượng nhà làm
        phim nào đấy bởi tư duy vượt thời đại, phong cách quay phim đặc biệt và những câu chuyện đầy mới lạ, bạn ngưỡng
        mộ một ngôi sao bởi khả năng diễn xuất cực đỉnh… Thậm chí nếu bạn muốn tìm hiểu sâu hơn về điện ảnh, các trào
        lưu chủ nghĩa từng tạo tiếng vang trong lịch sử, sự ra đời của các thể loại và bản sắc riêng của từng nền điện
        ảnh đến từ các quốc gia khác nhau.
        Chào mừng đến chuyên trang điện ảnh, nơi được xem như một thư viện với đầy đủ các thông tin về những bộ phim,
        đạo diễn, diễn viên dành cho người yêu phim. Tại đây bạn dễ dàng tìm hiểu được tiểu sử của vị đạo diễn yêu
        thích, có được thông tin bên lề của các bộ phim hay đang chiếu tại rạp. Ngoài ra nếu đam mê những tác phẩm kinh
        điển trong quá khứ, vẫn có những bài bình luận với hạng mục Phim Kinh Điển. Đối với những ai có hứng thú tìm
        hiểu đời tư của các minh tinh hạng A, Galaxy Cinema cũng luôn cập nhật các tin tức nóng hổi từ họ. Bên cạnh đó
        còn bao gồm các bài phân tích mang tính chuyên môn, các chủ đề giúp nâng cao kiến thức điện ảnh cũng được giới
        thiệu qua loạt bài Ký Sự Điện Ảnh. Galaxy Cinema – rạp chiếu được trang bị hệ thống âm thanh và hình ảnh hàng
        đầu Việt Nam, tự hào là Trạm Điện Ảnh sẵn sàng đưa bạn vào thế giới Phim Như Sống – Sống Như Phim, cùng những
        chuyến tàu với trải nghiệm thú vị tuyệt vời nhất trên màn ảnh.
      </p>
    </div>
  </div>
</template>
<style>


.now-showing-img {
  width: 300px;
  height: 200px;
  object-fit: cover;
  border-radius: 5px;
}
</style>