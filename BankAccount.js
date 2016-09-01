"use strict"

// release 0



class BankAccount {
  constructor(customer_name = null, type = null, acct_number = null) {
    this._customer_name = customer_name;
    this._type = type;
    this._acct_number = acct_number;
  }

  set customer_name(value){ this._customer_name = value; }
  get customer_name(){ return this._customer_name; }
  set type(value){ this._type = value; }
  get type(){ return this._type; }
  set acct_number(value){ this._acct_number = value; }
  get acct_number(){ return this._acct_number; }

  to_s() {
    return this.customer_name + ": " + this.type + "# " + this.acct_number;
  }

  cover_digits() {
    let cover_number = this.acct_number.replace(/\d\d\d[-]\d\d\d/g, "XXX-XXX");
    return this.customer_name + ": " + this.type + "# " + cover_number;
  }
}

let my_acct = new BankAccount("Hacktivate", "Checking", "333-555-888")

console.log("\n")
console.log(my_acct)
// release 1
console.log("\n")
console.log(my_acct.to_s()) // "Name: Checking# 000-000-000"
console.log("\n")
console.log(my_acct.cover_digits()) // "Name: Checking# ***-***-000"
console.log("\n")
