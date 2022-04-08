//Images the user can interact with
const dogImage = document.getElementById("dogImage");
const catImage = document.getElementById("catImage");
const mouseImage = document.getElementById("mouseImage");
//Pet Elements
const happinessBar = document.querySelector("#happinessBar");
//Buttons
const playBtn = document.querySelector("#playBtn");
const feedBtn = document.querySelector('#feedBtn');
const washBtn = document.querySelector('#washBtn');
//Starting state of webpage elements
choosePet.style.display = "flex";
petUI.style.display = "none";
//variables that will be updated


const petDisplay = () => {
    choosePet.style.display = "none";
    petUI.style.display = "flex";
}

const decreaseHappiness = () => {
    const intervalId = setInterval(reduceBar, 1000);
    function reduceBar() {
        happinessBar.value--;
     }
 };
 

class Animal {
    constructor(name){
        this._name = 
        this._hunger = 50;
        this._happiness = 50;
        this._tiredness = 50;
        this._favFood = "";
    }

    feed() {
        happinessBar.value += 15;
        petResponse.textContent = "FOOOOOD"
    }

    wash() {
        happinessBar.value -= 10;
        petResponse.textContent = "They hate washing!"
    }
}

class Mouse extends Animal {
        play () {
            happinessBar.value += 10;
            petResponse.textContent = "Jerry loves to play... as long as there's no mouse traps involved!"
        }
    }

class Cat extends Animal {

        play(){
            happinessBar.value -= 10;
            petResponse.textContent = "Tom does not want to be disturbed!"
            petImg.src = "images/sleepy-tom-512x512.png"
        }
    }
    
class Dog extends Animal {

        play(){
            happinessBar.value -= 20;
            petResponse.textContent = "Spike hates playing!"
        }
    }

mouseImage.addEventListener("click", () => {
    petDisplay();
    petImg.src = "images/Jerry_Mouse.png";
    pet = new Mouse();
    decreaseHappiness();
})

dogImage.addEventListener("click", () => {
    choosePet.style.display = "none";
    petUI.style.display = "flex";
    petImg.src = "images/Tom_and_Jerry_eeZee_029.webp";
    pet = new Dog();
    decreaseHappiness()
})

catImage.addEventListener("click", () => {
    choosePet.style.display = "none";
    petUI.style.display = "flex";
    petImg.src = "images/Tom_Cat.webp";
    pet = new Cat();
    decreaseHappiness()
})

playBtn.addEventListener("click", () => {
    pet.play();
})

feedBtn.addEventListener("click", () => {
    pet.feed();
})

washBtn.addEventListener("click", () => {
    pet.wash();
})

newPet.addEventListener("click", () => {
    window.location.reload()
    })