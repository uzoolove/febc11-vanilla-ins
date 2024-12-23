import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: 'index.html', // 기본 index.html
        customService: 'src/pages/customerService/index.html',
        findStore: 'src/pages/findStore/index.html',
        itemDetail: 'src/pages/itemDetail/index.html',
        itemList: 'src/pages/itemList/index.html',
        main: 'src/pages/main/index.html',
        myCart: 'src/pages/myCart/index.html',
        signIn: 'src/pages/signIn/index.html',
        signUp: 'src/pages/signUp/index.html',
        termsOfService: 'src/pages/termsOfService/index.html',
        wishList: 'src/pages/wishList/index.html',
      },
    },
  },
  appType: 'mpa', // fallback 사용안함
  server: {
    // open: 'src/pages/main/index.html', // 서버 시작 시 브라우저에서 지정페이지 자동으로 열기
  },
});
