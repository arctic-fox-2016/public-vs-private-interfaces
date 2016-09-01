"use strict"

// release 0
let ACCT_NUMBER = new WeakMap()
class BankAccount {

  constructor(customer_name, type, acct_number) {
    this.customer_name = customer_name,
    this.type          = type,
    ACCT_NUMBER   = acct_number
  }
//ACCT_NUMBER.set(account,this.account_number)
//ACCT_NUMBER.get(account)
get account_number(){
  return ACCT_NUMBER
}

  to_s() {
    console.log(this.customer_name+": "+this.type+"# "+ACCT_NUMBER)
  }

  cover_digits() {
    let covered = ACCT_NUMBER.replace(/(\d{3}).*(\d{3}).*(\d{3})/g, "***-***-$3")
    console.log(this.customer_name+": "+this.type+"# "+ covered)
  }

}

let my_acct = new BankAccount("Name", "Checking", "000-000-000")

console.log(my_acct)
console.log(my_acct.account_number)

// release 1
my_acct.to_s() // "Name: Checking# 000-000-000"
my_acct.cover_digits() // "Name: Checking# ***-***-000"
