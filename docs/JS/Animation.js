const object = document.getElementById("object");
let objectColor = false;
object.addEventListener("click", () => {
    objectColor = !objectColor;
    object.style.backgroundColor = objectColor ? "blue" : "rgb(39, 213, 39)";
});
