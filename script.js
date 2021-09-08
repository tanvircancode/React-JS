let number = 0;
const btn = document.querySelector("#button");
const display = document.querySelector("#display");


btn.addEventListener("click", () => {
    number++;
    display.textContent = number;
})

