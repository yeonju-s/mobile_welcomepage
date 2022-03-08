const loginForm = document.getElementById('login-form');
const loginInput = loginForm.querySelector('input');
const loginBtn = loginForm.querySelector('button')
const greeting = document.getElementById('greeting')
const greetingMessage = document.getElementById('greeting-message')

const USERNAME_KEY = 'username';
const HIDDEN_KEY = 'hidden';

function paintGreeting(hi){
    greetingMessage.classList.remove(HIDDEN_KEY);
    greeting.classList.remove(HIDDEN_KEY);
    greetingMessage.innerText = `${hi} !`;
}

function handleSubmitLogin(event){
    event.preventDefault();
    const userName = loginInput.value;
    localStorage.setItem(USERNAME_KEY, userName)
    loginForm.classList.add(HIDDEN_KEY);
    paintGreeting(userName);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if(savedUserName !== null){
    loginForm.style.display = "none";
    paintGreeting(savedUserName);
} else{
    loginBtn.addEventListener('click', handleSubmitLogin);
    loginForm.classList.remove(HIDDEN_KEY);
    greeting.style.display = "none";
}