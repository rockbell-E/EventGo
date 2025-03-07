const formLogIn = document.getElementById("formLogIn");
const msgFallo = document.getElementById("msgFallo");

formLogIn.addEventListener("submit", (event) => {
    event.preventDefault();

    const { usercorreo, userpass } = formLogIn.elements;

    msgFallo.innerHTML = "";
})