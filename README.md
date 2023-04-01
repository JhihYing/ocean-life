```jsx
# Ocean Life (水族館形象網站)
![](https://i.imgur.com/dWeyazQ.jpg)

## 專案說明
以水族館為主題的形象網站，與朋友 (後端工程師) 共同完成的 **Vue 3 框架** 專案。

目前有些功能仍在開發中。

我負責前端相關部分，其中 UI/UX 部分皆為自己所設計。

做此專案的主要目的如下：

- 練習 Vue3 框架、Vue生態系統與工具 (包含 vue-cli、vue-router、vuex)
- 練習 如何與後端工程師合作，並且以 **前後端分離** 的方式完成

## Demo
前台：https://jhihying.github.io/ocean-life/

後台 (無RWD)：https://jhihying.github.io/ocean-life/backendLogin

## 使用技術 / 套件 / 工具
### UI / UX
- 透過 Figma 完成 UI 介面設計
- 使用 Photoshop 處理圖片相關問題
- 使用 Illustrator 繪製相關的圖示、Logo

### 前端
- 以 手刻 的方式來 開發 UI 介面
- 透過 **Axios 套件** 與 後端串接 API
- RWD 斷點：414、576、768、992、1200

【使用】Vue 3、Vue Cli 3、Vue Router、Vuex、SASS (SCSS)、jQuery、RWD

【套件應用】Swiper (輪播圖)、AOS (視覺滾差動畫)、Axios

### 後端
- 後端程式 部署於 **Heroku**

【使用】Java、Spring Boot、MySQL (資料庫)

## 主要功能
### 前台
- 會員登入 / 登出 / 註冊
- 最新消息陳列、類別分類、切換不同文章
- 商品陳列、商品關鍵字搜尋
- 商品與新聞陳列、分類陳列
- 購物車、結帳流程、加入收藏 (尚未完成)
- 訂單查詢、收藏查詢  (尚未完成)

### 後台
- 管理者登入 / 登出
- 後台相關管理 (增刪查改CRUD)
  - 會員管理
  - 消息管理
  - 活動管理
  - 商品管理
  - 訂單管理、折扣碼管理 (尚未完成)
- 資料關鍵字搜尋

## 如何執行專案

下載專案 Zip 檔 或 將專案 Clone 至本地端

#### 安裝專案所需的套件
```
npm install
```

#### 編譯及執行專案
```
npm run serve
```
```
