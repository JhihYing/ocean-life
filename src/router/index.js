// ----------------- 套件(js-cookie) -----------------
import Cookies from "js-cookie";

// ----------------- Vue使用方法 -----------------
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  // ----------------- 前台 -----------------
  // 首頁
  {
    path: "/",
    name: "Index",
    component: () => import("@/views/frontend/Index.vue"),
    meta: {
      keepAlive: false,
      ticketAlive: true,
      footerKeepAlive: true,
    },
  },

  // 最新消息
  {
    path: "/news",
    name: "News", // (不使用)
    meta: {
      keepAlive: true,
      ticketAlive: true,
      footerKeepAlive: true,
    },
    children: [
      {
        path: "newsIndex", // 最新消息
        component: () => import("../views/frontend/News.vue"),
      },
      {
        path: "newspage", // 最新消息-內文
        component: () => import("../views/frontend/NewsPage.vue"),
      },
    ],
  },

  // 入館資訊
  {
    path: "/information",
    name: "Information", // (不使用)
    meta: {
      keepAlive: true,
      ticketAlive: true,
      footerKeepAlive: true,
    },
    children: [
      {
        path: "ticket", // 票價 & 購票
        component: () => import("../views/frontend/Ticket.vue"),
      },
      {
        path: "traffic", // 交通指南
        component: () => import("../views/frontend/Traffic.vue"),
      },
      {
        path: "faq", // 常見問答
        component: () => import("../views/frontend/Faq.vue"),
      },
      {
        path: "contact", // 聯絡我們
        component: () => import("../views/frontend/Contact.vue"),
      },
    ],
  },

  // 探索之旅
  {
    path: "/explore",
    name: "Explore", // (不使用)
    meta: {
      keepAlive: true,
      ticketAlive: true,
      footerKeepAlive: true,
    },
    children: [
      {
        path: "guide", // 館內導覽
        component: () => import("../views/frontend/Guide.vue"),
      },
      {
        path: "restaurant", // 特色餐廳
        component: () => import("../views/frontend/Restaurant.vue"),
      },
      {
        path: "activity", // 館內活動
        component: () => import("@/views/frontend/Activity.vue"),
      },
    ],
  },

  // 線上商城
  {
    path: "/onlineshop",
    name: "Onlineshop", // (不使用)
    meta: {
      keepAlive: true,
      ticketAlive: true,
      footerKeepAlive: true,
    },
    children: [
      {
        path: "shopIndex", // 線上商城
        component: () => import("../views/frontend/Onlineshop.vue"),
      },
      {
        path: "product", // 線上商城-商品
        component: () => import("../views/frontend/Product.vue"),
      },
    ],
  },

  // 購物車
  {
    path: "/cart",
    name: "Cart", // (不使用)
    meta: {
      keepAlive: true,
      ticketAlive: true,
      footerKeepAlive: true,
    },
    children: [
      {
        path: "cartNull", // 空的購物車
        component: () => import("../views/frontend/CartNull.vue"),
      },
    ],
  },

  // 購物車 - 尚未完成
  {
    path: "/checkout",
    name: "Checkout", // 購物車-填寫資料
    component: () => import("../views/frontend/Checkout.vue"),
  },
  {
    path: "/finish",
    name: "Finish", // 購物車-訂單完成
    component: () => import("../views/frontend/Finish.vue"),
  },

  // 會員中心 (包含登入 & 註冊)
  {
    path: "/member",
    name: "Member", // (不使用)
    meta: {
      keepAlive: true,
      ticketAlive: true,
      requiresAuth: true, // 判斷此頁是否需要權限驗證
      footerKeepAlive: true,
    },
    children: [
      {
        path: "login", // 會員登入
        name: "Login",
        component: () => import("../views/frontend/Login.vue"),
        meta: {
          // ticketAlive: false,
          requiresAuth: false,
        },
      },
      {
        path: "signup", // 會員註冊
        name: "Signup",
        component: () => import("../views/frontend/Signup.vue"),
        meta: {
          // ticketAlive: false,
          requiresAuth: false,
        },
      },
      {
        path: "memberProfile", // 會員資料
        name: "MemberProfile",
        component: () => import("../views/frontend/MemberProfile.vue"),
      },
      {
        path: "changePassword", // 會員資料-修改密碼
        component: () => import("../views/frontend/ChangePassword.vue"),
      },
      {
        path: "orderTracking", // 訂單查詢
        component: () => import("../views/frontend/OrderTracking.vue"),
      },
      {
        path: "myCollection", // 我的收藏
        component: () => import("../views/frontend/MyCollection.vue"),
      },
    ],
  },

  // ----------------- 後台 -----------------
  // 登入
  {
    path: "/backendLogin",
    name: "BackendLogin", // 登入
    component: () => import("../views/backend/BackendLogin.vue"),
  },

  // 後台所有頁面
  {
    path: "/backend",
    name: "Backend", // 首頁 (模板)
    component: () => import("../views/backend/Index.vue"),
    meta: {
      mangerAuth: true,
    },

    children: [
      {
        path: "memberbackend",
        name: "Memberbackend", // 會員管理 (不使用)
        children: [
          {
            path: "member", // 會員管理
            component: () => import("../views/backend/MemberBackend.vue"),
          },
          {
            path: "editor", // 會員管理 (編輯)
            component: () => import("../views/backend/MemberBackendEditor.vue"),
          },
        ],
      },
      {
        path: "newsbackend",
        name: "Newsbackend", // 消息管理 (不使用)
        children: [
          {
            path: "news", // 消息管理
            component: () => import("../views/backend/NewsBackend.vue"),
          },
          {
            path: "add", // 消息管理 (新增)
            component: () => import("../views/backend/NewsBackendAdd.vue"),
          },
          {
            path: "editor", // 消息管理 (編輯)
            component: () => import("../views/backend/NewsBackendEditor.vue"),
          },
        ],
      },
      {
        path: "activityBackend",
        name: "ActivityBackend", // 活動管理 (不使用)
        children: [
          {
            path: "activity", // 活動管理
            component: () => import("../views/backend/ActivityBackend.vue"),
          },
          {
            path: "add", // 活動管理 (新增)
            component: () => import("../views/backend/ActivityBackendAdd.vue"),
          },
          {
            path: "editor", // 活動管理 (編輯)
            component: () =>
              import("../views/backend/ActivityBackendEditor.vue"),
          },
        ],
      },
      {
        path: "onlineBackend",
        name: "OnlineBackend", // 商城管理 (不使用)
        children: [
          {
            path: "order", // 商城管理-訂單
            component: () => import("../views/backend/OrderBackend.vue"),
          },
          {
            path: "sale", // 商城管理-折扣碼
            component: () => import("../views/backend/SaleBackend.vue"),
          },
          {
            path: "online", // 商城管理-商品(不使用)
            children: [
              {
                path: "product", // 商城管理-商品
                component: () => import("../views/backend/ProductBackend.vue"),
              },
              {
                path: "add", // 商城管理-商品 (新增)
                component: () =>
                  import("../views/backend/ProductBackendAdd.vue"),
              },
              {
                path: "editor", // 商城管理-商品 (編輯)
                component: () =>
                  import("../views/backend/ProductBackendEditor.vue"),
              },
            ],
          },
        ],
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const cookiesToken = Cookies.get("token");
  const localToken = localStorage.getItem("token");

  const mangerToken = Cookies.get("mangerToken");
  const localMangerToken = localStorage.getItem("mangerToken");
  // console.log(localToken);

  if (to.meta.requiresAuth && !cookiesToken && !localToken) {
    next({ name: "Login" });
  } else if (to.meta.mangerAuth && !mangerToken && !localMangerToken) {
    next({ name: "BackendLogin" });
  } else {
    next();
  }

  return true;
});

// ----------------- 換頁時，畫面滑到最上方 -----------------
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
});

export default router;
