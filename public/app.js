//Coode for google authentication

document.addEventListener("DOMContentLoaded", (event) => {
  const app = firebase.app();
  console.log(app);
});

function googleLogin() {
  const provider = new firebase.auth.GoogleAuthProvider();

  //it will return a promise so we will have to attach the promise to it
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      const user = result.user;
      document.write(`Hello ${user.displayName}`);
      console.log(user);
    })
    .catch(console.log);
}
