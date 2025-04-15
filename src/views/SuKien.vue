<template>
    <div class="container mx-auto px-4 py-6">
      <!-- Ưu đãi và Form -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
        <!-- Ưu đãi -->
        <div class="md:col-span-3">
          <PromotionSection />
        </div>
        
        <!-- Mua vé nhanh -->
        <div class="md:col-span-1">
          <MuaVeNhanh />
        </div>
      </div>
  
      <!-- Phim đang chiếu -->
      <div class="mt-10">
        <NowShowing />
      </div>
    </div>
  </template>
  
  <script setup>
  import MuaVeNhanh from './MuaVeNhanh.vue'
  import QuickBookingForm from './QuickBookingForm.vue'
  import NowShowing from './NowShowing.vue'
  </script>