<script setup></script>
<template>
    <div class="container my-5">
  <div class="row">
    <!-- Bên trái: Blog điện ảnh -->
    <div class="col-lg-8">
      <h5 class="border-start border-4 border-primary ps-2 fw-bold mb-4">BLOG ĐIỆN ẢNH</h5>

      <!-- Một bài viết -->
      <div class="d-flex mb-4">
        <img src="/src/assets/images/diadao.png" class="img-fluid rounded" style="width: 160px; height: auto;" alt="ảnh blog 1">
        <div class="ps-3">
          <h6 class="fw-bold mb-1">Bùi Thạc Chuyên Và 11 Năm Tâm Huyết Với Địa Đạo: Mặt Trời Trong Bóng Tối</h6>
          <div class="mb-2">
            <button class="btn btn-sm btn-primary me-2">Thích</button>
            <span class="badge bg-light text-dark">67</span>
          </div>
          <p class="small text-muted">
            Lần đầu tiên, cuộc chiến và đời sống của những du kích dưới lòng địa đạo Củ Chi được tái hiện chân thực...
          </p>
        </div>
      </div>

      <!-- Các bài viết khác (copy và chỉnh nội dung/ảnh) -->
      <div class="d-flex mb-4">
        <img src="/src/assets/images/diadao.png" class="img-fluid rounded" style="width: 160px;" alt="ảnh blog 2">
        <div class="ps-3">
          <h6 class="fw-bold mb-1">Tổng Hợp Oscar 2025: Anora Thắng Lớn</h6>
          <div class="mb-2">
            <button class="btn btn-sm btn-primary me-2">Thích</button>
            <span class="badge bg-light text-dark">28</span>
          </div>
          <p class="small text-muted">Oscars 2025 diễn ra với vô vàn sự bất ngờ...</p>
        </div>
      </div>

      <div class="d-flex mb-4">
        <img src="/src/assets/images/diadao.png" class="img-fluid rounded" style="width: 160px;" alt="ảnh blog 3">
        <div class="ps-3">
          <h6 class="fw-bold mb-1">Nụ Hôn Bạc Tỷ: Thúy Kiều – Thúy Vân Phiên Bản 2025?</h6>
          <div class="mb-2">
            <button class="btn btn-sm btn-primary me-2">Thích</button>
            <span class="badge bg-light text-dark">104</span>
          </div>
          <p class="small text-muted">Dự án điện ảnh Tết 2025 do diễn viên Thu Trang làm sản xuất...</p>
        </div>
      </div>
      <!--phan trang-->
      <nav aria-label="Page navigation example" style="margin-left: 30%;">
    <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
    </nav>
      <!-- Thêm các bài khác tương tự... -->

    </div>

    <!-- Bên phải: Mua vé & Phim đang chiếu -->
    <div class="col-lg-4">
      <!-- Mua vé nhanh -->
      <div class="card mb-4">
        <div class="card-header bg-primary text-white fw-bold text-center">Mua Vé Nhanh</div>
        <div class="card-body">
          <select class="form-select mb-3">
            <option selected>Chọn phim</option>
          </select>
          <select class="form-select mb-3">
            <option selected>Chọn rạp</option>
          </select>
          <select class="form-select">
            <option selected>Chọn ngày</option>
          </select>
        </div>
      </div>

      <!-- Phim đang chiếu -->
      <h5 class="border-start border-4 border-primary ps-2 fw-bold mb-3">PHIM ĐANG CHIẾU</h5>

      <div class="card mb-3">
        <img src="/src/assets/images/diadao.png" class="card-img-top" alt="Địa Đạo">
        <div class="card-body">
          <h6 class="card-title fw-bold mb-1">Địa Đạo: Mặt Trời Trong Bóng Tối</h6>
          <div class="d-flex align-items-center justify-content-between">
            <span class="badge bg-warning text-dark">★ 8.7</span>
            <span class="badge bg-orange text-white">T16</span>
          </div>
        </div>
      </div>

      <!-- Có thể thêm nhiều phim -->
    </div>
  </div>
</div>

</template>