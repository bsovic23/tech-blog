  // Login
  function loginFx(event) {
    event.preventDefault();

    const username = document.querySelector("#username-login").value.trim();
    const password = document.querySelector("#password-login").value.trim();

if (username && password) {
  fetch('/api/users', {
    method: 'post',
    body: JSON.stringify({
      username,
      password
    }),
    headers: { 'Content-Type': 'application/json'}
  }).then((response) => {console.log(response)});
}
};

  document.querySelector('.login-form').addEventListener('submit', loginFx);

// Signup
function signupFx(event) {
    event.preventDefault();
  
        const username = document.querySelector("#username-signup").value.trim();
        const password = document.querySelector("#password-signup").value.trim();

    if (username && password) {
      fetch('/api/users', {
        method: 'post',
        body: JSON.stringify({
          username,
          password
        }),
        headers: { 'Content-Type': 'application/json'}
      }).then((response) => {console.log(response)});
    }
  };
  
  document.querySelector('.signup-form').addEventListener('submit', signupFx);


