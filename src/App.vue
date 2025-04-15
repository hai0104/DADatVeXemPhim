<template>
  <HeaderLayout />

  <div class="flex flex-row gap-6 px-6 mt-6">
    <!-- PHẦN CHÍNH (trái) -->
    <main class="flex-1">
      <RouterView />
    </main>

    <!-- SIDEBAR CỐ ĐỊNH (phải) -->
    <aside class="w-[300px] hidden md:block">
      <div class="sticky top-[100px]">
        <SideBarLayout />
      </div>
    </aside>
  </div>

  <FooterLayout />
</template>

<script setup>
import FooterLayout from './layout/FooterLayout.vue';
import HeaderLayout from './layout/HeaderLayout.vue';
import SideBarLayout from './layout/SideBarLayout.vue';
</script>