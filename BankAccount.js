"use strict"

// release 0
const ACCT_NUMBER = new WeakMap()

class BankAccount {
  constructor(customer_name, type, acct_number) {
    this._customer_name = customer_name;
    this._type = type;
    ACCT_NUMBER.set(this, acct_number);
  }

  to_s() {
    console.log(this._customer_name + ": " + this._type + "# " + ACCT_NUMBER.get(this));
  }

  cover_digits() {
    console.log(this._customer_name + ": " + this._type + "# " + ACCT_NUMBER.get(this).replace(/\d{3}-\d{3}-(\d{3})/g, "***-***-$1"));
  }

  get acct_number() {
    return ACCT_NUMBER.get(this);
  }
}

let my_acct = new BankAccount("Hacktiv8", "Checking", "333-555-888")

console.log(my_acct);
console.log(my_acct.acct_number);

// release 1
my_acct.to_s() // "Name: Checking# 000-000-000"
my_acct.cover_digits() // "Name: Checking# ***-***-000"
