let x = 1;
switch (typeof x){
    case "string":
        console.log(x+" — строка");
        break;
    case "number":
        console.log(x+" — число");
        break;
    case "boolean":
        console.log(x+" — логический тип");
        break;
    default:
        console.log("Тип x не определён");
}