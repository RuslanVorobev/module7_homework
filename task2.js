function hasProperty(propName, obj) {
    return propName in obj;
}

const person = {
    name: "john",
    city: "Moscow"
}

console.log(hasProperty("name", person));
