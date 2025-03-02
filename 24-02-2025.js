//1. What will the output be for the following code?
function test(callback1, callback2) {
    callback1();
    console.log("2");
    callback1();
    console.log("8");
    callback2();
    console.log("9");
    callback2();
}
test(() => console.log("3"), () => console.log("6"));    // 3238696

//2. What will the following code output?
function calculate(callback) {
    let result = callback(5, 15, 25);
    console.log(result);
}
calculate(function (x, y, z) {
    return x * y - z;
});                                                    // 50

//. What is the value of result in this code?
function sumValues(callback) {
    let result = callback(2, 3, 4);
    console.log(result);
}
sumValues((a, b, c) => a + b * c);                  // 14

//4. What is printed to the console?
function print(callback) {
    callback();
    console.log("Finished");
}
print(() => console.log("Started"));    ////// started  // finished


//5. What is the output of this function?
function execute(callback1, callback2) {
    callback1();
    console.log("Middle");
    callback2();
}
execute(() => console.log("First"), () => console.log("Second"));  // First Middle Second

//6. What will console.log output in this example?
function operation(callback) {
    let result = callback(8, 4);
    console.log(result);
}
operation((a, b) => a / b);                                     // 2

//7. What does the following code print?
function runProcess(callback) {
    callback();
    console.log("Running...");
}
runProcess(() => console.log("Started"));            // Started // Running .... 
runProcess(() => console.log("In Progress"));        //In Progress  // Running .... 


//8. What is the output for this function?
function calc(callback) {
    let result = callback(10, 5);
    console.log(result);
}
calc(function (x, y) {
    return x - y;
});                                              // 5



//9. What will console.log print?
function getResult(callback) {
    let result = callback(6, 2);
    console.log(result);
}
getResult((a, b) => a % b);                // 0


//10. What is the value of result in this code?
function compute(callback) {
    let result = callback(7, 9, 3);
    console.log(result);
}
compute((a, b, c) => (a * b) / c);            //  21

//11. What will the console output be?
function process(callback) {
    callback();
    console.log("Processed");
}
process(() => console.log("Initializing"));            // Initializing // Processed


//12. What is the value of result printed in this code?
function sum(callback) {
    let result = callback(12, 8, 4);
    console.log(result);
}
sum((x, y, z) => x + y - z);                  // 16


//13. What will the following code output?
function multiply(callback) {
    let result = callback(3, 5);
    console.log(result);
}
multiply((x, y) => x * y);                      // 15

//14. What is the value of result in this function?
function subtract(callback) {
    let result = callback(9, 4);
    console.log(result);
}
subtract((a, b) => a - b);                // 5

//15. What will the code print?
function execute(callback1, callback2) {
    callback1();
    console.log("Step");
    callback2();
}
execute(() => console.log("Start"), () => console.log("End"));    // Start // Step // End


//16. What does the following code print?
function sumValues(callback) {
    let result = callback(2, 4);
    console.log(result);
}
sumValues((x, y) => x + y);                               // 6

//17. What is the result printed?
function divide(callback) {
    let result = callback(20, 4);
    console.log(result);
}
divide((x, y) => x / y);                                // 5


//18. What will be the console output for this code?
function showMessage(callback) {
    callback();
    console.log("Message shown");
}
showMessage(() => console.log("Alert!"));                  // Alert! // Message shown

//19. What does the following code output?
function calculateResult(callback) {
    let result = callback(8, 2, 1);
    console.log(result);
}
calculateResult((a, b, c) => a - b + c);                // 7



//20. What is the value printed for result?
function add(callback) {
    let result = callback(5, 3);
    console.log(result);
}
add((x, y) => x + y);                                 //  8


//21. What will the output be for the following code?
function funcA(callback1, callback2) {
    callback1();
    console.log("A1");
    callback2();
    console.log("A2");
}

function funcB(callback) {
    console.log("B1");
    callback();
    console.log("B2");
}

funcA(() => funcB(() => console.log("Inside B")), () => console.log("End of A")); 

// B1 // Inside B // B2 // A1 // End of A // A2


//22. What will be printed to the console by the following code?
function outerFunc(callback) {
    console.log("Outer Start");
    callback();
    console.log("Outer End");
}

function innerFunc(callback) {
    console.log("Inner Start");
    callback();
    console.log("Inner End");
}

outerFunc(() => innerFunc(() => console.log("Innermost"))); 
  //Outer Start // Inner Start // Innermost // Inner End // Outer End  //



//23. What is the result of the following code execution?
function processA(callback1, callback2) {
    callback1();
    callback2();
    console.log("ProcessA Done");
}     

function processB(callback) {
    console.log("Start ProcessB");
    callback();
    console.log("End ProcessB");
}

processA(() => processB(() => console.log("Inside ProcessB")), () => console.log("End of ProcessA"));

// Start Process B // Inside ProcessB // End ProcessB // End of ProcessA // PRocessA done


//24. What will the following code print?
function action1(callback1, callback2) {
    callback1();
    console.log("Action 1");
    callback2();
}

function action2() {
    console.log("Action 2");
}

function action3(callback) {
    callback();
    console.log("Action 3");
}

action1(() => action3(() => console.log("Start")), action2);   // Start // Action3 // Action 1 // Action 2

//25. What will be the final result of this code?
function step1(callback) {
    console.log("Step 1");
    callback();
}

function step2(callback1, callback2) {
    callback1();
    console.log("Step 2");
    callback2();
}

step2(() => step1(() => console.log("Inner Step 1")), () => console.log("Inner Step 2"));  //Step 1 // Inner step1 // Step2 //Inner step 2 

//26. What does this code print to the console?
function first(callback) {
    console.log("First");
    callback();
}

function second(callback) {
    console.log("Second");
    callback();
}

function third() {
    console.log("Third");
}

first(() => second(third));     // First // Second // Third

//27. What will the following code output?
function alpha(callback1, callback2) {
    console.log("Alpha Start");
    callback1();
    console.log("Alpha Middle");
    callback2();
    console.log("Alpha End");
}

function beta(callback) {
    console.log("Beta Start");
    callback();
    console.log("Beta End");
}

function gamma() {
    console.log("Gamma");
}

alpha(() => beta(gamma), () => console.log("Delta"));    // Alpha Start //  Beta Start // Gamma // Beta End // Alpha Middle // Delta // Alpha End
 
//28. What is the output for this code?
function run1(callback) {
    console.log("Run1 Start");
    callback();
    console.log("Run1 End");
}

function run2(callback1, callback2) {
    console.log("Run2 Start");
    callback1();
    console.log("Run2 Middle");
    callback2();
    console.log("Run2 End");
}

run2(() => run1(() => console.log("Run1 Inner")), () => console.log("Run2 Inner")); 
 // Run2 Start // Run1 Start // Run1 Inner // Run1 End // Run2 Middle  // Run2 Inner // Run2 End


//29. What does the following code print?
function firstAction(callback) {
    console.log("Action 1");
    callback();
}

function secondAction() {
    console.log("Action 2");
}

function thirdAction(callback) {
    console.log("Action 3");
    callback();
}

firstAction(() => thirdAction(secondAction));   // Action 1 // Action 3 // Action 2 

//30. What is printed when the following code is executed?
function start(callback1, callback2) {
    callback1();
    console.log("Start");
    callback2();
}

function middle(callback) {
    console.log("Middle");
    callback();
}

function end() {
    console.log("End");
}

start(() => middle(() => console.log("Beginning")), end);   //  Middle // Beginning // Start // End

//31. What will be the output of the following code?
function funcA(callback1, callback2, callback3) {
    console.log("A1");
    callback1(() => {
        console.log("A2");
        callback2();
        console.log("A3");
    });
    console.log("A4");
    callback3();
}

function funcB(callback) {
    console.log("B1");
    callback();
    console.log("B2");
}

function funcC() {
    console.log("C1");
}

funcA((innerCallback) => funcB(innerCallback), () => console.log("End of B"), funcC);     // A1 //  B1 // A2 // End of B // A3 // B2 // A4 // C1


//32. What will this program print to the console?
function firstStep(callback1, callback2) {
  console.log("First Step Start");
  callback1(() => {
      console.log("First Step Mid");
      callback2();
  });
  console.log("First Step End");
}

function secondStep(callback) {
  console.log("Second Step Start");
  callback();
  console.log("Second Step End");
}

function thirdStep(callback) {
  console.log("Third Step Start");
  callback();
  console.log("Third Step End");
}

firstStep(() => secondStep(() => console.log("Inside Second Step")), () => thirdStep(() => console.log("Inside Third Step")));

//  First Step Start // second step  start // Inside Second Step //  second Step End // First step End



//33. What will be printed by the following code?
function alpha(callback1, callback2, callback3) {
    console.log("Alpha Start");
    callback1(() => {
        console.log("Alpha Mid");
        callback2(() => {
            console.log("Alpha End");
            callback3();
        });
    });
}

function beta(callback) {
    console.log("Beta Start");
    callback();
    console.log("Beta End");
}

function gamma() {
    console.log("Gamma Start");
    console.log("Gamma End");
}

alpha((innerCallback) => beta(innerCallback), (innerCallback) => beta(innerCallback), gamma); 
// Alpha Start // Beta start //  Alpha Mid //Beta Start// Alpha End //  beta start // GAmma start// Gamma End // Beta End // beta end 

//34. What is the result of the following code execution?
function outer(callback1, callback2, callback3) {
    console.log("Outer Start");
    callback1(() => {
        console.log("Outer Mid");
        callback2(() => {
            console.log("Outer End");
            callback3();
        });
    });
}

function middle(callback) {
    console.log("Middle Start");
    callback();
    console.log("Middle End");
}

function inner() {
    console.log("Inner Action");
}

outer((cb) => middle(cb), (cb) => middle(cb), inner); // Outer Start//Middle Start//Outer Mid//Middle Start//Outer End//Inner Action//Middle End//Middle End


//35. What will be the final printed output?
function main(callback1, callback2, callback3) {
    console.log("Main Start");
    callback1(() => {
        console.log("Main Mid");
        callback2(() => {
            console.log("Main End");
            callback3();
        });
    });
}

function sub1(callback) {
    console.log("Sub1 Start");
    callback();
    console.log("Sub1 End");
}

function sub2() {
    console.log("Sub2 Start");
    console.log("Sub2 End");
}

main((cb) => sub1(cb), (cb) => sub1(cb), sub2);  // Main StartSub1 Start//Main Mid//Sub1 Start//Main End//Sub2 Start//Sub2 End/Sub1 End//Sub1 End































