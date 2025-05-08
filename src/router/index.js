import BinhLuan from '@/components/BinhLuan.vue'
import BlogDienAnh from '@/components/BlogDienAnh.vue'
import DaoDien from '@/components/DaoDien.vue'
import DatGhe from '@/components/DatGhe.vue'
import DatThucAn from '@/components/DatThucAn.vue'
import DienVien from '@/components/DienVien.vue'
import Login from '@/components/Login.vue'
import MuaVe from '@/components/MuaVe.vue'
import Phim from '@/components/Phim.vue'
import PhimHayThang from '@/components/PhimHayThang.vue'
import Rap from '@/components/Rap.vue'
import TaiKhoan from '@/components/TaiKhoan.vue'
import ThanhToan from '@/components/ThanhToan.vue'
import TheLoaiPhim from '@/components/TheLoaiPhim.vue'
import TrangChu from '@/components/TrangChu.vue'
import UuDai from '@/components/UuDai.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'trangchu',
      component: TrangChu,
    },
    {
      path: '/dat-thuc-an',
      name: 'datthucan',
      component: DatThucAn,
    },
    {
      path: '/dat-ghe',
      name: 'datghe',
      component: DatGhe,
    },
    {
      path: '/tai-khoan',
      name: 'taikhoan',
      component: TaiKhoan,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/the-loai-phim',
      name: 'theloaiphim',
      component: TheLoaiPhim,
    },
    {
      path: '/dien-vien',
      name: 'dienvien',
      component: DienVien,
    },
    {
      path: '/dao-dien',
      name: 'daodien',
      component: DaoDien,
    },
    {
      path: '/mua-ve',
      name: 'muave',
      component: MuaVe,
    },
    {
      path: '/thanh-toan',
      name: 'thanhtoan',
      component: ThanhToan,
    },
    {
      path: '/rap',
      name: 'rap',
      component: Rap,
    },
    {
      path: '/blog-dien-anh',
      name: 'blogdienanh',
      component: BlogDienAnh,
    },
    {
      path: '/binh-luan',
      name: 'binhluan',
      component: BinhLuan,
    },
    {
      path: '/uu-dai',
      name: 'uudai',
      component: UuDai,
    },
    {
      path: '/phim-hay-thang',
      name: 'phimhaythang',
      component: PhimHayThang,
    },
    {
      path: '/phim',
      name: 'phim',
      component: Phim,
    },
  ],
})

export default router
