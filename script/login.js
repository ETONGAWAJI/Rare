//SIGN IN AND SIGN UP CLICK

const sign_in_button = document.querySelector('#sign-in-button');
const sign_up_button = document.querySelector('#sign-up-button');
const container = document.querySelector('.container');

sign_up_button.addEventListener('click', () => {
    container.classList.add("sign-up-mode");
});

sign_in_button.addEventListener('click', () => {
    container.classList.remove("sign-up-mode");
});


// SHOW PASSWORD SCRIPT
function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }


// const signUp = document.querySelector('#signUp');
// const signIn = document.querySelector('#signIn');

// SIGN-UP FUNCTION 

signUp.addEventListener('click', () => {
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
});

  // SIGN-IN FUNCTION


  