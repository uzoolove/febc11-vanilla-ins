import axios from 'axios';
import { getUser, setUser } from './userStore.js';

const API_SERVER = import.meta.env.VITE_API_SERVER;
const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
const REFRESH_URL = '/auth/refresh';

function customAxios(){

  // 로그인 된 사용자 정보
  const user = getUser();

  // ajax 통신에 사용할 공통 설정 지정
  const instance = axios.create({
    baseURL: API_SERVER,
    timeout: 1000*10,
    headers: {
      'content-type': 'application/json', // request 데이터 타입
      'accept': 'application/json',  // response 데이터 타입
      'client-id': CLIENT_ID, // 프로젝트 식별을 위한 id
    }
  });

  // 요청 인터셉터
  instance.interceptors.request.use(config => {
    if(user.token){ // 로그인 된 상태라면 accessToken 전송
      let token = user.token.accessToken;
      if(config.url === REFRESH_URL){ // accessToken 재발급 요청일 경우 refreshToken 전송
        token = user.token.refreshToken;
      }
      config.headers.Authorization = `Bearer ${ token }`;
    }
    return config;
  });

  // 응답 인터셉터
  instance.interceptors.response.use(res => res, async err => {
    const { config, response } = err;
    if(response?.status === 401){ // 인증 되지 않음
      if(config.url === REFRESH_URL){ // refresh 토큰 인증 실패
        if(confirm('로그인 후 이용 가능합니다.\n로그인 페이지로 이동하시겠습니까?')){
          history.pushState({ from: location.pathname }, '로그인', '/src/pages/signIn/index.html');
        }
      }else{
        // refresh 토큰으로 access 토큰 재발급 요청
        const accessToken = await getAccessToken(instance);
        if(accessToken){
          setUser({ ...user, token: { accessToken } });
          config.headers.Authorization = `Bearer ${ accessToken }`;
          // 갱신된 accessToken으로 재요청
          return axios(config);
        }
      }
    }else{
      return Promise.reject(err);
    }
  });

  // accessToken 갱신 요청
  async function getAccessToken(instance){
    try{
      const { data: { accessToken } } = await instance.get(REFRESH_URL);
      return accessToken;
    }catch(err){
      console.error(err);
    }
  }

  return instance;
}

export default customAxios;