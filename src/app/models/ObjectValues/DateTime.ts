import { validateDateTime } from '../../utils/validators'

import { format } from 'date-fns'

export class DateTime {
  public readonly value: string

  private constructor(date: Date) {
    this.value = this.formatUsingDayMonthAndYear(date)

    Object.freeze(this)
  }

  static create(dateTime: Date): DateTime | Error {
    if (!validateDateTime(dateTime)) {
      throw new Error('Invalid dateTime')
    }

    return new DateTime(dateTime)
  }

  private formatUsingDayMonthAndYear(date: Date): string {
    return format(date, 'dd/MM/yyyy')
  }
}
