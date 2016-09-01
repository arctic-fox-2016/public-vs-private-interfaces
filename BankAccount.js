"use strict"

// // release 0
//const ACCT_NUMBER = new ChangeThis()

class BankAccount {
  constructor(customer_name, type, acct_number) {
    this.customer_name = customer_name;
    this.type          = type;
    this._acct_number   = acct_number;
  }

  get acctNumber(){
    return this._acct_number
  }

  set acctNumber(number){
    this._acct_number = number
  }

  to_s() {
    console.log(this.customer_name + ": " + this.type +"# "
    + this._acct_number)
  }

  cover_digits() {
    let hilang = this._acct_number.replace(/(\d{3}).*(\d{3}).*(\d{3})/g, "***-***-$3")
    console.log(this.customer_name + ": " + this.type + "# " + hilang)

  }
}

let my_acct = new BankAccount("BLublu", "Checking", "317-820-087")

console.log(my_acct)
console.log(my_acct.acctNumber)
//console.log(my_acct.ACCT_NUMBER.get(this))

// // release 1
my_acct.to_s() // "Name: Checking# 000-000-000"
my_acct.cover_digits() // "Name: Checking# ***-***-000"

// class Person{
//   constructor(name){
//     this._name =name;
//   }
//   get name(){
//     return this._name;
//   }
//   set name(newName){
//     this._name = newName;
//   }
//   BankAccount
// }
