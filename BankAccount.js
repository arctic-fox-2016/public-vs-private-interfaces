"use strict"

// release 0
//const ACCT_NUMBER = new ChangeThis()

class BankAccount {
  constructor(customer_name, type, acct_number) {
    this._customer_name = customer_name
    this._type          = type
    this._acct_number   = acct_number
  }

  to_s() {
    console.log('"'+this._customer_name + ', '+
                    this._type +', ' +
                    this._acct_number + '"')
  }

  get acct_number(){
    return this._acct_number
  }

  set acct_number(value){
    this._acct_number = value
  }

  // getCustomerName(){
  //   return this._customer_name
  // }
  //
  // setCustomerName(value){
  //   this._customer_name = value
  // }



  cover_digits() {
    var tmp = this._acct_number.match(/\d\d\d[-]\d\d\d/g);
    var a = tmp.toString()
    a = a.replace(a,"XXX-XXX") + '-' + this._acct_number.substring(8,11)
    //var res = str.replace("Microsoft", "W3Schools");
    console.log(a)
  }
}

let my_acct = new BankAccount("Name", "Checking", "000-000-XYZ")

//console.log(my_acct)
console.log(my_acct._customer_name)
//console.log(my_acct.ACCT_NUMBER.get(this))

// release 1
//my_acct.to_s() // "Name: Checking# 000-000-000"
my_acct.cover_digits() // "Name: Checking# ***-***-000"
