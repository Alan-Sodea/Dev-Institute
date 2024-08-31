const displayGroceries = () => {
    groceries.fruits.forEach(fruit => {
        console.log(fruit);
    });
};


const cloneGroceries = () => {
    // 1. Copy the client variable
    let user = client;  // 'user' is a copy of 'client'
    
    // 2. Change 'client' and observe if 'user' changes
    client = "Betty";
    console.log("client:", client);  // Output: Betty
    console.log("user:", user);      // Output: John

    // 3. Copy the groceries object
    let shopping = { ...groceries }; // Use spread operator to create a shallow copy
    
    // 4. Change 'totalPrice' and observe if 'shopping' changes
    shopping.totalPrice = "35$";
    console.log("groceries.totalPrice:", groceries.totalPrice); // Output: 20$
    console.log("shopping.totalPrice:", shopping.totalPrice);   // Output: 35$

    // 5. Change 'paid' and observe if 'shopping' changes
    shopping.other.paid = false;
    console.log("groceries.other.paid:", groceries.other.paid); // Output: false
    console.log("shopping.other.paid:", shopping.other.paid);   // Output: false
};

// Invoke the function
cloneGroceries();
