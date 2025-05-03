# F:Angular and B:flask #
From ChatGPT at Angular/Angular Flask 整合
F:FandB.angular
B:FandB.Flask

## 2025/04/11 ##
- [1] 前端呼叫後端 API

- [1] API 增加資料處理與傳送參數
        Angular 能將使用者輸入的名字送給 Flask
        Flask 回傳對應的歡迎語句
        Angular 顯示後端回傳的訊息

## 2025/04/12 ##
- [1] 簡單的 CRUD（新增、刪除、修改）清單系統
        Flask + SQLAlchemy 架設 Todo 資料模型與 API
        Angular 建立元件：HTML 模板分離
        Angular 操作：用 HttpClient 串接 Flask API
        前後互動完成 CRUD 操作
                <!-- Todo -->
                美化 UI（加 CSS 或 Bootstrap）
                加入使用者登入驗證✅
                把後端換成 PostgreSQL
                使用環境變數設定 API base URL（部署前超實用）

- [1] 加入使用者登入驗證系統
        前端 Angular：
            登入頁（輸入帳號密碼）
            若登入成功，儲存 JWT Token
            所有對 Todo 的 API 請求都加上 Token
        後端 Flask：
            提供 /api/login 來驗證帳號密碼
            回傳 JWT Token
            Todo API 全部驗證 Token（用裝飾器）
                <!-- Todo -->
                加入「註冊新帳號」功能✅
                把使用者資訊與 todo 綁定（每個帳號只能看自己的項目）✅
                優化 Token 過期與自動登出✅

- [1] 登出與自動登出功能
        點「登出」按鈕清除 token
        當 JWT token 過期時，自動登出並提示使用者
                <!-- Todo -->
                顯示倒數計時登出提示（選配）
                設定 token 存活時間（Flask JWT 有支援）✅

- [1] 設定 token 存活時間(Flask JWT 有支援)
        Access Token（使用者登入後的通行證）
                <!-- Todo -->
                Refresh Token（進階功能,自動續約延長登入狀態但不需重新登入）
                手動 Blacklist (進階功能,避免 token 被盜用後仍有效)
                JWT 回傳時間戳記 (進階功能,用於提示「還剩多久」過期)

## 2025/04/14 ##
- [1] 建立帳號註冊系統
        使用者可以註冊帳號與密碼
        密碼加密儲存
        註冊成功後自動登入
        不允許重複帳號
                <!-- Todo -->
                使用者資料查詢與編輯
                註冊時不允許null

- [1] 修改登入，改為從資料庫取得

- [1] 讓每位使用者只看得到自己的 Todo
        新增 Todo 時，自動綁定目前登入的使用者（透過 JWT）
        查詢 Todo，只能查到屬於自己的項目
        修改與刪除 Todo，也必須驗證使用者身份一致
                <!-- Todo -->
                加上使用者個人設定（如主題色、暱稱）
                顯示登入中使用者的名稱✅
                設定每個 todo 的建立時間、排序、搜尋等

## 2025/04/15 ##
- [1] Blueprinted Flask into login, todo, auth

- [1] 顯示登入中使用者的名稱
        在產生 JWT Token 時，把使用者資訊包進去（identity）
        前端在登入成功後儲存使用者資訊（如 username）
        顯示於畫面上，例如：歡迎回來，xxx！
                <!-- Todo -->
                前端呼叫 /api/me 的 API，每次開啟時從 JWT token 解碼使用者名稱 (username 不存在 localStorage)✅
                從 get_jwt_identity() 取得完整使用者物件 ID，之後做「顯示個人資料」功能
                
## 2025/04/17 ##
- [1] 用 /api/me 實作「從 token 解出使用者」
        路由：GET /api/me
        要有 @jwt_required()
        從 get_jwt_identity() 解出帳號，再從資料庫撈出對應資料
        回傳使用者資訊（例如：id、username）
                <!-- Todo -->
                修改個人資料
                修改密碼✅
                顯示其他使用者公開資料（like profile）

- [1] 顯示使用者註冊時間
        使用者資料表中加入 created_at 欄位
        註冊時自動填入現在時間
        /api/me 回傳該時間
        Angular 前端顯示該時間（可加上格式化）
                <!-- Todo -->
                顯示所有使用者的公開資料（像論壇一樣）
                加上「我的個人頁面」元件，獨立顯示使用者資料✅
                多語系顯示時間（i18n）

## 2025/04/19 ##
- [1] SPA(
        Home,
        Login,
        Profile,
        Register,
        Todo)
` ng generate module \/ --routing `
` ng generate component \/ `

- [1] Complete the navbar

- [1] Profile 元件，獨立顯示使用者資料
        建立 profile 元件，用來顯示個人資料
        呼叫 /api/me API，顯示帳號、註冊時間
        與主頁切換，可從主頁點擊前往「我的頁面」
                <!-- Todo -->
                加上使用者「email」、「暱稱」欄位並允許修改✅
                上傳個人頭像
                頁面保護（未登入者不能進入 /profile）

- [1] 查看與修改自己的 Email 與暱稱的功能
        加入 email 和 nickname 欄位到 User 資料表
        /api/me 回傳與接收更新資料
        Angular ProfileComponent 顯示可編輯的欄位與儲存按鈕
                <!-- Todo -->
                加上 Email 格式驗證
                讓使用者可以修改密碼✅
                加入頭像上傳與預覽

## 2025/04/20 ##
- [1] 使用者可以修改密碼
        使用者需提供舊密碼（驗證身份）
        輸入新密碼（可加確認）
        修改成功後回傳訊息
        前端提供簡單表單讓使用者輸入
                <!-- Todo -->
                新密碼確認（前端驗證）
                修改個人資料頁面獨立路由✅
                上傳頭像（含預覽 + 上傳）✅

## 2025/04/24 ##
- [1] 上傳頭像（含預覽 + 上傳）
        頭像上傳、儲存
        路徑回傳
        Angular預覽、顯示
                <!-- Todo -->
                檔案大小限制(用request.content_length 判斷)
                自動壓縮圖片(pillow 套件處裡壓縮與格式化)
                上傳前檢查格式(前後端同時檢查)
                上傳後重新命名(加UUID 或 hash 做去識別處裡)
                使用者公開頁✅
                整合圖片壓縮或預覽裁剪

- [1] 使用者廣場
        顯示所有使用者的帳號、暱稱、頭像
        提供 GET /api/users 回傳所有使用者資料
                <!-- Todo -->
                使用者公開頁改為卡片風格（美化 UI）
                點擊使用者進入個人公開頁（例如 /user/Elric）
                只顯示有上傳頭像的使用者？

## 2025/05/01 ##
- [1] 後端爬蟲 + 前端顯示
        用爬蟲套件（如 requests, BeautifulSoup）抓資料
        提供 GET /api/crawler/news
        呼叫這個 API 並顯示資料列表
                <!-- Todo -->
                爬取多網站
                存進資料庫
                定時爬蟲任務
                只限登入用戶使用爬蟲✅

## 2025/05/02 ##
- [1] 前後端合併資料夾 + 上傳github

 
- [1] 
- [1] 
- [1] 