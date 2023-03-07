const colors = ["green", "red", "blue", "gold", "yellow", "black", "orange", "pink"];

const btn = document.getElementById("btn");
console.log(btn)
const color = document.querySelector(".color");

btn.addEventListener("click", function() {
    console.log(document.body);

    let random_number = getrandomnumber();
    console.log(random_number)
    document.body.style.backgroundColor = colors[random_number];
    color.textContent = colors[random_number];
});

function getrandomnumber() {
    return Math.floor(Math.random() * colors.length)
}