<script setup>
import { inject } from 'vue';

let form = inject("chiTietVe")

</script>

<template>
  <!-- Thông tin chọn (bên phải) -->
  <div class="bg-secondary rounded mb-3" style="height: 200px"></div>
          <p><strong>Tên phim:</strong> {{ form.tenPhim }}</p>
          <p><strong>Mô tả:</strong> {{ form.moTa }}</p>
          <p><strong>Thời gian:</strong> {{ form.thoiGian }}</p>
          <p><strong>Địa chỉ:</strong> {{ form.diaChi }}</p>
        
</template>
