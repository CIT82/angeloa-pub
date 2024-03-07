console.log("connected");
const FORM = document.querySelector("form");
let SENT = document.querySelector(".sent-message")

FORM.addEventListener("submit", function(e){
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const subject= e.target.subject.value;
    const message = e.target.message.value;

    const p = document.createElement("p");
    p.textContent = `Hello ${name} thanks for your message ${message}`;

    SENT.appendChild(p);
    FORM.rest();
})