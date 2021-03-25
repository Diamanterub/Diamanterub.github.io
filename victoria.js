//ALL THE VARIABLES

let rubber = false;
let sulfur = false;
let iron = false;
let fish = false;
let cattle = false;
let grain = false;
let coal = false;
let timber = false;
let cotton = false;
let oil = false;
let silk = false;
let tropicalWood = false;
let fruit = false;
let eletricGear = false;
let machineParts = false;
let steel = false;
let explosives = false;
let automobiles = false;
let lumber = false;
let fabric = false;
let fertilizer = false;
let ammunition = false;
let dye = false;
let glass = false;
let regularClothes = false;
let furniture = false;

let card = document.getElementById("card")

function search() {

    card.innerHTML = ""

    //Get if the checkbox is selected or not

    rubber = document.getElementById("rubber");
    sulfur = document.getElementById("sulfur");
    iron = document.getElementById("iron");
    fish = document.getElementById("fish");
    cattle = document.getElementById("cattle");
    grain = document.getElementById("grain");
    coal = document.getElementById("coal");
    timber = document.getElementById("timber");
    cotton = document.getElementById("cotton");
    oil = document.getElementById("oil");
    silk = document.getElementById("silk");
    tropicalWood = document.getElementById("troWood");
    fruit = document.getElementById("fruit");
    eletricGear = document.getElementById("eletricGear");
    machineParts = document.getElementById("machineParts");
    steel = document.getElementById("steel");
    explosives = document.getElementById("explosives");
    automobiles = document.getElementById("automobiles");
    lumber = document.getElementById("lumber");
    fabric = document.getElementById("fabric");
    fertilizer = document.getElementById("fertilizer");
    ammunition = document.getElementById("ammunition");
    dye = document.getElementById("dye");
    glass = document.getElementById("glass");
    regularClothes = document.getElementById("rc");
    furniture = document.getElementById("furniture");

    ///////

    // Factories

    // He checks if the certain materials are selected if yes then he goes to get that certain factory based on the other materials selected
    // && significa e  (Lógica)
    // || significa OU (Lógica)

    //RUBBER

    if (rubber.checked == true) {
        cardMaker("aeroplane")
        cardMaker("automobile")
        cardMaker("tank")
        cardMaker("eletricgear")
    }
    if (sulfur.checked == true) {
        cardMaker("ammunation");
        cardMaker("fertilizer");
    }
    if (iron.checked == true) {
        cardMaker("ammunation");
        cardMaker("cannedfood");
        cardMaker("eletricgear");
        cardMaker("steel");
    }
    if (fish.checked == true || cattle.checked == true) {
        cardMaker("cannedfood");
    }
    if (grain.checked == true) {
        cardMaker("cannedfood");
        cardMaker("liquor")

    }
    if (coal.checked == true) {
        cardMaker("cemment");
        cardMaker("dye");
        cardMaker("eletricgear");
        cardMaker("glass");
        cardMaker("machineparts");
        cardMaker("steamer");
        cardMaker("steel");
        cardMaker("oil");

    }
    if (timber.checked == true) {
        cardMaker("clipper");
        cardMaker("furniture");
        cardMaker("lumber");
        cardMaker("paper");

    }
    if (cotton.checked == true || dye.checked == true) {
        cardMaker("fabric");

    }
    if (oil.checked == true) {
        cardMaker("fuel")
    }
    if (silk.checked == true || regularClothes.checked == true) {
        cardMaker("luxuryclothes");
    }

    if (tropicalWood.checked == true || furniture.checked == true) {
        cardMaker("luxuryfurniture")
    }
    if (fruit.checked == true) {
        cardMaker("winery")
    }
    if (eletricGear.checked == true) {
        cardMaker("aeroplane");
        cardMaker("automobile");
        cardMaker("tank");
        cardMaker("radio")
        cardMaker("telephone")
    }
    if (machineParts.checked == true) {
        cardMaker("aeroplane");
        cardMaker("automobile");
        cardMaker("tank");
    }
    if (steel.checked == true) {
        cardMaker("artillery");
        cardMaker("automobile");
        cardMaker("clipper");
        cardMaker("machineparts");
        cardMaker("smallarms");
        cardMaker("steamer");
    }
    if (explosives.checked == true) {
        cardMaker("artillery");
    }
    if (automobiles.checked == true) {
        cardMaker("tank");
    }
    if (lumber.checked == true) {
        cardMaker("aeroplane");
        cardMaker("furniture");
    }
    if (fabric.checked == true) {
        cardMaker("clipper");
        cardMaker("regularclothes");
    }
    if (fertilizer.checked == true) {
        cardMaker("explosives");

    }
    if (ammunition.checked == true) {
        cardMaker("explosives")
        cardMaker("smallarms")
    }
    if (glass.checked == true) {
        cardMaker("liquor")
        cardMaker("radio")
        cardMaker("telephone")
        cardMaker("winery")
    }
}

function cardMaker(Factory) {


    let material1 = "";
    let material2 = "";
    let material3 = "";
    let material4 = "";

    //Basicly getting the images on the cards 
    //This is the process of selecting the materials
    switch (Factory) {
        case "aeroplane":
            material1 = `<img src="../Images/28px-Resource_rubber.png" alt="error">`
            material2 = `<img src="../Images/28px-Resource_electric_parts.png" alt="error">`
            material3 = `<img src="../Images/28px-Resource_lumber.png" alt="error">`
            material4 = `<img src="../Images/28px-Resource_machine_parts.png" alt="error">`
            //Renaming for css
            Factory = "Aeroplane Factory"

            break;
        case "ammunation":
            material1 = `<img src="../Images/28px-Sulphur.png" alt="error">`
            material2 = `<img src="../Images/28px-Iron.png" alt="error">`
            Factory = "Ammunation Factory"

            break;

        case "artillery":
            material1 = `<img src="../Images/28px-Resource_steel.png" alt="error">`
            material2 = `<img src="../Images/28px-Resource_explosives.png" alt="error">`
            Factory = "Artillery Factory"

            break;
        case "automobile":
            material1 = `<img src="../Images/28px-Resource_rubber.png" alt="error">`
            material2 = `<img src="../Images/28px-Resource_electric_parts.png" alt="error">`
            material3 = `<img src="../Images/28px-Resource_steel.png" alt="error">`
            material4 = `<img src="../Images/28px-Resource_machine_parts.png" alt="error">`
            Factory = "Automobile Factory"
            break;
        case "tank":
            material1 = `<img src="../Images/28px-Resource_rubber.png" alt="error">`
            material2 = `<img src="../Images/28px-Resource_electric_parts.png" alt="error">`
            material3 = `<img src="../Images/28px-Resource_machine_parts.png" alt="error">`
            material4 = `<img src="../Images/28px-Resource_automobiles.png" alt="error">`
            Factory = "Tank Factory"

            break;
        case "cannedfood":
            material1 = `<img src="../Images/28px-Fish.png" alt="error">`
            material2 = `<img src="../Images/28px-Cattle.png" alt="error">`
            material3 = `<img src="../Images/28px-Grain.png" alt="error">`
            material4 = `<img src="../Images/28px-Iron.png" alt="error">`
            Factory = "Canned Food Factory"

            break;
        case "cemment":
            material1 = `<img src="../Images/28px-Coal.png" alt="error">`
            Factory = "Cemment Factory"

            break;
        case "clipper":
            material1 = `<img src="../Images/28px-Timber.png" alt="error">`
            material2 = `<img src="../Images/28px-Resource_cloth.png" alt="error">`
            material3 = `<img src="../Images/28px-Resource_steel.png" alt="error">`
            Factory = "Clipper Shipyard"

            break;
        case "dye":
            material1 = `<img src="../Images/28px-Coal.png" alt="error">`
            Factory = "Dye Factory"

            break;
        case "eletricgear":
            material1 = `<img src="../Images/28px-Resource_rubber.png" alt="error">`
            material2 = `<img src="../Images/28px-Coal.png" alt="error">`
            material3 = `<img src="../Images/28px-Iron.png" alt="error">`
            Factory = "Electric Gear Factory"

            break;
        case "explosives":
            material1 = `<img src="../Images/28px-Resource_fertilizer.png" alt="error">`
            material2 = `<img src="../Images/28px-Resource_ammunition.png" alt="error">`
            Factory = "Explosives Factory"

            break;
        case "fabric":
            material1 = `<img src="../Images/28px-Cotton.png" alt="error">`
            material2 = `<img src="../Images/28px-Dye.png" alt="error">`
            Factory = "Fabric Factory"

            break;
        case "fertilizer":
            material1 = `<img src="../Images/28px-Sulphur.png" alt="error">`
            Factory = "Fertilizer Factory"

            break;
        case "fuel":
            material1 = `<img src="../Images/28px-Resource_oil.png" alt="error">`
            Factory = "Fuel Refinery"

            break;
        case "furniture":
            material1 = `<img src="../Images/28px-Timber.png" alt="error">`
            material2 = `<img src="../Images/28px-Resource_lumber.png" alt="error">`
            Factory = "Furniture Factory"

            break;
        case "glass":
            material1 = `<img src="../Images/28px-Coal.png" alt="error">`
            Factory = "Glass Factory"

            break;
        case "liquor":
            material1 = `<img src="../Images/28px-Resource_glass.png" alt="error">`
            material2 = `<img src="../Images/28px-Grain.png" alt="error">`
            Factory = "Liquor Distillery"

            break;
        case "lumber":
            material1 = `<img src="../Images/28px-Timber.png" alt="error">`
            Factory = "Lumber Mill"

            break;
        case "luxuryclothes":
            material1 = `<img src="../Images/28px-Resource_regular_clothes.png" alt="error">`
            material2 = `<img src="../Images/28px-Silk.png" alt="error">`
            Factory = "Luxury Clothes Factory"

            break;
        case "luxuryfurniture":
            material1 = `<img src="../Images/28px-Resource_furniture.png" alt="error">`
            material2 = `<img src="../Images/28px-Tropical_wood.png" alt="error">`
            Factory = "Luxury Furniture Factory"

            break;
        case "machineparts":
            material1 = `<img src="../Images/28px-Coal.png" alt="error">`
            material2 = `<img src="../Images/28px-Resource_steel.png" alt="error">`
            Factory = "Machine Parts Factory"

            break;
        case "paper":
            material1 = `<img src="../Images/28px-Timber.png" alt="error">`
            Factory = "Paper Mill"

            break;
        case "radio":
            material1 = `<img src="../Images/28px-Resource_electric_parts.png" alt="error">`
            material2 = `<img src="../Images/28px-Resource_glass.png" alt="error">`
            Factory = "Radio Factory"

            break;
        case "regularclothes":
            material1 = `<img src="../Images/28px-Resource_cloth.png" alt="error">`
            Factory = "Regular Clothes Factory"

            break;
        case "smallarms":
            material1 = `<img src="../Images/28px-Resource_ammunition.png" alt="error">`
            material2 = `<img src="../Images/28px-Resource_steel.png" alt="error">`
            Factory = "Small Arms Factory"

            break;
        case "steamer":
            material1 = `<img src="../Images/28px-Coal.png" alt="error">`
            material2 = `<img src="../Images/28px-Resource_steel.png" alt="error">`
            Factory = "Steamer Shipyard"

            break;
        case "steel":
            material1 = `<img src="../Images/28px-Coal.png" alt="error">`
            material2 = `<img src="../Images/28px-Iron.png" alt="error">`
            Factory = "Steel Factory"

            break;
        case "oil":
            material1 = `<img src="../Images/28px-Coal.png" alt="error">`
            Factory = "Oil Factory"

            break;
        case "telephone":
            material1 = `<img src="../Images/28px-Resource_electric_parts.png" alt="error">`
            material2 = `<img src="../Images/28px-Resource_glass.png" alt="error">`
            Factory = "Telephone Factory"

            break;
        case "winery":
            material1 = `<img src="../Images/28px-Fruit.png" alt="error">`
            material2 = `<img src="../Images/28px-Resource_glass.png" alt="error">`
            Factory = "Winery"

            break;

        default:
            console.log("Error")
            Factory = "Factory Not found"
            break;
    }

    //For no duplicates
    //He checks if there any old searched factory with the same name of the new factory
    if (card.innerHTML.includes(Factory)) {

    } else {
        card.innerHTML += `
    <div class="card" style="width: 18rem;padding-botton:10px">
                     
                     <div class="card-body">
                       <h5 class="card-title">${Factory}</h5>
                       <p></p>
                       <p class="card-text">
                       ${material1}
                       ${material2}
                       ${material3}
                       ${material4}
                       </p>
                     </div>
                     
                 </div>
                <div style="height:5px;"></div>
    `

    }

}

 window.onload = function nightModeUpdate () {
     //When you load the page he decides between normal theme or dark mode
     let today = new Date()
     let time = today.getHours()
     if (time >= 18 || time <= 8) {
         let body = document.body;
         body.classList.toggle("dark-mode");
     }
 }
 