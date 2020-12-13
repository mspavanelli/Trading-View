import { isValid } from 'date-fns'

export function validateAmount(amount: number): boolean {
  const isInteger = Number.isInteger(amount)
  const isStrictPositive = amount > 0

  if (!isInteger || !isStrictPositive) return false

  return true
}

export function validatePrice(price: number): boolean {
  const isPositive = price >= 0

  if (!isPositive) return false

  return true
}

export function validateDateTime(date: Date): boolean {
  return isValid(date)
}
