<template>
  <div class="container py-4">
    <!-- Bước chọn -->
    <div class="bg-white p-3 rounded shadow mb-4">
      <!-- Thanh tiến trình -->
      <div class="d-flex justify-content-center align-items-center mb-3">
        <div class="progress w-50" style="height: 6px">
          <div class="progress-bar bg-primary" style="width: 68%"></div>
        </div>
      </div>

      <!-- Các bước -->
      <div class="d-flex justify-content-center gap-4 fs-5 fw-semibold">
        <span>Phim</span>
        <span >Ghế</span>
        <span>Thức ăn</span>
        <span class="text-primary">Thanh toán</span>
      </div>
    </div>

    <div class="row">
    
      <div class="col-md-8">
        <!-- chon khuyến mại  -->
        <div class="bg-white p-3 rounded shadow mb-4">
          <div class="">
            <!-- card p-4 mb-4 -->
        <h5 class="fw-semibold mb-3">Khuyến mãi</h5>
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Mã khuyến mãi">
          <button class="btn btn-warning text-white fw-semibold" type="button">Áp Dụng</button>
        </div>
        <p class="text-muted small">Lưu ý: Có thể áp dụng nhiều vouchers vào 1 lần thanh toán</p>
        <div>
          <a class="text-decoration-none" href="#">Khuyến mãi của bạn ▾</a><br>
        </div>
      </div>


        </div>

        <!-- chọn phương thức thanh toán  -->
        <div class="bg-white p-3 rounded shadow mb-4">
          <div class="">
            <!-- card p-4 -->
        <h5 class="fw-semibold mb-3">Phương thức thanh toán</h5>
        <form>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="payment" id="onepay" checked>
            <label class="form-check-label" for="onepay">
              <strong>OnePay</strong> – Visa, Master, JCB,... / ATM / QR Ngân hàng / Apple Pay
            </label>
          </div>

          <div class="form-check mt-3">
            <input class="form-check-input" type="radio" name="payment" id="shopeepay">
            <label class="form-check-label" for="shopeepay">
              <img src="" alt="ShopeePay" height="20" class="me-2">
              Ví ShopeePay – Giảm 5K mỗi đơn khi thanh toán
            </label>
          </div>

          <div class="form-check mt-3">
            <input class="form-check-input" type="radio" name="payment" id="momo">
            <label class="form-check-label" for="momo">
              <img src="" alt="MoMo" height="20" class="me-2">
              Ví Điện Tử MoMo
            </label>
          </div>

          <div class="form-check mt-3">
            <input class="form-check-input" type="radio" name="payment" id="zalopay">
            <label class="form-check-label" for="zalopay">
              <img src="" alt="ZaloPay" height="20" class="me-2">
              Zalopay – Nhập mã GIAMSAU giảm 50% tối đa 40k
            </label>
          </div>

          <div class="form-check mt-3">
            <input class="form-check-input" type="radio" name="payment" id="payoo">
            <label class="form-check-label" for="payoo">
              <img src="" alt="Payoo" height="20" class="me-2">
              HSBC/Payoo – ATM / VISA / MASTER / QR CODE
            </label>
          </div>

          <div class="form-check mt-3">
            <input class="form-check-input" type="radio" name="payment" id="vnpay">
            <label class="form-check-label" for="vnpay">
              <img src="" alt="VNPAY" height="20" class="me-2">
              VNPAY
            </label>
          </div>
        </form>
      </div>


        </div>
      </div>

      <!-- Thông tin chọn (bên phải) -->
      <div class="col-md-4">
        <div class="bg-white p-3 rounded shadow mb-4">
          <FormChiTietVe></FormChiTietVe>
          <p><strong>Ghế:</strong> </p>
          <div class="d-flex justify-content-between fw-bold fs-5">
          <span>Tổng cộng</span>
          <span class="text-danger">55.000 đ</span>
        </div>
          <div class="d-flex justify-content-between mt-3">
            <RouterLink to="/dat-thuc-an">
              <button class="btn btn-outline-secondary">← Quay lại</button>
            </RouterLink>
            <RouterLink to="">
              <button class="btn btn-primary">Thanh toán</button>
            </RouterLink>
          </div>
        </div>
      </div>
      

    </div>
  </div>
</template>

<script setup>

import FormChiTietVe from './FormChiTietVe.vue';

// Script nếu cần xử lý logic sau



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




















<!-- <template>
    <div class="container my-5">
  <div class="row g-4">
    Khuyến mãi & Thanh toán
    <div class="col-lg-8">
      <div class="card p-4 mb-4">
        <h5>Khuyến mãi</h5>
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Mã khuyến mãi">
          <button class="btn btn-warning text-white fw-semibold" type="button">Áp Dụng</button>
        </div>
        <p class="text-muted small">Lưu ý: Có thể áp dụng nhiều vouchers vào 1 lần thanh toán</p>
        <div>
          <a class="text-decoration-none" href="#">Khuyến mãi của bạn ▾</a><br>
        </div>
      </div>

      <div class="card p-4">
        <h5>Phương thức thanh toán</h5>
        <form>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="payment" id="onepay" checked>
            <label class="form-check-label" for="onepay">
              <strong>OnePay</strong> – Visa, Master, JCB,... / ATM / QR Ngân hàng / Apple Pay
            </label>
          </div>

          <div class="form-check mt-3">
            <input class="form-check-input" type="radio" name="payment" id="shopeepay">
            <label class="form-check-label" for="shopeepay">
              <img src="" alt="ShopeePay" height="20" class="me-2">
              Ví ShopeePay – Giảm 5K mỗi đơn khi thanh toán
            </label>
          </div>

          <div class="form-check mt-3">
            <input class="form-check-input" type="radio" name="payment" id="momo">
            <label class="form-check-label" for="momo">
              <img src="" alt="MoMo" height="20" class="me-2">
              Ví Điện Tử MoMo
            </label>
          </div>

          <div class="form-check mt-3">
            <input class="form-check-input" type="radio" name="payment" id="zalopay">
            <label class="form-check-label" for="zalopay">
              <img src="" alt="ZaloPay" height="20" class="me-2">
              Zalopay – Nhập mã GIAMSAU giảm 50% tối đa 40k
            </label>
          </div>

          <div class="form-check mt-3">
            <input class="form-check-input" type="radio" name="payment" id="payoo">
            <label class="form-check-label" for="payoo">
              <img src="" alt="Payoo" height="20" class="me-2">
              HSBC/Payoo – ATM / VISA / MASTER / QR CODE
            </label>
          </div>

          <div class="form-check mt-3">
            <input class="form-check-input" type="radio" name="payment" id="vnpay">
            <label class="form-check-label" for="vnpay">
              <img src="" alt="VNPAY" height="20" class="me-2">
              VNPAY
            </label>
          </div>
        </form>
      </div>
    </div>

    Thông tin vé
    <div class="col-lg-4">
      <div class="card p-3">
        <div class="text-end text-warning fw-bold">Thời gian giữ ghế: 06:45</div>
        <div class="d-flex gap-3 mt-2">
          <img src="" alt="Poster" class="img-fluid rounded" style="width: 80px;">
          <div>
            <h6 class="mb-1 fw-bold">Cười Ma Giải Hạn</h6>
            <span class="badge bg-warning text-dark">T18</span>
            <p class="mb-0 small">2D Lồng Tiếng</p>
          </div>
        </div>

        <hr>
        <p class="mb-1"><strong>Galaxy Nguyễn Du</strong> - RAP 3</p>
        <p class="mb-1">Suất: <strong>19:00</strong> - Thứ Ba, 15/04/2025</p>
        <hr>

        <div class="d-flex justify-content-between">
          <span>1x Người Lớn - Member (Ghế I4)</span>
          <span>55.000 đ</span>
        </div>
        <div class="d-flex justify-content-between">
          <span>1x Gói Galaxy Play Premium 1 tháng</span>
          <span>0 đ</span>
        </div>
        <hr>

        <div class="d-flex justify-content-between fw-bold fs-5">
          <span>Tổng cộng</span>
          <span class="text-danger">55.000 đ</span>
        </div>

        <div class="d-flex justify-content-between mt-4">
          <a href="#" class="btn btn-link text-decoration-none">Quay lại</a>
          <button class="btn btn-warning text-white fw-semibold">Thanh Toán</button>
        </div>
      </div>
    </div>
  </div>
</div>
</template> -->