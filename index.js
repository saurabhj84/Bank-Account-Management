class BankAccount {
  constructor(accountNumber, accountHolderName, balance) {
    this.accountNumber = accountNumber;
    this.accountHolderName = accountHolderName;
    this.balance = balance;
  }
  deposit(amount) {
    this.balance += amount;
    console.log(`Amount $${amount} deposited into account ${this.accountNumber}.`);
  }

  withdraw(amount) {
   if (amount <= this.balance) {
      this.balance -= amount;
    console.log(`Amount $${amount} withdrawn from account ${this.accountNumber}.`);
    } else {
   console.log(`Insufficient balance in account ${this.accountNumber}.`);
   }
  }

  displayBalance() {
    console.log(`Account ${this.accountNumber} balance: $${this.balance}`);
  }
}

// Create multiple instances of the BankAccount class
const account1 = new BankAccount('1111', 'Saurabh', 2000);
const account2 = new BankAccount('2222', 'Jain', 3000);


document.getElementById('button').addEventListener('click', function() {
    let input = document.getElementById('main-input').value;
    let output = document.getElementById('output');
  
    var operator = document.getElementById('operator').value;

    switch (operator) { 
      case 'Balance_Check':
        try{
          var balance = undefined;    
          if(input == account1.accountNumber)
          {
            account1.displayBalance();
            balance= account1.balance;
          }
          else if(input == account2.accountNumber)
          {
            balance=account2.displayBalance();
            balance= account2.balance;
          }
          else
          {
          throw new Error('Wrong Account Number');
          }
        } catch (error) {
          output.innerHTML = error;
        }finally {
          alert(`Balance of A/C No ${input} is ${balance} `);
        }
        break;
         
      case 'Deposit_Amount':
        var amount =  Number (prompt(`Enter amount to Withdraw`));
        try{
        if (amount < 0) {
          throw new Error('Amount cannot be negative');
        } else if (amount === '') {
          throw new Error('Amount cannot be empty');
        }
        else
        {
          var deposit_amount  = Number(amount);
          if(input == account1.accountNumber)
          {

            account1.deposit(deposit_amount);
            output.innerHTML = deposit_amount + ' deposited in A/C No '+ input + ' and updated  Balance is '+ account1.balance;
          }
          else if(input == account2.accountNumber)
          {
            account2.deposit(deposit_amount);
            output.innerHTML = deposit_amount + ' deposited in A/C No '+ input + ' and updated  Balance is '+ account2.balance;
          }
          else
          {
          throw new Error('Wrong Account Number');
          }
        }
      }catch (error) {
        output.innerHTML = error;
      }finally {
        //alert(`Amount ${amount} deposited into account ${account}.`);
      }
      break;

      case 'Withdraw_Amount':
        var amount = prompt(`Enter amount to Withdraw`);
        try{
        if (amount < 0) {
          throw new Error('Amount cannot be negative');
        } else if (amount === '') {
          throw new Error('Amount cannot be empty');
        }
        else
        {
          var withdraw_amount  = Number(amount);
          if(input == account1.accountNumber)
          {
            if (amount > account1.balance)
            {
              throw new Error('Insufficient Balance to Withdraw');
            }

            //account1.balance= account1.balance + amount;
            account1.withdraw(withdraw_amount);
            output.innerHTML = withdraw_amount + ' Withdraw from A/C No '+ input + ' and updated  Balance is '+ account1.balance;
          }
          else if(input == account2.accountNumber)
          {

            if (amount > account2.balance)
            {
              throw new Error('Insufficient Balance to Withdraw');
            }
            account2.withdraw(withdraw_amount);
            output.innerHTML = withdraw_amount + ' Withdraw from  A/C No '+ input + ' and updated  Balance is '+ account2.balance;
          }
          else
          {
          throw new Error('Wrong Account Number');
          }
        }
      }catch (error) {
        output.innerHTML = error;
      }finally {

      }
      break;

      case 'AccountHolder_Name':
        try{
             
          if(input == account1.accountNumber)
          {
            output.innerHTML = ' A/C No: ' + input + ', Accountholder Name is  '+ account1.accountHolderName;
          }
          else if(input == account2.accountNumber)
          {
            output.innerHTML = ' A/C No: ' + input + ', Accountholder Name is  '+ account2.accountHolderName;
          }
          else
          {
          throw new Error('Wrong Account Number');
          }
        } catch (error) {
          output.innerHTML = error;
        }finally {

        }
        break;


      default:
            document.getElementById('output').innerHTML = 'Invalid operator';
            break;
    }
})