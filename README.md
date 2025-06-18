# Ocean Life (水族館形象網站) | 2023.04

> 備註：  
> 本專案後端部署於 Heroku（需付費），目前已暫停服務，導致部分 API 功能無法使用，網站暫時關閉，敬請見諒。

![](https://i.imgur.com/dWeyazQ.jpg)

## 專案說明
以水族館為主題的形象網站，以 Vue 3 框架開發的前後端分離專案，與後端工程師協作完成。

目前有部分功能尚未完成，其中，我負責 **前端開發、 UI/UX設計** 。


## 開發目的
- 練習 從設計發想到 UI 規劃與網站開發的完整流程
- 練習 Vue3 框架、Vue生態系統與工具 (包含 vue-cli、vue-router、vuex)
- 練習 前後端分離架構，並與後端工程師協作開發

## Demo
- 前台：https://jhihying.github.io/ocean-life/
- 後台 (無RWD)：https://jhihying.github.io/ocean-life/backendLogin


## 使用技術 / 套件 / 工具
### UI / UX
- 透過 Figma 完成 UI 介面設計
- 使用 Photoshop 處理圖片相關問題
- 使用 Illustrator 繪製相關的圖示、Logo


### 前端
- 以手刻的方式來開發 UI 介面
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

## 參考資料
- [墨田水族館](https://www.sumida-aquarium.com/cn_han/index.html)
