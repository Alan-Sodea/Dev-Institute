// Function Declaration
function kgToGramsDecl(kg) {
    return kg * 1000;
}
console.log(kgToGramsDecl(5)); // 5000

// Function Expression
const kgToGramsExpr = function(kg) {
    return kg * 1000;
};
console.log(kgToGramsExpr(5)); // 5000

// Arrow Function
const kgToGramsArrow = kg => kg * 1000;
console.log(kgToGramsArrow(5)); // 5000

// Comment: Function declarations are hoisted, so they can be called before they are defined. Function expressions and arrow functions are not hoisted.
``
