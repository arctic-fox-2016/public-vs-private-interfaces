"use strict"

// release 0
const ACCT_NUMBER = new ChangeThis()

class BankAccount {
  constructor(customer_name, type, acct_number) {}

  to_s() {}

  cover_digits() {}
}

let my_acct = new BankAccount("Name", "Checking", "000-000-000")

console.log(my_acct)
console.log(my_acct.ACCT_NUMBER.get(this))

// release 1
my_acct.to_s() // "Name: Checking# 000-000-000"
my_acct.cover_digits() // "Name: Checking# ***-***-000"
