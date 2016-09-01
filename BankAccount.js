"use strict"

// release 0
//const ACCT_NUMBER = new ChangeThis()

class BankAccount {
  constructor(customer_name, type, acct_number) {
    this.customer_name = customer_name;

    this.type = type;

    this._acct_number = acct_number;
  }
  get accountNumber(){
    return this._acct_number;
  }
  set accountNumber(number){
    this._acct_number = number;
  }

  //console.log = acct_number ("hacktivate", "Checking","333-555-888")


  to_s(){
    console.log(this.customer_name, this.type, this._acct_number);

  }

  cover_digits() {
    let cover = this._acct_number.replace(/(\d{3}).*(\d{3}).*(\d{3})/g,"***-***-$3")
    console.log(this.customer_name + " : " + this.type + " # "+ cover);
  }

}
let my_acct = new BankAccount("Hacktivate", "Checking", "333-555-888")

console.log(my_acct)
console.log(my_acct.accountNumber)

//release 1
my_acct.to_s() // "Name: Checking# 000-000-000"
my_acct.cover_digits() // "Name: Checking# ***-***-000"
