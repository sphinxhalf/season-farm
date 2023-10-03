export class Item {
  name: string;
  image: string;
  level: string;
  weight: number;
  dateCreated: Date; // Add the dateCreated property
  month: string;

  constructor(name: string, imageUrl: string, level: string, weight: number, month:string) {
    this.name = name;
    this.image = imageUrl;
    this.level = level;
    this.weight = weight;
    this.dateCreated = new Date(); // Automatically set the dateCreated property to the current date and time
    this.month = month;
  }
}