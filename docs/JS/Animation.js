const object = document.getElementById("object");
let movingObject = false;
console.log(movingObject);
object.addEventListener("click", () => {
    movingObject = !movingObject;
    console.log(movingObject);
    movingObject ? object.classList.add("is-active") :
        object.classList.remove("is-active");
});
