// const loginTab = document.getElementById('login-tab');
// const signupTab = document.getElementById('signup-tab');
// const loginForm = document.getElementById('login-form');
// const signupForm = document.getElementById('signup-form');

// loginTab.addEventListener('click', () => {
//     loginForm.style.display = 'block';
//     signupForm.style.display = 'none';
// });

// signupTab.addEventListener('click', () => {
//     loginForm.style.display = 'none';
//     signupForm.style.display = 'block';
// });


function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    
    alert('Login successful '+ username);
}

function signup() {
    const name = document.getElementById('user-name').value;
    const email= document.getElementById('email-id').value;
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;
    
    alert('You account has been created ', name);
}
