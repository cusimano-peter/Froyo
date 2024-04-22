function countFroyoFlavors() {
    let userInput = prompt("Please enter a list of comma-separated froyo flavors:");
    let flavorsArray = userInput.split(',');

    let flavorsCount = {};

    for (let flavor of flavorsArray) {
        flavor = flavor.trim();
        if (flavorsCount[flavor]) {
            flavorsCount[flavor]++;
        } else {
            flavorsCount[flavor] = 1;
        }
    }

    console.table(flavorsCount); 
}

countFroyoFlavors();
