import { email, password, checkPassword, passwordInputs, testData } from "../contants.js";

const errText = document.createElement('p');
errText.classList.add('errText')

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

function isValidPassword(password) {
  const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z])[A-Za-z\d]{8,}$/;
  return passwordRegex.test(password);
}


function emailError (e) {
  if (e.target === email) {
    if (e.target.value === '') {
      errText.textContent = '이메일을 입력해 주세요.';
    } else if (!isValidEmail(e.target.value)) {
      errText.textContent = '올바른 이메일 주소가 아닙니다.';
    } else if(testData.some((member) => member.email === email.value) && checkPassword) {
      errText.textContent = '이미 사용 중인 이메일입니다.';
    }  
    e.target.classList.add('err')
    e.target.after(errText);
  }
}

function passwordError (e) {
  if(e.target === password){
    if(e.target.value === '' ) {
      errText.textContent = '비밀번호를 입력해 주세요.';
    }else if (!isValidPassword(e.target.value)) {
      errText.textContent = '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.';
    }
    e.target.classList.add('err')
    e.target.after(errText);
  }
}

function checkPWDError(e) {
  if (e.target === checkPassword) {
    if (password.value !== checkPassword.value) {
      errText.textContent = '비밀번호가 일치하지 않아요.'; 
    } else  if(e.target.value === '' ) {
      errText.textContent = '비밀번호를 입력해 주세요.';
    }else if (!isValidPassword(e.target.value)) {
      errText.textContent = '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.';
    }
    e.target.classList.add('err')
    e.target.after(errText);
  }
}

function eyeToggle (e) {
  if (e.target.nextElementSibling.getAttribute('type') === 'password') {
    e.target.src = "img/eye-on.png";
    e.target.nextElementSibling.setAttribute('type','text');
  } else {
    e.target.src = "img/eye-off.png"
    e.target.nextElementSibling.setAttribute('type','password');
  }
}

email.addEventListener('focusout', emailError)


export { errText, isValidEmail, isValidPassword, passwordError, checkPWDError, eyeToggle};