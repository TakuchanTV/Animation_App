const object = document.getElementById("object");
const num1 = document.getElementById("Num1");
const rightbtn = document.getElementById("rightbtn");
const leftbtn = document.getElementById("leftbtn");
const stopbtn = document.getElementById("stopbtn");
const music1 = document.getElementById("music1");
const music2 = document.getElementById("music2");
const music3 = document.getElementById("music3");
const music4 = document.getElementById("music4");

const audioArray = ["./Audio/「1」.mp3", "./Audio/「2」.mp3", "./Audio/「3」.mp3", "./Audio/「4（よん）」.mp3"];
let count = 1;
let intervalId;

// const audio = new Audio(audioArray[count - 1]);
// console.log(audio)

let movingObject = false;
let movingNum1 = false;

let rev_movingObject = false;
let rev_movingNum1 = false;

console.log(movingNum1)
stopbtn.style.display = "none"


// object.addEventListener("click", () => {
//     movingObject = !movingObject;
//     movingObject ? object.classList.add("is-active") :
//         object.classList.remove("is-active");

//     movingNum1 = !movingNum1
//     console.log(movingNum1)

//     if (movingNum1) {
//         countUp()
//         num1.classList.add("is-activenum1");
//     } else {
//         clearInterval(intervalId);
//         num1.classList.remove("is-activenum1");
//     }
// });

// document.addEventListener("keydown", (e) => {
//     if (e.keyCode === 32) {
//         rev_movingObject = !rev_movingNum1;
//         rev_movingObject ? object.classList.add("rev_is-active") :
//             object.classList.remove("rev_is-active");

//         rev_movingNum1 = !rev_movingNum1
//         console.log(movingNum1)

//         if (rev_movingNum1) {
//             countUp()
//             num1.classList.add("rev_is-activenum1");
//         } else {
//             clearInterval(intervalId);
//             num1.classList.remove("rev_is-activenum1");
//         }
//     }
// });

rightbtn.addEventListener("click", () => {
    movingObject = true;
    movingNum1 = true;
    object.classList.add("is-active");
    num1.classList.add("is-activenum1");
    countUp();


    // audio.play();
    console.log(music1.volume)
    rightbtn.style.display = "none"
    leftbtn.style.display = "none"
    stopbtn.style.display = "block"

    // movingObject = !movingObject;
    // movingObject ? object.classList.add("is-active") :
    //     object.classList.remove("is-active");

    // movingNum1 = !movingNum1
    // console.log(movingNum1)

    // if (movingNum1) {
    //     countUp()
    //     num1.classList.add("is-activenum1");
    // } else {
    //     clearInterval(intervalId);
    //     num1.classList.remove("is-activenum1");
    // }
});

leftbtn.addEventListener("click", (e) => {
    movingObject = true;
    movingNum1 = true;
    object.classList.add("rev_is-active");
    num1.classList.add("rev_is-activenum1");
    countUp();
    rightbtn.style.display = "none"
    leftbtn.style.display = "none"
    stopbtn.style.display = "block"

    // rev_movingObject = !rev_movingNum1;
    // rev_movingObject ? object.classList.add("rev_is-active") :
    //     object.classList.remove("rev_is-active");

    // rev_movingNum1 = !rev_movingNum1
    // console.log(movingNum1)

    // if (rev_movingNum1) {
    //     countUp()
    //     num1.classList.add("rev_is-activenum1");
    // } else {
    //     clearInterval(intervalId);
    //     num1.classList.remove("rev_is-activenum1");
    // }
});

stopbtn.addEventListener("click", () => {
    object.classList.remove("rev_is-active");
    object.classList.remove("is-active");
    num1.classList.remove("rev_is-activenum1");
    num1.classList.remove("is-activenum1");
    clearInterval(intervalId);
    rightbtn.style.display = "block"
    leftbtn.style.display = "block"
    stopbtn.style.display = "none"
    // audio.pause();


})


let isRunning = false;


const countUp = () => {
    const text = num1.textContent = count;
    const audio = new Audio(audioArray[count - 1]);
    audio.play()

    count++;
    intervalId = setTimeout(countUp, 1000);
    if (count > 4) {
        count = 1;
    }

};
