// #1
function funcOne() {
    let a = 5;
    if (a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}

// #1.1 - run in the console:
funcOne()
// Prediction: The alert will show "inside the funcOne function 3" because `a` is updated to 3 within the `if` block.

// #1.2 What will happen if the variable is declared with const instead of let ?
/* If `const` is used instead of `let`, the code will throw an error because `const` variables cannot be reassigned. */

// #2
let r = 0;
function funcTwo() {
    r = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// #2.1 - run in the console:
funcThree() // Alert shows "inside the funcThree function 0"
funcTwo()
funcThree() // Alert shows "inside the funcThree function 5"
// Prediction: The first alert will show 0 because `a` is initially 0. After `funcTwo` is called, `a` becomes 5, so the second alert will show 5.

// #2.2 What will happen if the variable is declared with const instead of let ?
/* If `const` is used, `a` cannot be reassigned, so the code will throw an error when trying to assign `a = 5` in `funcTwo`. */

// #3
function funcFour() {
    window.a = "hello";
}

function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1 - run in the console:
funcFour()
funcFive()
// Prediction: The alert will show "inside the funcFive function hello" because `window.a` is set to "hello" in `funcFour`, which makes `a` available globally.

// #4
let z = 1;
function funcSix() {
    let z = "test";
    alert(`inside the funcSix function ${a}`);
}

// #4.1 - run in the console:
funcSix()
// Prediction: The alert will show "inside the funcSix function test" because the `a` inside `funcSix` is different from the global `a`, and it has the value "test".

// #4.2 What will happen if the variable is declared with const instead of let ?
/* If `const` is used inside `funcSix`, it will work the same way as `let` in this context. The `a` inside `funcSix` is a block-scoped constant, not affecting the global `a`. */

// #5
let a = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console
// Prediction: The first alert will show "in the if block 5" because the `a` inside the `if` block is 5. The second alert will show "outside of the if block 2" because the `a` outside the `if` block is still 2.

// #5.2 What will happen if the variable is declared with const instead of let ?
/* If `const` is used instead of `let`, it would behave the same way. The `const` inside the `if` block would shadow the outer `const`. */
