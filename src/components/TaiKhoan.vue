<script setup>
import { ref } from 'vue'

const activeTab = ref('info')

const user = ref({
  fullName: 'Vũ Minh Công',
  email: 'vuminhcong.it@gmail.com',
  phone: '036666359',
  username: 'congvm',
  birthDate: '10/10/2003',
  password: 'Cong@1010'
})

function updateInfo() {
  alert('Thông tin đã được cập nhật!')
  // Thêm xử lý API hoặc lưu dữ liệu tại đây
}
</script>


<template>
    <div class="container py-4">
      <div class="row">
        <!-- Sidebar -->
        <div class="col-md-3 mb-4 ">
          <div class="card text-center">
            <div class="card-body">
              <div class="rounded-circle bg-light mx-auto mb-3 avatar"></div>
              <h5 class="card-title">{{ user.fullName }}</h5>
            </div>
            <div class="card-footer">
              <h6 class="mb-2">Thông tin hỗ trợ</h6>
              <p class="mb-1"><strong>Hotline:</strong> 1900 123 456</p>
              <p><strong>Email:</strong> support@example.com</p>
            </div>
          </div>
        </div>
  
        <!-- Main Content -->
        <div class="col-md-9 bg-white p-3 rounded shadow mb-4">
          <ul class="nav nav-tabs mb-3">
            <li class="nav-item">
              <button class="nav-link" :class="{ active: activeTab === 'info' }" @click="activeTab = 'info'">Thông tin cá nhân</button>
            </li>
            <li class="nav-item">
              <button class="nav-link" :class="{ active: activeTab === 'history' }" @click="activeTab = 'history'">Lịch sử giao dịch</button>
            </li>
            <li class="nav-item">
              <button class="nav-link" :class="{ active: activeTab === 'promo' }" @click="activeTab = 'promo'">Ưu đãi</button>
            </li>
          </ul>
  
          <!-- Tab: Thông tin cá nhân -->
          <div v-if="activeTab === 'info'" class="bg-white p-4 rounded shadow-sm">
            <div class="row mb-3">
              <div class="col-md-6">
                <label class="form-label">Họ tên</label>
                <input type="text" class="form-control" v-model="user.fullName">
              </div>
              <div class="col-md-6">
                <label class="form-label">Email</label>
                <input type="email" class="form-control" v-model="user.email">
              </div>
            </div>
            <div class="row mb-3">
              <div class="col-md-6">
                <label class="form-label">Số điện thoại</label>
                <input type="text" class="form-control" v-model="user.phone">
              </div>
              <div class="col-md-6">
                <label class="form-label">Ngày sinh</label>
                <input type="date" class="form-control" v-model="user.birthDate">
              </div>
            </div>
            <div class="row mb-3">
              <div class="col-md-6">
                <label class="form-label">Username</label>
                <input type="text" class="form-control" v-model="user.username">
              </div>
              <div class="col-md-6">
                <label class="form-label">Password</label>
                <input type="password" class="form-control" v-model="user.password">
              </div>
            </div>
            <button class="btn btn-primary mt-2" @click="updateInfo">Thay đổi thông tin</button>
          </div>
  
          <!-- Các tab khác -->
          <div v-if="activeTab === 'history'" class="text-muted text-center p-5 bg-light rounded">Lịch sử giao dịch sẽ hiển thị ở đây.</div>
          <div v-if="activeTab === 'promo'" class="text-muted text-center p-5 bg-light rounded">Ưu đãi của bạn sẽ hiển thị ở đây.</div>
        </div>
      </div>
    </div>
  </template>

<style scoped>
.avatar {
  width: 70px;
  height: 70px;
}
.nav-link.active {
  border-bottom: 2px solid blue !important;
}
</style>