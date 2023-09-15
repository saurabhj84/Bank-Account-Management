# Info about the website "Bank Account Management"

As part of Bounty, I have created a website that will simulate "Bank Account Management"  in which I used a class named “BankAccount” which has 3 attributes: 
accountNumber
accountHolderName
balance
and it also has 3 properties/functions:
deposit(int) : To deposit the amount in an a/c
withdraw (int) : To withdraw amount from an a/c
displaybalance() : Display Balance of a/c
# Website Structure

On the website page, I have mostly 4 GUI components:
1. "main-input" text box, in which the user will enter the A/C number on which he/she wants to operate
2. "operation" list box, which has the below operations, out of which the user will select one of the operations (whose functionality is self-explanatory with the names).
Balance_Check
Withdraw_Amount
Deposit_Amount
AccountHolder_Name
3. "output" text box, which will show the output of each operation
4. A button "Account_Operation" which will do user-specific operations (which the user selects from the list box) using the user's input A/C number (in the main-input box).

# Use of Classes

Used classes for generating 2 A/C by calling constrcutor of the class
const account1 = new BankAccount('1111', 'Saurabh', 2000);
const account2 = new BankAccount('2222', 'Jain', 3000);

# Use of Switch statements:

I used the switch statement for user-selectable operations, i.e. Balance_check, Withdraw_amount, Deposit_amount, AccountHolder_Name". I made a case for each operation and wrote code to operate a specific function.

# Use of Try-catch-Finally Block

For each operation, I used different error conditions, and for each error condition, I threw errors in the try block, caught that error in the catch block, and printed that error in the output text box.
Sample error conditions:

throw new Error('Wrong Account Number'); 
     //When user enter A/C Number which is not exist
 throw new Error('Amount cannot be negative');
   // When the user enters the withdrawal or deposit amount in negative
throw new Error('Amount cannot be empty');
  // When the user enters the withdrawal or deposit amount empty
throw new Error('Insufficient Balance to Withdraw');
  // When user try to Withdraw the amount larger than existing A/C balance

# Balance_Check Operation

The user needs to enter the "A/C Number" in the main-input text box, and then we will check that account number against all existing account numbers, and if it matches, then it will show an alert pop-up that tells the balance for that A/C Number. If that account number does not match, then it will throw the below error 
        throw new Error('Wrong Account Number'); 
and the same error will be shown in the output box as well.

# Deposit_AmountOperation

For this operation, the user will enter "A/C Number" which will again be checked against all existing account numbers and throw an error if the account does not exist.
If an account number exists, then the user will get an input prompt alert to enter the amount to deposit, and if the user presses OK, then it will add that amount to the existing balance of that A/C and the final balance will appear in the output box.
But if the user does not enter deposit_amount or enters a negative amount in the prompt box, then it will throw the following exceptions:
 throw new Error('Amount cannot be negative');
   // When the user enters the withdrawal or deposit amount in negative
throw new Error('Amount cannot be empty');
  // When the user enters the withdrawal or deposit amount empty

# Withdraw_Amount Operation 

For this operation, the user will enter "A/C Number" which will again be checked against all existing account numbers and throw an error if the account does not exist.
If an account number exists, then the user will get an input prompt alert to enter the amount to withdraw. The user will enter the amount and press OK, and then that amount will be deducted from the existing A/C balance.
But if the user does not enter deposit_amount or enters a negative amount in the prompt box, then it will throw the following exceptions:
 throw new Error('Amount cannot be negative');
   // When the user enters the withdrawal or deposit amount in negative
throw new Error('Amount cannot be empty');
  // When the user enters the withdrawal or deposit amount empty

Also, if users enter the withdrawal amount in the prompt alert higher than the current balance of that account, it will throw the below error:
throw new Error('Insufficient Balance to Withdraw');
  // When user try to Withdraw the amount larger than existing A/C balance

#  AccountHolder_Name operation

For this operation, the user will enter "A/C Number" which will again be checked against all existing account numbers and throw an error if the account does not exist.
If an account number exists, then it will get the account holder's name for that account and print it in the output text box.