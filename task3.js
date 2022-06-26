const createEmpty = () => Object.create(null);

var obj = createEmpty();
console.log(obj);
console.log(Object.getPrototypeOf(obj));
