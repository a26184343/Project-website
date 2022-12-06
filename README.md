### 蕭舜昕的學生專題
>自己的系有自己的版-社群媒體網頁實作
## :open_book: 簡介
2022年12月15日。111學年度實踐大學跨校專題暨競賽。參賽作品。
## :raising_hand_man:個人檔案
蕭舜昕。輔仁大學進修部軟體工程與數位創意學系。四年級。
## :desktop_computer:成果頁
   * 桌上型、筆記型電腦，請點選URL:https://hsiaostudentproject.netlify.app
   * 手機、平板，請掃描QR code:
## :point_right:怎麼看懂、運用這個專題
1. 了解使用者介面設計
   * 請點進[frontend->src->components]()觀看每一個.jsx檔案。
   * 請點進[frontend->src->components]()觀看每一個.jsx檔案的樣板文字(boiler plate)。
1. 了解如何用 ***tailwindcss***響應式網站如何製作
   * 請點進[frontend->src->components]()觀看每一個.jsx檔案中的*className* field，再對照到[Tailwind Doc](https://tailwindcss.com/docs/installation)。
1. 了解資料庫的資列結構
   * 請點進[backend->schemas]()觀看每一個.js檔案。
1. 2022年7月Google OAuth新政策
   * 請點進[backend->schemas]()觀看每一個.js檔案所列的名稱與型別。
1. 2022年7月***Google OAuth新政策***
   * 請點進[frontend->src->index.js]()觀看Google OAuth要包覆的範圍。
   * 請點進[frontend->src->components->Login.jsx]()觀看Login function所要解碼(decode)的credential response方式。
1. 了解螞蟻演算法
   * 請點進[frontend->src->components->]()觀看*ACOalgorithm()*
## :hammer_and_wrench:用到的技術與算法
1. 前端
   1. 網頁設計
      1. React
      2. Tailwind CSS
      1. ***React***:在業界非常流行的開發框架，身為Javascript生態系一員，資源非常豐富，能省去大量樣板與腳本開發的時間。
      2. ***Tailwind CSS***:將CSS整合進.jsx中，同屬Javascript生態系，不用再多開一個.css檔就能作UI設計、美化。
   2. 使用者登入
      1. Google Cloud
      1. ***Google Identity***:管理使用Google登入的API平台，大量的網站使用Google帳戶連結來建立會員，對使用者來說安全、省時，並減輕管理者的保存成本。
2. 後端
   1. 資料庫
      1. Sanity
      1. ***Sanity***:用Javascript就能自訂資料庫的資料結構，可以管理哪個網域名稱有權限取用API，或者讓公司的開發團隊共同使用該資料庫。直觀與即時是其優勢。
3. 部署
   1. 網域代管
      1. Netlify
      1. ***Netlify***:本專案取得網域名稱的代管服務提供方，只要上傳要部署的資料夾(或連結網路上的Repository)，該服務就能幫我們轉化內容，並且可以自訂網域名稱、發布。
   2. 版本控制
      1. Github
      1. ***Github***:本專案原始碼管理、儲存與版本控制的服務提供方，是業界第一首選、也是開發者最愛的資源共享區。
4. 算法
   1. 好友推薦
      1. ***螞蟻演算法(Ant Colony Optimization)***[^1]:是一最佳路徑演算法，藉由仿生來實作搜尋最短路徑。本專題藉此找出路徑上所有被選出的使用者，並且推薦距離最遠的用戶來當好友，意圖為避免使用者太快交到知心好友，而早早棄用交友功能。其步驟簡述：
         * 放置3個隨機起始點;
         * 計算候選使用者的合適度，其***fitness(candidate) = pheromone(user, candidate) ^ alpha * distance(user, candidate) ^ beta, alpha > beta***;
         * 使用輪盤法決定去處;
         * 更新已到達地點;
         * 重複以上步驟直至推薦用戶走訪完;
         * 更新費洛蒙值;
         * 重複以上步驟10次。
## :building_construction:專題網站的架構
```mermaid
graph TD;
```
## :page_facing_up:專題相關文件
1. 專題報告書
   * URL:https://docs.google.com/document/d/1Y0vA1FeONLoPKLL683QHWnx2xdgTAM9DwlLq8jKfiVc/edit?usp=sharing
   * URL:https://docs.google.com/document/d/1Y0vA1FeONLoPKLL683QHWnx2xdgTAM9DwlLq8jKfiVc/edit?usp=sharing。
2. 需求規格書
   * URL:https://docs.google.com/document/d/1klQh3hYoyf3J5ZgDXzu_unH0WM0c3wfhsH0Qj-yKucs/edit?usp=sharing
## 參考資源
1. adrianhajdin(2022)。project_share_me_social_media。
   * URl:https://github.com/adrianhajdin/project_shareme_social_media
   * Credit:@github/adrianhajdin。Best Repository & Resource Ever!:+1:
   * URL:https://docs.google.com/document/d/1klQh3hYoyf3J5ZgDXzu_unH0WM0c3wfhsH0Qj-yKucs/edit?usp=sharing。
3. 規格塑模書
   * URL:https://docs.google.com/document/d/1z7VFCwJacO1G2gqxmiUPLjhfL7w1759AGcykIxPwYJI/edit?usp=sharing。
4. 開發會議紀錄
   * URL:https://docs.google.com/document/d/17TgDDMV9fymqqSunnPATfqZjXPRvqFzpZJZ1YRjAMjE/edit?usp=sharing。
5. 專題海報
   * URL:
## :link:參考資源(與出現的名詞)
1. Tailwind CSS(2022)。
   * URL:https://tailwindcss.com/。
2. Google OAuth(2022)。
   * URL:https://developers.google.com/identity/protocols/oauth2。
3. React(2022)。
   * URL:https://zh-hant.reactjs.org/。
4. Google Identity(2022)。
   * URL:https://developers.google.com/identity/gsi/web/guides/overview。
5. Sanity(2022)。
   * URL:https://www.sanity.io/。
6. Netlify(2022)。
   * URL:https://www.netlify.com/。
7. Github(2022)。
   * URL:https://github.com/。
8. adrianhajdin(2022)。project_share_me_social_media。
   * URL:https://github.com/adrianhajdin/project_shareme_social_media。
   * Credit:@github/adrianhajdin。Best Repository & Resource Ever!:+1:。
9. 陳士杰(2005)。螞蟻演算法基礎。
   * URL:http://debussy.im.nuu.edu.tw/sjchen/Project_Courses/ML/AntAlgo.pdf。
## :label:註腳
[^1]:Carrot Cheng(2021)。以Python實作蟻群演算法(Ant Colony Optimization, ACO)並解決旅行商人問題(Traveling Salesman Problem, TSP)(上)。URL:https://medium.com/qiubingcheng/%E4%BB%A5python%E5%AF%A6%E4%BD%9C%E8%9F%BB%E7%BE%A4%E6%9C%80%E4%BD%B3%E5%8C%96%E6%BC%94%E7%AE%97%E6%B3%95-ant-colony-optimization-aco-%E4%B8%A6%E8%A7%A3%E6%B1%BAtsp%E5%95%8F%E9%A1%8C-%E4%B8%8A-b8c1a345c5a1。
