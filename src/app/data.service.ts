import { Injectable } from '@angular/core';
import { Item } from './add-item-modal/item.model'; // Import the Item interface

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private items: Item[] = []; // Use the Item interface

  constructor() {}

  // Method to add a new item
  addItem(item: Item) {
    this.items.push(item);
    console.log(item)
  }

  // Method to retrieve all items
  getItems() {
    return this.items;
  }
}
