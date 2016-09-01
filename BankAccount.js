"use strict"

// release 0
//const ACCT_NUMBER = new ChangeThis()

class BankAccount {
  constructor(customer_name, type, acct_number) {
    this._customer_name = customer_name;
    this._type = type;
    this._acct_number = acct_number;
  }


  get accountNumber() {
      return this._acct_number;
   }
  set accountNumber (number) {
       this._acct_number = number;
   }


  to_s()
  {
    console.log(this._customer_name,this._type,this._acct_number);
    // this._customer_name = ["Andi","Rudi"]
    // this._type = ["Checking","Printing"]
    // this._acct_number = ["333-555-333","333-555-333"]
    // for(var i=0;i<this._customer_name.length;i++){
    // console.log(this._customer_name[i],this._type[i],this._acct_number[i]);
  }

  cover_digits() {
     let changeNumber = this._acct_number.replace(/(\d{3}).*(\d{3}).*(\d{3})/g, "***-***-$3");
     console.log(this._customer_name+":"+" "+this._type+" # "+changeNumber);
  }
}

let my_acct = new BankAccount("Andi", "Checking", "444-333-111")

console.log(my_acct)
console.log(my_acct.accountNumber);

// release 1
my_acct.to_s() // "Name: Checking# 000-000-000"
my_acct.cover_digits() // "Name: Checking# ***-***-000"
