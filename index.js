//ATM Machine By Static Approach:-
//Assume values are predefined.
//simulated user choice for code flow.
//--------------------------------
var pinCode = 1234;
var Current_Balance = 1050000;
var displayInformation = [
    "Current Balance",
    "WithDraw Money",
    "Deposit Amount",
    "View Account Information",
];
var userChoice;
var with_draw_amount = 10000;
var deposit_amount = 50000;
console.log("WelCome To The Bank");
console.log("Enter Your Pin 4-digit Pin Code"); //assuming system checks whether the person is authentic or not.
//Condition Checks:-
//if pin code matches with database stored information related to that pin code then user can access account.
if (pinCode.toString() === "1234") {
    console.log("You Entered Correct PinCode");
    console.log("What Do You Want To Do?", displayInformation);
    //1-  Simulated user choice for demonstration
    // Here , I assume that user wants to check current Balance.
    userChoice = "Current Balance";
    if (userChoice === "Current Balance") {
        console.log("Your Current Balance is ".concat(Current_Balance));
    }
    //2- Simulated user choice for demonstration.
    // Here, I assume that user want to with Draw some money from his/her account.
    userChoice = "WithDraw Money";
    if (userChoice === "WithDraw Money") {
        console.log("Enter Amount Which You Want To Withdraw", with_draw_amount);
        //Here Condition checks that with draw amount is less than or greater than or equal to current Balance.
        if (with_draw_amount <= Current_Balance) {
            Current_Balance = Current_Balance - with_draw_amount; //amount updated
            console.log("You Successfully Withdraw Money");
            //3- Simulated user choice for demonstration
            //Here, I assume that user want to check its available money after withdraw some amount.
            userChoice = "Current Balance";
            if (userChoice === "Current Balance") {
                console.log("Your Remaining Balance After withDraw Money is ".concat(Current_Balance));
            }
        }
        else {
            //this block works when withdraw amount is greater than current balance then system throw below message.
            console.log("Sorry, You Have Insufficient Balance");
        }
    }
    //4- Simulated user choice for demonstration
    //Here, I consider that user want to Deposit some money in his/her account.
    userChoice = "Deposit Money";
    if (userChoice === "Deposit Money") {
        console.log("Enter Amount You Want To Deposit", deposit_amount);
        Current_Balance += deposit_amount; //Balance again updated
        console.log("Do You Want To See Your Remaining Balance?");
        // 5-Simulated user choice for demonstration
        //here i again assume that yes, user want to see current amount after deposit money.
        userChoice = "Current Balance";
        if (userChoice === "Current Balance") {
            console.log("Your Current Balance After Deposit Money is ".concat(Current_Balance));
        }
    }
    //6- Simulated user choice for demonstration
    //This time i assume that user wants his/her account's details.
    userChoice = "View Account Information";
    if (userChoice === "View Account Information") {
        //creating a dynamic function which takes some parameters
        function account_detail(Name, AccountNumber, NIC, Card_Type, Account_Type, Expiration) {
            return "Name: ".concat(Name, ", Account Number: ").concat(AccountNumber, ", NIC: ").concat(NIC, ", Card Type: ").concat(Card_Type, ", Account Type: ").concat(Account_Type, ", Expiration: ").concat(Expiration); //return information in this format as a string.
        }
        console.log("Customer Account Details");
        console.log(account_detail("Huma Mohsin", "0123-4567891234", "45678-9125-1245", "Debit Card", "Current", "July-2025"));
    }
} //closing of main if body
// if entered pin number is wrong initially, below block of code is executed
else {
    console.log("Sorry, You Entered Wrong Password,Try Again");
}
//Author-Huma Mohsin
