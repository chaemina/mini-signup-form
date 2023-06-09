// TODO: 이 곳에 정답 코드를 작성해주세요.

//1. id focus
//이벤트 : 페이지(window) 로드 시 
//핸들러 : focus
const idEl = document.getElementById('id')
window.addEventListener('load', ()=> {
  idEl.focus()
});

