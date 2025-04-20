<template>
    
<!-- Banner -->
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

<!-- Thông tin rạp -->
<div class="container mt-4">
  <h3>Galaxy Nguyễn Du</h3>
  <p>Địa chỉ: 116 Nguyễn Du, Quận 1, Tp.HCM</p>
  <p>Hotline: 1900 2224</p>
</div>

<!-- Phim đang chiếu -->
<div class="container mt-5">
  <h4>PHIM</h4>
  <ul class="nav nav-tabs">
    <li class="nav-item"><a class="nav-link active" href="#">Hôm nay</a></li>
    <li class="nav-item"><a class="nav-link" href="#">21/04</a></li>
    <li class="nav-item"><a class="nav-link" href="#">22/04</a></li>
  </ul>

  <div class="row mt-3">
    <div class="col-md-2 movie-card">
      <img src="/src/assets/images/dia-dao-2.jpg" class="img-fluid" alt="Phim 1">
      <p>Địa Đàng Mái Trẻ Trung<br><strong>8.6</strong></p>
    </div>
    <div class="col-md-2 movie-card">
      <img src="/src/assets/images/dia-dao-2.jpg" class="img-fluid" alt="Phim 2">
      <p>Cưới Bản Mãi Anh Rồng<br><strong>9.7</strong></p>
    </div>
    <div class="col-md-2 movie-card">
      <img src="/src/assets/images/dia-dao-2.jpg" class="img-fluid" alt="Phim 3">
      <p>Tìm Mẹ Mà Không Đau<br><strong>7.5</strong></p>
    </div>
    <!-- Thêm phim khác tùy ý -->
  </div>
</div>

<!-- Giá vé -->
<div class="container mt-5">
  <h4>GIÁ VÉ</h4>
  <div class="table-responsive ticket-price-table">
    <table class="table table-bordered text-center align-middle">
      <thead class="table-dark">
        <tr>
          <th>Thứ / Giờ</th>
          <th>Trước 17h</th>
          <th>Sau 17h</th>
          <th>Thành viên</th>
          <th>HSSV</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Thứ 2 – 4</td>
          <td>70.000</td>
          <td>80.000</td>
          <td>55.000</td>
          <td>55.000</td>
        </tr>
        <tr>
          <td>Thứ 5 - Happy Day</td>
          <td colspan="4">55.000</td>
        </tr>
        <tr>
          <td>Thứ 6 – CN & Lễ</td>
          <td>95.000</td>
          <td>105.000</td>
          <td>65.000</td>
          <td>65.000</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<!-- Bản đồ & mô tả -->
<div class="container mt-5">
  <h4>THÔNG TIN CHI TIẾT</h4>
  <div class="row">
    <div class="col-md-6">
      <p>Địa chỉ: 116 Nguyễn Du, Quận 1, Tp.HCM</p>
      <p>Số điện thoại: 1900 2224</p>
      <p>Galaxy Nguyễn Du là một trong những rạp hiện đại, nằm tại trung tâm thành phố, thuận tiện cho việc di chuyển và giải trí...</p>
    </div>
    <div class="col-md-6">
      <iframe src="https://www.google.com/maps?q=116+Nguyễn+Du,+Quận+1,+HCM&output=embed" width="100%" height="250" style="border:0;" allowfullscreen=""></iframe>
    </div>
  </div>
</div>

</template>
<script setup>

</script>