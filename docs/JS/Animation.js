const object = document.getElementById("object");
const num1 = document.getElementById("Num1")
let movingObject = false;
let movingNum1 = false;

let rev_movingObject = false;
let rev_movingNum1 = false;

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

document.addEventListener("keydown", (e) => {
    if (e.keyCode === 32) {
        rev_movingObject = !rev_movingNum1;
        rev_movingObject ? object.classList.add("rev_is-active") :
            object.classList.remove("rev_is-active");

        rev_movingNum1 = !rev_movingNum1
        console.log(movingNum1)

        if (rev_movingNum1) {
            countUp()
            num1.classList.add("rev_is-activenum1");
        } else {
            clearInterval(intervalId);
            num1.classList.remove("rev_is-activenum1");
        }
    }
});

document.addEventListener("touchmove", (e) => {
    rev_movingObject = !rev_movingNum1;
    rev_movingObject ? object.classList.add("rev_is-active") :
        object.classList.remove("rev_is-active");

    rev_movingNum1 = !rev_movingNum1
    console.log(movingNum1)

    if (rev_movingNum1) {
        countUp()
        num1.classList.add("rev_is-activenum1");
    } else {
        clearInterval(intervalId);
        num1.classList.remove("rev_is-activenum1");
    }
});

// object.addEventListener("scroll", () => {
//     rev_movingObject = !rev_movingNum1;
//     rev_movingNum1 ? object.classList.add("rev_is-active") :
//         object.classList.remove("rev_is-active");

//     rev_movingNum1 = !rev_movingNum1
//     console.log(movingNum1)

//     if (rev_movingNum1) {
//         countUp()
//         num1.classList.add("rev_is-activenum1");
//     } else {
//         clearInterval(intervalId);
//         num1.classList.remove("rev_is-activenum1");
//     }
// });



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



