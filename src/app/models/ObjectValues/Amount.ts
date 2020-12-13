import { validateAmount } from '../../utils/validators'

export class Amount {
  public readonly value: number

  private constructor(amount: number) {
    this.value = amount
    Object.freeze(this)
  }

  static create(amount: number): Amount | Error {
    if (!validateAmount(amount)) {
      throw new Error('Invalid amount')
    }

    return new Amount(amount)
  }
}
