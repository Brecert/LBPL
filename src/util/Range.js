// @flow

export default class Range {
  constructor(start: number, end: number) {
    this.start = start;
    this.end = end;
  }

  accepts(number: number) {
    if (number < this.start && number < this.end) {
      return true;
    } else {
      return false;
    }
  }
}
