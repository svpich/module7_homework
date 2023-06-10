const toyota = {
    model: "toyota",
    manufacturerСountry: "japan"
}

const carina = Object.getPrototypeOf(toyota);
carina.color = "red";

showProperty(carina);

function showProperty(obj) {
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`${key}: ${obj[key]}`);
        }
    }
}
