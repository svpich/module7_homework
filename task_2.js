user = {
    firstName: "Ivan"
}

console.log(checkProperty("firstName", user));
console.log(checkProperty("lastName", user));

function checkProperty(prop, obj) {
    for (const key in obj) {
        if (key === prop) {
            return true;
        }
        return false;
    }
}
