const object = document.getElementById("object");
const num1 = document.getElementById("Num1")
// const btn1 = document.getElementById("btn1")
// const btn2 = document.getElementById("btn2")
let movingObject = false;
let movingNum1 = false;


console.log(movingNum1)
object.addEventListener("click", () => {
    movingObject = !movingObject;
    movingObject ? object.classList.add("is-active") :
        object.classList.remove("is-active");

    movingNum1 = !movingNum1
    console.log(movingNum1)

    if (movingNum1) {
        countUp()
        num1.classList.add("is-activenum1");
    } else {
        clearInterval(intervalId);
        num1.classList.remove("is-activenum1");
    }
});



let count = 1;
let intervalId;
let isRunning = false;


const countUp = () => {
    const text = num1.textContent = count;
    count++
    intervalId = setTimeout(countUp, 1000);
    if (count > 4) {
        count = 1;
    }
};


// btn1.addEventListener("click", () => {
//     if (!isRunning) {
//         isRunning = true;
//         countUp();
//     }
// });

// btn2.addEventListener("click", () => {
//     clearTimeout(intervalId);
//     isRunning = false;
// })



