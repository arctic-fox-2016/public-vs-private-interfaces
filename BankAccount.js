"use strict"

// release 0
//const ACCT_NUMBER = new ChangeThis()

class BankAccount {
  constructor(customer_name, type, acct_number) {
    this._customer_name = customer_name
    this._type = type
    this._acct_number = acct_number
  }

  to_s() {
    return this.customer_name + " : " +
    this.type + "# " +
    this.acct_number
  }

  get customer_name() {
    return this._customer_name;
    }

  set customer_name(value) {
    this._customer_name = value
  }

  get type(){
    return this._type;
  }

  set type(value){
    this._type = value
  }

  get acct_number(){
    return this._acct_number
  }

  set acct_number(value){
    this._acct_number = value
  }

  cover_digits() {
    console.log(this.customer_name + " : " +
    this.type + "# " +
    "***-***-" + this.acct_number.slice(8,11))
  }
}

let my_acct = new BankAccount("Hacktivate", "Checking", "333-555-888")
console.log(my_acct)
console.log(my_acct.to_s())


//console.log(my_acct.ACCT_NUMBER.get(this))

// release 1
my_acct.to_s() // "Name: Checking# 000-000-000"
my_acct.cover_digits() // "Name: Checking# ***-***-000"
