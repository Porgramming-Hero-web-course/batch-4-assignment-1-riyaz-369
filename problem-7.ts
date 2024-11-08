class Car {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  getCarAge() {
    const currentYear = new Date().getFullYear();
    const differenceOfYear = currentYear - this.year;
    return `${differenceOfYear} (assuming current year is ${currentYear})`;
  }
}
