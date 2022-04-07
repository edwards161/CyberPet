const dogImage = document.getElementById("dogImage");
const catImage = document.getElementById("catImage");


choosePet.style.display = "flex";
petUI.style.display = "none";

class Animal {
    constructor(name){
        this._name = name;
        this._hunger = 50;
        this._happiness = 50;
    }
}

dogImage.addEventListener("click", () => {
    choosePet.style.display = "none";
    petUI.style.display = "flex";
    petImg.src = "images/Tom_and_Jerry_eeZee_029.webp";
})

catImage.addEventListener("click", () => {
    choosePet.style.display = "none";
    petUI.style.display = "flex";
    petImg.src = "images/Tom_Cat.webp";
})

mouseImage.addEventListener("click", () => {
    choosePet.style.display = "none";
    petUI.style.display = "flex";
    petImg.src = "images/Jerry_Mouse.png";
})

newPet.addEventListener("click", () => {
    choosePet.style.display ="flex";
    petUI.style.display = "none";
})

