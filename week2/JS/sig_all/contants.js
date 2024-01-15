const form = document.querySelector('#login_form');
const email = document.querySelector('#email');
const inputs = document.querySelectorAll('input')
const passwordInputs = document.querySelectorAll('.password');
const password = document.querySelector('#password')
const checkPassword = document.querySelector('#password_check')
const btn = document.querySelector('.btn');
const eye1 = document.querySelector('.eye1');
const eye2 = document.querySelector('.eye2');
const testData = [{email: 'test@codeit.com', password: 'sprint101'}, ]

//input에 클래스네임을 부여하고 클래스 네임으로 querySelectAll을 했는데 적용이 안돼요ㅠㅠㅠ

export {email, inputs, password, passwordInputs, checkPassword, btn, eye1, eye2, testData};