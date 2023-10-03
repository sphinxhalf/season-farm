import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Item } from '../add-item-modal/item.model';
import { DataService } from '../data.service';
import { AddItemModalComponent } from '../add-item-modal/add-item-modal.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './guide-table.component.html',
  styleUrls: ['./guide-table.component.css']
})
export class TodoListComponent implements OnInit {
  years: number[] = [2023, 2022, 2021]; // Add the years you want to filter
  selectedYear: number | null = null; // Initialize selected year as null
  months: string[] = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  items: { [key: string]: Item[] } = {}; // Store items grouped by month

  constructor(private dataService: DataService, private modal: NzModalService) {}

  ngOnInit() {
    // Retrieve items from the data service and group them by month
    const allItems = this.dataService.getItems();
    for (const month of this.months) {
      this.items[month] = allItems.filter(item => item.month === month);
    }
  }

  // Function to open the add item modal for a specific month
  openAddItemModal(selectedMonth: string) {
    const modalRef = this.modal.create({
      nzTitle: 'Công việc',
      nzContent: AddItemModalComponent,
      nzFooter: [
        {
          label: 'Save',
          type: 'primary',
          onClick: (componentInstance) => {
            componentInstance?.handleOk();
          },
        },
        {
          label: 'Cancel',
          type: 'default',
          onClick: (componentInstance) => {
            componentInstance?.handleOk();
          },
        },
      ],
      nzClosable: true,
      nzWrapClassName: "centered-modal-wrapper",
      
    });

    const instance = modalRef.componentInstance!;
    instance.selectedMonth;
  
    // Bind the imageUrl property and handle the addItem event
    instance.imageUrl = ''; // Initialize with an empty string
    instance.newItemAdded.subscribe((result: Item) => {
      if (result) {
        // Add the new item to the items array
        this.items[selectedMonth].push(result);
      }
    });
  }

  // Function to filter items by year
  filterItemsByYear(year: number | null) {
    // Filter items based on the selected year
    if (year === null) {
      // If no year is selected, display all items
      // Retrieve items from the data service and group them by month
      const allItems = this.dataService.getItems();
      for (const month of this.months) {
        this.items[month] = allItems.filter(item => item.month === month);
      }
    } else {
      // Filter items by the selected year
      const filteredItems = this.dataService.getItems().filter(item => new Date(item.dateCreated).getFullYear() === year);
      for (const month of this.months) {
        this.items[month] = filteredItems.filter(item => item.month === month);
      }
    }
  }
}
