<template>
    <h2 class="text-2xl font-bold text-blue-600 mb-4 border-l-4 border-blue-600 pl-2">Ưu Đãi</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <img v-for="(img, index) in uuDaiList" :key="index" :src="img" :alt="'Ưu đãi ' + (index + 1)"
            class="w-[350px] h-[350px] object-cover rounded shadow-md mx-auto" />
    </div>
</template>

<script setup>
const uuDaiList = [
    new URL('@/assets/images/diadao.png', import.meta.url).href,
    new URL('@/assets/images/diadao.png', import.meta.url).href,
    new URL('@/assets/images/diadao.png', import.meta.url).href,
    new URL('@/assets/images/diadao.png', import.meta.url).href,
    new URL('@/assets/images/diadao.png', import.meta.url).href,
    new URL('@/assets/images/diadao.png', import.meta.url).href,
    new URL('@/assets/images/diadao.png', import.meta.url).href,
]
</script>

<style scoped>
/* Optional: Bạn có thể thêm style riêng nếu muốn bo góc, border, animation,... */
</style>
