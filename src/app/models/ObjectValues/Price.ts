import { validatePrice } from '../../utils/validators'

export class Price {
  public readonly value: number

  private constructor(price: number) {
    this.value = price
    Object.freeze(this)
  }

  static create(price: number): Price | Error {
    if (!validatePrice(price)) {
      throw new Error('Invalid price')
    }

    return new Price(price)
  }
}
