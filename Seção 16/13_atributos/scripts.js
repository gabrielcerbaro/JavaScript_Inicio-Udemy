let a = document.querySelector("footer a");

a.textContent = "GitHub"

console.log(a.getAttribute("href"));

let link = "https://github.com/gabrielcerbaro";

a.setAttribute("href", link);
a.setAttribute("target", "_blank")

console.log(a.getAttribute("href"));