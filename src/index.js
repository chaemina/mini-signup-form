// TODO: 이 곳에 정답 코드를 작성해주세요.

//1. id focus
//이벤트 : 페이지(window) 로드 시 
//핸들러 : focus
const idEl = document.getElementById('id')
const idMsg = document.getElementById('id-msg')
window.addEventListener('load', ()=> {
  idEl.focus()
});

//2. 유효성 검사 로직 
//id, 비밀번호, 비밀번호 확인 
//이벤트 : (1)input focus out (2) 가입하기 버튼
//핸들러 : (1)해당 input의 유효성 검사 (2) 모든 필드의 유효성 검사 


//(1)
const pwEl = document.getElementById('pw')
const pwMsg = document.getElementById('pw-msg')
const pwCheckEl = document.getElementById('pw-check')
const pwCheckMsg = document.getElementById('pw-check-msg')

//정규식 생성
//ID: 5~20자. 영문 소문자, 숫자. 특수기호(_),(-)만 사용 가능
var ID_REGEX = new RegExp("^[a-z0-9_-]{5,20}$");
//PW: 8~16자. 영문 대/소문자, 숫자 사용가능 
var PW_REGEX = new RegExp("^[a-zA-Z0-9]{8,16}$");



// //핸들러(유효성 검사 함수)

const checkIdRegex = (value) => {
  if(value.length === 0) {
    return 'required'
  }else{
    return ID_REGEX.test(value) ? true : 'invalid'
  }
}

const checkPwRegex = (value) => {
  if(value.length === 0) {
    return 'required'
  }else{
    return  PW_REGEX.test(value) ? true : 'invalid'
  }
 }

const checkPwCheckRegex = (value) => {
  if(value.length === 0) {
    return 'required'
  }else{
    return pwEl.value === value ? true : 'invalid'
  }
}

// - - - - - - - - - - - - - - - - - 

//3. 커스텀 에러 메세지 

const ID_ERROR_MSG = {
  required: '필수정보입니다.',
  invalid: '5-20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.'
}

const PW_ERROR_MSG = {
  required: '필수정보입니다.',
  invalid: '8~16자 영문 대 소문자, 숫자를 사용하세요.'
}
const PWCHECK_ERROR_MSG = {
  required: '필수정보입니다.',
  invalid: '비밀번호가 일치하지 않습니다.'
}

// 커스텀 에러 메세지 
// (1) 빈값이면 → 필수정보입니다 메세지 

// (2) 값이 있으면 ? 유효 → true , 유효하지 않은 값이면 → 해당 input 유효성 검사 메시지 

// 에러인경우 , input 태그에 border-red-600 class 추가

const validateId = (value) => {
  const isValidId = checkIdRegex(value)

  if(isValidId !== true){
    //isValidId -> required , invalid
    idEl.classList.add('border-red-600')
    idMsg.innerText = ID_ERROR_MSG[isValidId]
  }else{
    idEl.classList.remove('border-red-600');
    idMsg.innerText = ''
  }
  return isValidId;
}

const validatePw = (value) => {
   const isValidPw = checkPwRegex(value)

  if(isValidPw !== true){
    //isValidPw -> required , invalid
    pwEl.classList.add('border-red-600')
    pwMsg.innerText = PW_ERROR_MSG[isValidPw]
  }else{
    pwEl.classList.remove('border-red-600')
    pwMsg.innerText = ''
  }
  return isValidPw;
}


const validatePwCheck = (value) => {
   const isValidPwCheck = checkPwCheckRegex(value)
 
  if(isValidPwCheck !== true){
    //isValidPwCheck -> required , invalid
    pwCheckEl.classList.add('border-red-600')
    pwCheckMsg.innerText = PWCHECK_ERROR_MSG[isValidPwCheck]
  }else{
    pwCheckEl.classList.remove('border-red-600');
    pwCheckMsg.innerText = ''
  }
  return isValidPwCheck;
}


// - - - - - - - - - - - - - - - - - 


// 이벤트 발생 (1)
idEl.addEventListener('focusout', () => validateId(idEl.value));
pwEl.addEventListener('focusout', () => validatePw(pwEl.value));
pwCheckEl.addEventListener('focusout', () => validatePwCheck(pwCheckEl.value));

// (2)
const submitEl = document.getElementById('submit');

// 4. 입력 확인 모달 창 구현 
const modalEl = document.getElementById('modal')
const confirmId = document.getElementById('confirm-id')
const confirmPw = document.getElementById('confirm-pw')
const approveBtn = document.getElementById('approve-btn')
const cancelBtn = document.getElementById('cancel-btn')


submitEl.addEventListener('click', (event) => {
  event.preventDefault();

  const isValidForm =
  validateId(idEl.value) === true &&
  validatePw(pwEl.value) === true &&
  validatePwCheck(pwCheckEl.value) ===true


  if(isValidForm === true){
    confirmId.innerText = idEl.value
    confirmPw.innerText = pwEl.value
    modalEl.showModal()
  }
});


approveBtn.addEventListener('click', () => {
  window.alert('가입되었습니다 🥳')
  modalEl.close()
})
cancelBtn.addEventListener('click', ()=> {
  modalEl.close()
})

