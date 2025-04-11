<template>
    <div class="movie-review-page">
      <div class="header">
        <h2>BÌNH LUẬN PHIM</h2>
        <div class="filters">
          <select v-model="filter.category">
            <option>Tất Cả</option>
            <option>Hành Động</option>
            <option>Hài</option>
            <option>Tình Cảm</option>
          </select>
          <select v-model="filter.status">
            <option>Đang</option>
            <option>Sắp</option>
          </select>
          <select v-model="filter.sort">
            <option>Mới Nhất</option>
            <option>Phổ Biến</option>
          </select>
        </div>
      </div>
  
      <div class="content">
        <!-- Danh sách bình luận -->
        <div class="reviews">
          <div v-for="review in reviews" :key="review.id" class="review-card">
            <img :src="review.image" class="thumbnail" />
            <div class="review-details">
              <h4>{{ review.title }}</h4>
              <div class="actions">
                <button class="like-btn">👍 Thích</button>
                <span class="views">👁️ {{ review.views }}</span>
              </div>
              <p class="summary">{{ review.summary }}</p>
            </div>
          </div>
        </div>
  
        <!-- Sidebar -->
        <div class="sidebar">
          <div class="quick-booking">
            <h3>Mua Vé Nhanh</h3>
            <select v-model="booking.movie">
              <option>Một Bộ Phim Minecraft</option>
            </select>
            <select v-model="booking.cinema">
              <option>Galaxy Sala</option>
            </select>
            <select v-model="booking.date">
              <option>Chọn ngày</option>
            </select>
          </div>
  
          <div class="now-showing">
            <h4>PHIM ĐANG CHIẾU</h4>
            <div class="now-showing-card">
              <img :src="diadaoImage" class="now-showing-img" />
              <div class="movie-info">
                <strong>Địa Đạo: Mặt Trời Trong Bóng Tối</strong>
                <p class="rating">⭐ 8.7</p>
                <p class="age">T16</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import diadaoThumb from '@/assets/images/diadao_thumb.png';
  import amduongloThumb from '@/assets/images/amduonglo_thumb.png';
  import diadaoImage from '@/assets/images/diadao.png';
  
  export default {
    data() {
      return {
        diadaoImage,
        filter: {
          category: 'Tất Cả',
          status: 'Đang',
          sort: 'Mới Nhất'
        },
        booking: {
          movie: '',
          cinema: '',
          date: ''
        },
        reviews: [
          {
            id: 1,
            title: '[Review] Địa Đạo Mặt Trời Trong Bóng Tối: Bản Anh Hùng Ca Kỉ Niệm 50 Năm Thống Nhất Đất Nước',
            image: diadaoThumb,
            views: 853,
            summary: 'Địa Đạo là tác phẩm kỉ niệm 50 năm ngày giải phóng miền Nam...'
          },
          {
            id: 2,
            title: '[Review] Âm Dương Lộ: Tôn Vinh Tài Xế Xe Cứu Thương...',
            image: amduongloThumb,
            views: 926,
            summary: 'Âm Dương Lộ đánh dấu sự trở lại của đạo diễn Hoàng Tuấn Cường...'
          }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .movie-review-page {
    padding: 30px;
    font-family: 'Segoe UI', sans-serif;
    background-color: #fff;
    color: #222;
  }
  
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .header h2 {
    font-size: 28px;
    font-weight: bold;
  }
  
  .filters select {
    margin-left: 10px;
    padding: 6px 12px;
    border-radius: 6px;
    border: 1px solid #ccc;
    font-size: 14px;
  }
  
  .content {
    display: flex;
    gap: 30px;
  }
  
  .reviews {
    flex: 3;
  }
  
  .review-card {
    display: flex;
    background: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.1);
    margin-bottom: 20px;
    padding: 15px;
  }
  
  .thumbnail {
    width: 160px;
    height: auto;
    border-radius: 8px;
    margin-right: 15px;
    object-fit: cover;
  }
  
  .review-details {
    flex: 1;
  }
  
  .review-details h4 {
    font-size: 18px;
    margin-bottom: 6px;
  }
  
  .actions {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 8px;
  }
  
  .like-btn {
    padding: 4px 10px;
    background-color: blue;
    border: none;
    border-radius: 6px;
    font-weight: bold;
    cursor: pointer;
  }
  
  .views {
    font-size: 14px;
    color: #666;
  }
  
  .summary {
    font-size: 14px;
    color: #444;
  }
  
  .sidebar {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
  .quick-booking,
  .now-showing {
    background-color: #f4f4f4;
    padding: 16px;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
  }
  
  .quick-booking h3,
  .now-showing h4 {
    margin-bottom: 10px;
  }
  
  .quick-booking select {
    width: 100%;
    margin-bottom: 10px;
    padding: 6px;
    border-radius: 6px;
    border: 1px solid #ccc;
  }
  
  .now-showing-card {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .now-showing-img {
    width: 90px;
    border-radius: 6px;
  }
  
  .movie-info strong {
    display: block;
    margin-bottom: 4px;
  }
  
  .rating,
  .age {
    font-size: 14px;
    color: #333;
  }
  </style>
  