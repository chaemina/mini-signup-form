// TODO: 이 곳에 정답 코드를 작성해주세요.

//1. id focus
//이벤트 : 페이지(window) 로드 시 
//핸들러 : focus
const idEl = document.getElementById('id')
window.addEventListener('load', ()=> {
  idEl.focus()
});

//2. 유효성 검사 로직 
//id, 비밀번호, 비밀번호 확인 
//이벤트 : (1)input focus on (2) 가입하기 버튼
//핸들러 : (1)해당 input의 유효성 검사 (2) 모든 필드의 유효성 검사 


//(1)
const pwEl = document.getElementById('pw')
const pwCheckEl = document.getElementById('pw-check')

//정규식 생성
//ID: 5~20자. 영문 소문자, 숫자. 특수기호(_),(-)만 사용 가능
var ID_REGEX = new RegExp("^[a-z0-9_-]{5,20}$");
//PW: 8~16자. 영문 대/소문자, 숫자 사용가능 
var PW_REGEX = new RegExp("^[a-zA-Z0-9]{8,16}$");

//핸들러(유효성 검사 함수)
const validateId = (value) => {
  const IDCHECK = ID_REGEX.test(value);
  console.log(IDCHECK)
}
const validatePw = (value) => {
  const PWCHECK = PW_REGEX.test(value);
  console.log(PWCHECK)
}
const validatePwCheck = (value) => {
  const DBCHECK = pwEl.value === value;
  console.log(DBCHECK)  
}

// 이벤트 발생
idEl.addEventListener('focusout', () => validateId(idEl.value));
pwEl.addEventListener('focusout', () => validatePw(pwEl.value));
pwCheckEl.addEventListener('focusout', () => validatePwCheck(pwCheckEl.value));

// (2)
const submit = document.getElementById('submit');

submit.addEventListener('click', (event) => {
  event.preventDefault();
  validateId(idEl.value);
  validatePw(pwEl.value);
  validatePwCheck(pwCheckEl.value);
});
