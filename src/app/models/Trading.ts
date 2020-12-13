import { Amount } from './ObjectValues/Amount'
import { DateTime } from './ObjectValues/DateTime'
import { Price } from './ObjectValues/Price'

export class Trading {
  public readonly amount: Amount | Error
  public readonly dateTime: DateTime | Error
  public readonly price: Price | Error

  constructor(
    amount: Amount | Error,
    dateTime: DateTime | Error,
    price: Price | Error
  ) {
    this.amount = amount
    this.dateTime = dateTime
    this.price = price
  }
}
