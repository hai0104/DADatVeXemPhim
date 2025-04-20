<script setup>

</script>

<template>   
<div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="/src/assets/images/drop.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="/src/assets/images/shopee.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="/src/assets/images/tim-xac.jpg" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<!-- Banner -->
<div class="container my-4">
  <div class="row">
    <div class="col-12">
     <p class="fs-3 fw-bold">Phim nổi bật</p>
    </div>
  </div>
</div>

<!-- Bộ lọc -->
<div class="container mb-4">
  <div class="row g-2">
    <div class="col-md-3">
      <select class="form-select">
        <option selected>Chọn Phim</option>
        <option>Phim A</option>
        <option>Phim B</option>
      </select>
    </div>
    <div class="col-md-3">
      <select class="form-select">
        <option selected>Chọn Rạp</option>
      </select>
    </div>
    <div class="col-md-3">
      <input type="date" class="form-control">
    </div>
    <div class="col-md-2">
      <select class="form-select">
        <option selected>Chọn Suất</option>
      </select>
    </div>
    <div class="col-md-1">
      <button class="btn btn-primary w-100">Mua</button>
    </div>
  </div>
</div>
<div class="visible"></div>
<!-- Danh sách phim -->
<div class="container">
  <h4 class="fw-bold mb-4">PHIM ĐANG CHIẾU</h4>
  <div class="row row-cols-1 row-cols-md-4 g-4">
    <!--phim 1-->
    <div class="col">
      <div class="">
        <img src="/src/assets/images/dia-dao-2.jpg" class="card-img-top rounded-3 mb-3"  alt="...">
        <div class="card-body">
          <h5 class="card-title">Địa Đạo</h5>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="">
        <img src="/src/assets/images/dia-dao-2.jpg" class="card-img-top rounded-3 mb-3"  alt="...">
        <div class="card-body">
          <h5 class="card-title">Địa Đạo</h5>
        </div>
      </div>
    </div>
    <!-- Thêm phim khác tương tự -->
  </div>
</div>
    <button type="button" class="btn btn-outline-warning" style="margin-left: 47%;margin-top: 2%;">Xem Thêm ></button>
<!--khuyen mai-->
    <div class="container my-5">
  <h4 class="fw-bold mb-4">TIN KHUYẾN MÃI</h4>
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
    <!-- Promo 1 -->
    <div class="col">
      <div class="card h-100 text-center">
        <img src="" class="card-img-top" alt="Xem Phim Bạch Tuyết">
        <div class="card-body">
          <p class="card-text fw-semibold">Xem Phim Bạch Tuyết – Săn Liền Quà Khủng</p>
        </div>
      </div>
    </div>
    <!-- Promo 2 -->
    <div class="col">
      <div class="card h-100 text-center">
        <img src="" class="card-img-top" alt="Voucher ShopeePay">
        <div class="card-body">
          <p class="card-text fw-semibold">Voucher ShopeePay Giảm 5K Dành Tặng Các Stars!</p>
        </div>
      </div>
    </div>
    <!-- Promo 3 -->
    <div class="col">
      <div class="card h-100 text-center">
        <img src="" class="card-img-top" alt="Happy Day">
        <div class="card-body">
          <p class="card-text fw-semibold">Happy Day – Vé Chỉ Từ 45K</p>
        </div>
      </div>
    </div>
    <!-- Promo 4 -->
    <div class="col">
      <div class="card h-100 text-center">
        <img src="" class="card-img-top" alt="Ưu Đãi Thành Viên">
        <div class="card-body">
          <p class="card-text fw-semibold">Ưu Đãi Thành Viên Galaxy Cinema 2025</p>
        </div>
      </div>
    </div>
  </div>
</div>
<button type="button" class="btn btn-outline-warning" style="margin-left: 47%;">Xem Thêm ></button>
<!--gioi thieu-->
<div class="container my-5">
<h4 class="fw-bold mb-4">TRANG CHỦ</h4>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, dolores corrupti. Architecto voluptates atque velit quia corporis iste molestias harum quasi facere, nisi blanditiis praesentium libero voluptatum autem perspiciatis voluptatem?</p>
</div>
</template>