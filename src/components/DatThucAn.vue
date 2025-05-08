<script setup lang="ts">
import FormChiTietVe from './FormChiTietVe.vue';

</script>

<template>
  <div class="container py-4">
    <!-- Bước chọn -->
    <div class="bg-white p-3 rounded shadow mb-4">
      <!-- Thanh tiến trình -->
      <div class="d-flex justify-content-center align-items-center mb-3">
        <div class="progress w-50" style="height: 6px">
          <div class="progress-bar bg-primary" style="width: 50%"></div>
        </div>
      </div>

      <!-- Các bước -->
      <div class="d-flex justify-content-center gap-4 fs-5 fw-semibold">
        <span>Phim</span>
        <span >Ghế</span>
        <span class="text-primary">Thức ăn</span>
        <span>Thanh toán</span>
      </div>
    </div>

    <div class="row">
      <!-- Các lựa chọn -->
      <div class="col-md-8">
        <!-- chon ghe ngoi -->
        <div class="bg-white p-3 rounded shadow mb-4">
          <h5 class="fw-semibold mb-3">Combo thức ăn:</h5>
          <div class="container my-4">
            
            <div class="container my-4">
  <h5 class="fw-semibold mb-4">Chọn Combo</h5>

  <div class="row gy-4">
    <!-- Combo Item -->
    <div class="col-12 d-flex align-items-start">
      <img src="https://lavenderstudio.com.vn/wp-content/uploads/2017/03/chup-san-pham.jpg" class="me-3 rounded" width="100" alt="Combo">
      <div class="flex-grow-1">
        <h6 class="mb-1 fw-bold">Combo 2 Big</h6>
        <p class="mb-1 small text-muted">“Nhân đôi sự sảng khoái! Combo 2 gồm 1 bắp rang bơ lớn, 2 Pepsi cỡ lớn – tiết kiệm hơn 28,000!”</p>
        <p class="fw-bold text-danger">Giá: 109.000 ₫</p>
      </div>
      <div class="d-flex align-items-center ms-auto">
        <button class="btn btn-outline-secondary btn-sm px-2">−</button>
        <span class="mx-2">0</span>
        <button class="btn btn-outline-secondary btn-sm px-2">+</button>
      </div>
    </div>

    <!-- Copy thêm các item combo khác bên dưới -->
    <div class="col-12 d-flex align-items-start">
      <img src="https://lavenderstudio.com.vn/wp-content/uploads/2017/03/chup-san-pham.jpg" class="me-3 rounded" width="100" alt="Combo">
      <div class="flex-grow-1">
        <h6 class="mb-1 fw-bold">Combo Friends 1 Big</h6>
        <p class="mb-1 small text-muted">“Chia sẻ niềm vui với bạn bè! 1 bắp rang bơ, 3 Pepsi và 1 món snack – tiết kiệm hơn 52,000!”</p>
        <p class="fw-bold text-danger">Giá: 149.000 ₫</p>
      </div>
      <div class="d-flex align-items-center ms-auto">
        <button class="btn btn-outline-secondary btn-sm px-2">−</button>
        <span class="mx-2">0</span>
        <button class="btn btn-outline-secondary btn-sm px-2">+</button>
      </div>
    </div>

    <!-- Thêm các combo khác tương tự... -->
  </div>
</div>

            
          </div>
        </div>
      </div>

      <!-- Thông tin chọn (bên phải) -->
      <div class="col-md-4">
        <div class="bg-white p-3 rounded shadow mb-4">
          <FormChiTietVe></FormChiTietVe>
          <p><strong>Ghế:</strong></p>
          <div class="d-flex justify-content-between mt-3">
            <RouterLink to="/dat-ghe">
              <button class="btn btn-outline-secondary">← Quay lại</button>
            </RouterLink>

            <RouterLink to="/thanh-toan">
              <button class="btn btn-primary">Tiếp tục →</button>
            </RouterLink>
            
          </div>
        </div>
      </div>
      

    </div>
  </div>
</template>
