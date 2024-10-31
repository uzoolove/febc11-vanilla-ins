export function setUser(user){
  sessionStorage.setItem('user', user);
}

export function getUser(){
  return JSON.parse(sessionStorage.getItem('user') || '{}');
}