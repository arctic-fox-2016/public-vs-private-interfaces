"use strict"

// release 0


class BankAccount {
  constructor(customer_name, type, acct_number) {
    this._customer_name = customer_name
    this._type = type
    this._acct_number = acct_number
  }

  to_s() {
    return "Hacktivate :" +this._type+"#"+this._acct_number
  }

  get customer_name(){
    return this._customer_name
  }

  set customer_name(customer){
    return this._customer_name = customer
  }

  get type(){
    return this._type
  }
  set type(type){
    return this._type = type
  }

  set acct_number(acct){
    return this._acct_number = acct
  }
  get acct_number(){
    return this._acct_number
  }

  cover_digits() {
    var tmp = this._acct_number.match(/\d\d\d[-]\d\d\d/g);
    var toString = tmp.toString()
    toString = toString.replace(toString,"XXX-XXX") + '-' + this._acct_number.substring(8,11)
    return toString;
  }
}

let my_acct = new BankAccount("Name", "Checking", "000-000-000")

//
// console.log(my_acct)
// console.log(my_acct.to_s());
// console.log(my_acct.account);
my_acct.account = "ivangerards"
console.log(my_acct.account);
// console.log(my_acct.getAccount);
// console.log(my_acct.ACCT_NUMBER.get(this))
//
// // release 1

console.log(my_acct.to_s());

console.log(my_acct.cover_digits());
// var card = ["000-000-000"]
// card.split(card)
//
// console.log(card);
