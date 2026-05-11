const object = document.getElementById("object");
const num1 = document.getElementById("Num1");
const rightbtn = document.getElementById("rightbtn");
const leftbtn = document.getElementById("leftbtn");
const stopbtn = document.getElementById("stopbtn");

const audioSrcRight = [
    "./Audio/audio_right/「1」.mp3",
    "./Audio/audio_right/「2」.mp3",
    "./Audio/audio_right/「3」.mp3",
    "./Audio/audio_right/「4（よん）」.mp3"
];

const audioSrcLeft = [
    "./Audio/audio_left/「1」 (1).mp3",
    "./Audio/audio_left/「2」 (1).mp3",
    "./Audio/audio_left/「3」 (1).mp3",
    "./Audio/audio_left/「4（よん）」 (1).mp3"
];

const audioRight = audioSrcRight.map((src) => {
    const a = new Audio(src);
    a.load();
    return a;
});

const audioLeft = audioSrcLeft.map((src) => {
    const a = new Audio(src);
    a.load();
    return a;
});

let audioUnlocked = false;
const unlockAudio = () => {
    if (audioUnlocked) return;
    audioUnlocked = true;

    // const silent = new Audio(
    //     "data:audio/mp3;base64,//uQxAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAACAAACcQCA"
    // );

    // silent.play().then(() => silent.pause());
};

let count = 1;
let intervalId;

stopbtn.style.display = "none"

const startRotation = (direction) => {
    if (direction === "right") {
        object.classList.add("is-active");
        num1.classList.add("is-activenum1");
        countUpRight();
    } else {
        object.classList.add("rev_is-active");
        num1.classList.add("rev_is-activenum1");
        countUpLeft();
    }
    rightbtn.style.display = "none"
    leftbtn.style.display = "none"
    stopbtn.style.display = "block"
}

const stopRotation = () => {
    object.classList.remove("is-active", "rev_is-active");
    num1.classList.remove("is-activenum1", "rev_is-activenum1");
    clearInterval(intervalId);

    rightbtn.style.display = "block"
    leftbtn.style.display = "block"
    stopbtn.style.display = "none"
}

//右回転
rightbtn.addEventListener("click", () => {
    unlockAudio();
    startRotation("right")
});

//左回転
leftbtn.addEventListener("click", () => {
    unlockAudio();
    startRotation("left")
});

//停止
stopbtn.addEventListener("click", stopRotation)



const countUpRight = () => {
    num1.textContent = count;

    const audio = audioRight[count - 1];
    audio.currentTime = 0;
    audio.play();

    count++;
    if (count > 4) count = 1;

    intervalId = setTimeout(countUpRight, 1000)
}

const countUpLeft = () => {
    num1.textContent = count;

    const audio = audioLeft[count - 1];
    audio.currentTime = 0;
    audio.play();

    count++;
    if (count > 4) count = 1;

    intervalId = setTimeout(countUpLeft, 1000)
}


// let movingObject = false;
// let movingNum1 = false;
// let rev_movingObject = false;
// let rev_movingNum1 = false;


// rightbtn.addEventListener("click", () => {
//     countUp();
//     movingObject = true;
//     movingNum1 = true;
//     object.classList.add("is-active");
//     num1.classList.add("is-activenum1");
//     rightbtn.style.display = "none"
//     leftbtn.style.display = "none"
//     stopbtn.style.display = "block"
// });

// leftbtn.addEventListener("click", (e) => {
//     countUp2();
//     movingObject = true;
//     movingNum1 = true;
//     object.classList.add("rev_is-active");
//     num1.classList.add("rev_is-activenum1");
//     rightbtn.style.display = "none"
//     leftbtn.style.display = "none"
//     stopbtn.style.display = "block"
// });

// stopbtn.addEventListener("click", () => {
//     object.classList.remove("rev_is-active");
//     object.classList.remove("is-active");
//     num1.classList.remove("rev_is-activenum1");
//     num1.classList.remove("is-activenum1");
//     clearInterval(intervalId);
//     rightbtn.style.display = "block"
//     leftbtn.style.display = "block"
//     stopbtn.style.display = "none"
// })

// const countUp = () => {
//     const text = num1.textContent = count;
//     const audio = new Audio(audioArray[count - 1]);
//     audio.play()

//     count++;
//     intervalId = setTimeout(countUp, 1000);
//     if (count > 4) {
//         count = 1;
//     }
// };

// const countUp2 = () => {
//     const text = num1.textContent = count;
//     const audio2 = new Audio(audioArray2[count - 1]);
//     audio2.play()

//     count++
//     intervalId = setTimeout(countUp2, 1000);
//     if (count > 4) {
//         count = 1;
//     }
// };
