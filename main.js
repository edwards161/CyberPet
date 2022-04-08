//Images the user can interact with
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
let pet;

const petDisplay = () => {
    choosePet.style.display = "none";
    petUI.style.display = "flex";
}

const decreaseHappiness = () => {
    const intervalId = setInterval(reduceBar, 1000);
    function reduceBar() {
        happinessBar.value--;

        if (happinessBar.value <= 30)
        {
         //   petImg.src = 
        }   
        else if (happinessBar.value >= 70) {
        //    petImg.src = `images/${pet._name}_Mouse.png`
        }
     } 
 };
 
class Animal {
    constructor(name){
        this._name = "";
        this._hunger = 50;
        this._happiness = 50;
        this._tiredness = 50;
        this._favFood = "";
        this._mood = "";
    }

    feed() {
        happinessBar.value += 20;
        this._hunger += 20;
        this._mood = "food";
        petResponse.textContent = `mmmm...FOOOOOD!!!`
        if (this._hunger >= 80) {
            petResponse.textContent = `${pet._name} is not hungry anymore.`}
            petImg.src = `/images/${pet._name}-${pet._mood}.png`
        }
    

    wash() {
        happinessBar.value -= 20;
        this._hunger -= 20;
        this._mood = "angry";
        petResponse.textContent = `${pet._name} hates Bath Time`
        petImg.src = `/images/${pet._name}-${pet._mood}.png`
    }
}

class Mouse extends Animal {
    constructor(name){
        super(name)
        this._name = "Jerry";
    }
        play () {
            happinessBar.value += 10;
            this._hunger +=10;
            petResponse.textContent = "Jerry loves to play... as long as there's no mouse traps involved!"
            petImg.src = "/images/jerry-play.png"
        }
    }

class Cat extends Animal {
    constructor(name){
        super(name)
        this._name = "Tom";
    }
        play(){
            happinessBar.value -= 10;
            petResponse.textContent = "Tom does not want to be disturbed!"
            petImg.src = "/images/sleepy-tom-512x512.png"
        }
    }
    
class Dog extends Animal {
    constructor(name){
        super(name)
        this._name = "Spike";
    }
        play(){
            happinessBar.value -= 20;
            petResponse.textContent = "Spike barks!"
            petImg.src = "/images/spike-play.png"
        }
    }

mouseImage.addEventListener("click", () => {
    petDisplay();
    petImg.src = "/images/Jerry_Mouse.png";
    pet = new Mouse();
    decreaseHappiness();
})

dogImage.addEventListener("click", () => {
    choosePet.style.display = "none";
    petUI.style.display = "flex";
    petImg.src = "/images/Tom_and_Jerry_eeZee_029.webp";
    pet = new Dog();
    decreaseHappiness()
})

catImage.addEventListener("click", () => {
    choosePet.style.display = "none";
    petUI.style.display = "flex";
    petImg.src = "/images/Tom_Cat.webp";
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

