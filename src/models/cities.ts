class CitiesClass {
  name: string;
  area: number;
  region: string;

  constructor(text: string, number: number) {
    this.name = text;
    this.area = number;
    this.region = text;
  }
}

export default CitiesClass;
