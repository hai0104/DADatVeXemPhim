<template>
    <b-navbar type="light" variant="light" class="shadow-sm border-bottom py-2">
      <b-container fluid class="d-flex align-items-center justify-content-between">
  
        <!-- Logo -->
        <b-navbar-brand href="#">
          <img src="https://www.galaxycine.vn/_next/static/media/galaxy-logo-mobile.074abeac.png" alt="Galaxy Cinema" height="50">
        </b-navbar-brand>
  
        <!-- Menu -->
        <b-navbar-nav class="d-flex align-items-center gap-3">
          <b-button variant="warning" class="text-white">
            <b-icon icon="star-fill" class="me-1"></b-icon> Mua Vé
          </b-button>
  
          <b-nav-item-dropdown text="Phim" right />
          <b-nav-item-dropdown text="Góc Điện Ảnh" right />
          <b-nav-item-dropdown text="Sự Kiện" right />
          <b-nav-item-dropdown text="Rạp/Giá Vé" right />
        </b-navbar-nav>
  
        <!-- Search + Đăng nhập + G STAR -->
        <div class="d-flex align-items-center gap-3">
          <b-icon icon="search" font-scale="1.2"></b-icon>
          <a href="#" class="text-decoration-none text-dark">Đăng Nhập</a>
          <div class="d-flex align-items-center">
            <b-icon icon="gift" variant="warning" class="me-1"></b-icon>
            <div class="d-flex flex-column">
              <small class="text-secondary">THAM GIA</small>
              <strong class="text-primary">G STAR</strong>
            </div>
          </div>
        </div>
  
      </b-container>
    </b-navbar>
  </template>
  
  <script setup>
  // Không cần gì ở đây
  </script>
  
  <style scoped>
  a {
    font-weight: 500;
  }
  a:hover {
    color: #ff7a00;
  }
  </style>
  