//Variable Declarations
const registerBtn = document.getElementById('a-register');
const registerNav = document.getElementById('nav-register');
const registerLi = document.getElementById('li-register');
const signInA = document.getElementById('nav-sign-in');
const signIn = document.getElementsByClassName('card-container')[0];
const signInLi = document.getElementById('li-sign-in');

const registerContainer = document.getElementsByClassName('register-card-container')[0];

let registerElements = [registerBtn, registerNav];

function switchTabsRegister(e) {
    e.preventDefault();
    signIn.style.display = 'none'
    registerContainer.style.display = 'block';
    signInA.style.fontSize = '.9rem';
    signInA.style.fontWeight = '400'
    signInLi.style.borderBottom = '4px solid var(--nav-bg)'
    signInLi.onmouseenter = (e) => {
        signInLi.style.borderBottom = '4px solid var(--bg-color)';
        signInLi.style.transition = '.2s ease-in-out'
    }
    signInLi.onmouseleave = () => {
        signInLi.style.borderBottom = '4px solid var(--nav-bg)';
    }
    registerNav.style.fontWeight = '600';
    registerNav.style.fontSize = '1rem';
    registerLi.style.borderBottom = '4px solid var(--f1-red)';
}

function switchTabsSignIn() {
    registerContainer.style.display = 'none';
    signIn.style.display = 'block';
    registerNav.style.fontSize = '.9rem';
    registerNav.style.fontWeight = '400'
    registerLi.style.borderBottom = '4px solid var(--nav-bg)'
    registerLi.onmouseenter = (e) => {
        registerLi.style.borderBottom = '4px solid var(--bg-color)';
        registerLi.style.transition = '.2s ease-in-out'
    }
    registerLi.onmouseleave = () => {
        registerLi.style.borderBottom = '4px solid var(--nav-bg)'
    }
    signInLi.style.borderBottom = '4px solid var(--f1-red)';
    signInA.style.fontWeight = '600';
    signInA.style.fontSize = '1rem'
}

switchTabsSignIn();

for (const e of registerElements) {
    e.onclick = switchTabsRegister;
}

signInA.onclick = switchTabsSignIn;