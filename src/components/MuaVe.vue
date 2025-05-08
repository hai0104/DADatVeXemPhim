<template>
  <div class="container py-4">
    <!-- Bước chọn -->
    <div class="bg-white p-3 rounded shadow mb-4">
      <!-- Thanh tiến trình -->
      <div class="d-flex justify-content-center align-items-center mb-3">
        <div class="progress w-50" style="height: 6px">
          <div class="progress-bar bg-primary" style="width: 27%"></div>
        </div>
      </div>

      <!-- Các bước -->
      <div class="d-flex justify-content-center gap-4 fs-5 fw-semibold">
        <span class="text-primary">Phim</span>
        <span>Ghế</span>
        <span>Thức ăn</span>
        <span>Thanh toán</span>
      </div>
    </div>

    <div class="row">
      <!-- Các lựa chọn -->
      <div class="col-md-8">
        <!-- Vị trí -->
        <div class="bg-white p-3 rounded shadow mb-4">
          <h5 class="fw-semibold mb-3">Chọn vị trí:</h5>
          <div class="d-flex flex-wrap gap-2">
            <button
              v-for="(viTri, index) in viTriList"
              :key="index"
              @click="tong(viTri)"
              :class="[
                'btn',
                'rounded-pill',
                viTriDaChon === viTri
                  ? 'btn-primary text-white'
                  : 'btn-outline-secondary',
              ]"
            >
              {{ viTri }}
            </button>
          </div>
        </div>

        <!-- Danh sách phim -->
        <div class="bg-white p-3 rounded shadow mb-4">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <h5 class="fw-semibold">Danh sách phim:</h5>
            <input
              type="text"
              placeholder="Tìm kiếm"
              class="form-control w-25"
            />
          </div>
          <div class="d-flex overflow-auto gap-3">
            <div style="min-width: 160px">
              <div
                class="bg-secondary rounded mb-2"
                style="height: 180px"
              ></div>
              <p class="fw-semibold small">Cuội Ma Giải Hạn</p>
            </div>
            <div style="min-width: 160px">
              <div
                class="bg-secondary rounded mb-2"
                style="height: 180px"
              ></div>
              <p class="fw-semibold small">Pororo: Thám hiểm</p>
            </div>
          </div>
        </div>

        <!-- Thời gian -->
        <div class="bg-white p-3 rounded shadow mb-4">
          <h5 class="fw-semibold mb-3">Chọn suất:</h5>
          <div class="d-flex gap-3 mb-3">
            <div class="bg-light text-center rounded p-2">
              <p class="mb-0 fw-semibold">Thứ 6</p>
              <small>11/04</small>
            </div>
            <!-- Các ngày khác -->
          </div>
          <div class="d-flex flex-wrap gap-2 mb-3">
            <button class="btn btn-outline-secondary">11:15</button>
            <!-- Các giờ khác -->
          </div>
          <p class="small">Địa chỉ: <strong>Galaxy GO! Mall Bà Rịa</strong></p>
        </div>
      </div>

      <!-- Thông tin chọn (bên phải) -->
      <div class="col-md-4">
        <div class="bg-white p-3 rounded shadow mb-4">
          <FormChiTietVe ></FormChiTietVe>
          <div class="d-flex justify-content-between mt-3">
            <button class="btn btn-outline-secondary">← Quay lại</button>
            <router-link to="/dat-ghe">
              <button class="btn btn-primary">Tiếp tục →</button>
            </router-link>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script setup>
// Script nếu cần xử lý logic sau
import { inject, ref, provide } from "vue";
import FormChiTietVe from "./FormChiTietVe.vue";


const viTriList = ["TP Hồ Chí Minh", "Hà Nội", "Đà Nẵng", "An Giang"];
const viTriDaChon = ref(""); // lưu vị trí đã chọn

//provide and inject
let chiTietVe = ref({
  tenPhim: "",
  moTa: "",
  thoiGian:"",
  diaChi: ""
})
provide("chiTietVe",chiTietVe)

const chonViTri = (tenViTri) => {
  viTriDaChon.value = tenViTri;
};
const setDiaChi = (vt) =>{
  chiTietVe.value.diaChi = vt
}
const tong = (vt) => {
  chonViTri(vt)
  setDiaChi(vt)
}


//Prop
let chiTietVe1 = ref({
  tenPhim: "hahahh",
  moTa:"",
  thoiGian: "",
  diaChi: ""
})

</script>

<style scoped>
/* Nếu muốn style thêm */
</style>
