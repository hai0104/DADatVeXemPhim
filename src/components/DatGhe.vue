<template>
  <div class="container py-4">
    <!-- Bước chọn -->
    <div class="bg-white p-3 rounded shadow mb-4">
      <!-- Thanh tiến trình -->
      <div class="d-flex justify-content-center align-items-center mb-3">
        <div class="progress w-50" style="height: 6px">
          <div class="progress-bar bg-primary" style="width: 38%"></div>
        </div>
      </div>

      <!-- Các bước -->
      <div class="d-flex justify-content-center gap-4 fs-5 fw-semibold">
        <span>Phim</span>
        <span class="text-primary">Ghế</span>
        <span>Thức ăn</span>
        <span>Thanh toán</span>
      </div>
    </div>

    <div class="row">
      <!-- Các lựa chọn -->
      <div class="col-md-8">
        <!-- chon ghe ngoi -->
        <div class="bg-white p-3 rounded shadow mb-4">
          <h5 class="fw-semibold mb-3">Chọn ghế ngồi:</h5>
          <div class="container my-4">
            <h5><strong>Danh sách ghế:</strong></h5>

            <div class="">
              <!-- Màn hình -->
              <div class="screen">Màn hình</div>

              <!-- Ghế -->
              <div class="d-flex justify-content-center">
                <table>
                  <tbody>
                    <!-- Hàng ghế -->
                    <!-- Mỗi hàng là 1 <tr> -->
                    <tr>
                      <td class="pe-2">A</td>
                      <td><button class="seat seat-available" @click="setGhe(A1)">1</button></td>
                      <td><button class="seat seat-available">2</button></td>
                      <td><button class="seat seat-available">3</button></td>
                      <td><button class="seat seat-available">4</button></td>
                      <td><button class="seat seat-available">5</button></td>
                      <td><button class="seat seat-available">6</button></td>
                      <td class="ps-2">A</td>
                    </tr>
                    <tr>
                      <td class="pe-2">B</td>
                      <td><button class="seat seat-available">1</button></td>
                      <td><button class="seat seat-available">2</button></td>
                      <td><button class="seat seat-available">3</button></td>
                      <td><button class="seat seat-available">4</button></td>
                      <td><button class="seat seat-available">5</button></td>
                      <td><button class="seat seat-available">6</button></td>
                      <td class="ps-2">B</td>
                    </tr>
                    <!-- Thêm các hàng ghế C, D, E... tương tự -->
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <!-- Ghi chú trạng thái ghe -->
        <div class="bg-white p-3 rounded shadow mb-4">
          <div class="d-flex gap-4">
            <div> Ghế đã bán</div> <button class="seat seat-available btn btn-secondary" disabled></button>
            <div>Ghế đang chọn</div> <button class="seat seat-selected" disabled></button>
          </div>
        </div>
      </div>

      <!-- Thông tin chọn (bên phải) -->
      <div class="col-md-4">
        <div class="bg-white p-3 rounded shadow mb-4">
          <FormChiTietVe></FormChiTietVe>
          <p><strong>Ghế:</strong> {{ ghe }} </p>
          <div class="d-flex justify-content-between mt-3">
            <RouterLink to="/mua-ve">
              <button class="btn btn-outline-secondary">← Quay lại</button>
            </RouterLink>
            <RouterLink to="/dat-thuc-an">
              <button class="btn btn-primary">Tiếp tục →</button>
            </RouterLink>
          </div>
        </div>
      </div>
      

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import FormChiTietVe from './FormChiTietVe.vue';

// Script nếu cần xử lý logic sau
let ghe = ref("")

let setGhe = (g) => {
  ghe.value = g.value
}
</script>

<style scoped>
/* Nếu muốn style thêm */
.seat {
  width: 30px;
  height: 30px;
  font-size: 0.75rem;
  margin: 2px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}

.seat-available {
  background-color: white;
  border: 1px solid #ccc;
}

.seat-selected {
  background-color: #f97316; /* Màu cam */
  color: white;
}

.seat-sold {
  background-color: #d1d5db; /* Xám */
  color: #666;
  cursor: not-allowed;
}

.screen {
  height: 20px;
  background-color: #ccc;
  border-radius: 20px;
  margin-bottom: 15px;
  text-align: center;
  font-size: 0.8rem;
}
</style>
