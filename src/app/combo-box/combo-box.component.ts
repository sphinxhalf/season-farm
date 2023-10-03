import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoListComponent } from '../guide-table/guide-table.component';
@Component({
  selector: 'app-combo-box',
  templateUrl: './combo-box.component.html',
  styleUrls: ['./combo-box.component.css']
})
export class ComboBoxComponent implements OnInit {
  @Input() availableYears: string[] = []; // Input property to receive available years
  @Output() selectedYearChange = new EventEmitter<string>(); // Output event to emit selected year

  selectedYear: string = ''; // Variable to store the selected year

  constructor() {}

  ngOnInit() {}

  // Function to handle year change
  onYearChange() {
    this.selectedYearChange.emit(this.selectedYear); // Emit the selected year to the parent component
  }
  // For example, you can create a method to handle when an option is selected in the select dropdowns:
  // handleTinhSelection() {
  //   console.log('Selected Tỉnh:', this.chonTinh);
  //   // You can perform any actions or logic based on the selected value.
  // }

  // handleNamSelection() {
  //   console.log('Selected Năm:', this.chonNam);
  //   // You can perform any actions or logic based on the selected value.
  // }

  // handleTuoiCaySelection() {
  //   console.log('Selected Độ tuổi cây:', this.tuoiCay);
  //   // You can perform any actions or logic based on the selected value.
  // }
}
