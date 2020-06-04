function play() {
    let year = document.getElementById("myYear").value;
    document.getElementById("yearRes").innerHTML = year;
    document.getElementById("zooRes").innerHTML = getZoo(year);
    document.getElementById("colorRes").innerHTML = getColor(year, 0);
    document.getElementById("elemRes").innerHTML = getColor(year, 1);
}

function yearPlus(year) {
    return Number(year) + 1;
}

function getZoo (year) {
    let zoo = "";
    let oYear = Number(year) % 12;

    switch(oYear) {
        case 0: zoo = "Monkey"; break;
        case 1: zoo = "Rooster"; break;
        case 2: zoo = "Dog"; break;
        case 3: zoo = "Pig"; break;
        case 4: zoo = "Rat"; break;
        case 5: zoo = "Ox"; break;
        case 6: zoo = "Tiger"; break;
        case 7: zoo = "Rabbit"; break;
        case 8: zoo = "Dragon"; break;
        case 9: zoo = "Snake"; break;
        case 10: zoo = "Horse"; break;
        case 11: zoo = "Sheep"; break;
        default: zoo = "Secret animal from the secret year"; break;
    }

    return zoo;
}

function getColor (year, info) {
    let color = "";
    let elem = "";
    let oYear = Number(year) % 10;

    switch (oYear) {
        case 0: color = "White "; elem = "Metal"; break;
        case 1: color = "White "; elem = "Metal"; break;
        case 2: color = "Black "; elem = "Water"; break;
        case 3: color = "Black "; elem = "Water"; break;
        case 4: color = "Green "; elem = "Tree"; break;
        case 5: color = "Green "; elem = "Tree"; break;
        case 6: color = "Red "; elem = "Fire"; break;
        case 7: color = "Red "; elem = "Fire"; break;
        case 8: color = "Brown "; elem = "Earth"; break;
        case 9: color = "Brown "; elem = "Earth"; break;
    }

    if (!info) return color;
    else return elem;
}
