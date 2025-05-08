<template>
  <b-navbar type="light" variant="light" class="shadow-sm border-bottom py-2">
    <b-container
      fluid
      class="d-flex align-items-center justify-content-between"
    >
      <!-- Logo -->
      <router-link to="/">
        <img
          src="https://www.galaxycine.vn/_next/static/media/galaxy-logo-mobile.074abeac.png"
          alt="Galaxy Cinema"
          height="50"
        />
      </router-link>

      <!-- Menu -->
      <b-navbar-nav class="d-flex align-items-center gap-3" >
        <b-button variant="warning" class="text-white">
          <b-icon icon="star-fill" class="me-1"></b-icon> <router-link to="/mua-ve" class="text-white text-decoration-none">Mua Vé</router-link>
        </b-button>

        <div class="dropdown">
          <router-link to="/phim" class=" text-dark text-decoration-none">Phim</router-link>
        </div>
        <!-- <b-nav-item-dropdown text="Góc Điện Ảnh" right /> -->
        <div
          class="position-relative"
          @mouseenter="showCinema = true"
          @mouseleave="showCinema = false"
        >
          <router-link class="text-dark text-decoration-none">Góc Điện Ảnh</router-link>
          <ul
            class="dropdown-menu show"
            v-if="showCinema"
            style="display: block; position: absolute"
          >
            <li><router-link class="dropdown-item" to="/dao-dien">Đạo Diễn</router-link></li>
            <li><router-link class="dropdown-item" to="/dien-vien">Diễn Viên</router-link></li>
            <li><router-link class="dropdown-item" to="/the-loai-phim">Thể Loại Phim </router-link></li>
            <li><router-link class="dropdown-item" to="/binh-luan">Bình Luận</router-link></li>
            <li><router-link class="dropdown-item" to="/blog-dien-anh">Blog Điện Ảnh</router-link></li>
          </ul>
        </div>

        <!-- <b-nav-item-dropdown text="Sự Kiện" right /> -->

        <div
          class="position-relative"
          @mouseenter="showSuKien = true"
          @mouseleave="showSuKien = false"
        >
          <router-link class="text-dark text-decoration-none">Sự Kiện</router-link>
          <ul
            class="dropdown-menu show"
            v-if="showSuKien"
            style="display: block; position: absolute"
          >
          <li><router-link class="dropdown-item" to="/uu-dai">Ưu Đãi</router-link></li>
          <li><router-link class="dropdown-item" to="/phim-hay-thang">Phim Hay Tháng</router-link></li>
          </ul>
        </div>
        <div class="dropdown">
          <router-link to="/rap" class="text-dark text-decoration-none">Rạp/Giá Vé</router-link>
        </div>
      </b-navbar-nav>

      <!-- Search + Đăng nhập + G STAR -->
      <div class="d-flex align-items-center gap-3">
        <b-icon icon="search" font-scale="1.2"></b-icon>
        <router-link
          to="/login"
          class="text-decoration-none text-dark"
          v-if="account == null"
          >Đăng Nhập</router-link
        >
        <router-link
          to="/tai-khoan"
          class="text-decoration-none text-dark"
          v-else
          >Tài khoản</router-link
        >
        <!-- <a href="/tai-khoan" class="text-decoration-none text-dark" v-else>Tài khoản</a> -->
        <div class="d-flex align-items-center">
          <b-icon icon="gift" variant="warning" class="me-1"></b-icon>
          <div class="d-flex flex-column">
            <small class="text-secondary">THAM GIA</small>
            <strong class="text-primary">G STAR</strong>
            <button @click="doiTrangThai">Thay doi</button>
          </div>
        </div>
      </div>
    </b-container>
  </b-navbar>
</template>

<script setup>
import { ref } from "vue";

// Không cần gì ở đây
let account = ref({
  fullName: "Vũ Minh Công",
  email: "vuminhcong.it@gmail.com",
  phone: "036666359",
  username: "congvm",
  birthDate: "10/10/2003",
  password: "Cong@1010",
});

let trangThai = ref("Đăng Nhập");

const doiTrangThai = () => {
  if (account.value != null) {
    account.value = null;
  } else if (account.value == null) {
    account.value = {
      fullName: "Vũ Minh Công",
      email: "vuminhcong.it@gmail.com",
      phone: "036666359",
      username: "congvm",
      birthDate: "10/10/2003",
      password: "Cong@1010",
    };
  }
};


const showCinema = ref(false)
const showSuKien = ref(false)
</script>

<style scoped>
a {
  font-weight: 500;
}
a:hover {
  color: #ff7a00;
}
.dropdown-toggle {
  cursor: pointer;
}

.dropdown-menu {
  top: 100%;
  left: 0;
  z-index: 1000;
}
</style>
