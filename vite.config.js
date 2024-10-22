import { defineConfig } from 'vite';
import fs from 'node:fs';

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
  appType: 'mpa', // fallback url 사용안함
});
