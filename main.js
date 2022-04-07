const dogImage = document.getElementById("dogImage");
const catImage = document.getElementById("catImage");


//Buttons
const  playBtn = document.getElementById("#playBtn")
const feedBtn = document.getElementById('#feedBtn')
const washBtn = document.getElementById('#washBtn')

choosePet.style.display = "flex";
petUI.style.display = "none";

const ownerName = () => {
}


dogImage.addEventListener("click", () => {
    choosePet.style.display = "none";
    petUI.style.display = "flex";
    petImg.src = "images/Spike_Dog.png";
    decreaseHappiness()
})

catImage.addEventListener("click", () => {
    choosePet.style.display = "none";
    petUI.style.display = "flex";
    petImg.src = "images/Tom_Cat.webp";
    decreaseHappiness()
})

mouseImage.addEventListener("click", () => {
    choosePet.style.display = "none";
    petUI.style.display = "flex";
    petImg.src = "images/Jerry_Mouse.png";
    decreaseHappiness()
})

newPet.addEventListener("click", () => {
    window.location.reload()
    });

const decreaseHappiness = () => {
    const intervalId = setInterval(reduceBar, 1000);
    function reduceBar() {
        happinessBar.value--;
     }
 };
 

class Animal {
    constructor(name){
        this._name = name;
        this._hunger = 50;
        this._happiness = 50;
        this._tiredness = 50;
    }

    feed() {
        happinessBar.value += 25;
        petResponse.textContent = ""
    }

    wash() {
        happinessBar.value -= 10;
        petResponse.textContent = ""
    }
}


class Mouse extends Animal {
    constructor(name) {
        play (); {
            happinessBar.value += 10;
            petEmotion.textContent = "Jerry loves to play... as long as there's no mouse traps involved!"
        }
    }
}

class Cat extends Animal {
    constructor(name) {
        play(); {
            happinessBar.value -= 10;
            petEmotion.textContent = "Tom does not want to be disturbed"
        }
    }
}

class Dog extends Animal {
    constructor(name) {
        play(); {
            happinessBar.value -= 10;
            petEmotion.textContent = "Spike hates playing!"
        }
    }
}