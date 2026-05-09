const object = document.getElementById("object");
const num1 = document.getElementById("Num1");
const rightbtn = document.getElementById("rightbtn");
const leftbtn = document.getElementById("leftbtn");
const stopbtn = document.getElementById("stopbtn");
const audioArray = ["./Audio/audio_right/「1」.mp3","./Audio/audio_right/「2」.mp3","./Audio/audio_right/「3」.mp3","./Audio/audio_right/「4（よん）」.mp3"];
const audioArray2 = ["./Audio/audio_left/「1」 (1).mp3", "./Audio/audio_left/「2」 (1).mp3", "./Audio/audio_left/「3」 (1).mp3", "./Audio/audio_left/「4（よん）」 (1).mp3"];

let count = 1;
let intervalId;
let movingObject = false;
let movingNum1 = false;
let rev_movingObject = false;
let rev_movingNum1 = false;

console.log(movingNum1)
stopbtn.style.display = "none"

rightbtn.addEventListener("click", () => {
    countUp();
    movingObject = true;
    movingNum1 = true;
    object.classList.add("is-active");
    num1.classList.add("is-activenum1");
    rightbtn.style.display = "none"
    leftbtn.style.display = "none"
    stopbtn.style.display = "block"
});

leftbtn.addEventListener("click", (e) => {
    countUp2();
    movingObject = true;
    movingNum1 = true;
    object.classList.add("rev_is-active");
    num1.classList.add("rev_is-activenum1");
    rightbtn.style.display = "none"
    leftbtn.style.display = "none"
    stopbtn.style.display = "block"
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
})

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

const countUp2 = () => {
    const text = num1.textContent = count;
    const audio2 = new Audio(audioArray2[count - 1]);
    audio2.play()

    count++
    intervalId = setTimeout(countUp2, 1000);
    if (count > 4) {
        count = 1;
    }
};
