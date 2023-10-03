import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { Item } from './item.model';
import { PlusOutline } from '@ant-design/icons-angular/icons';

@Component({
  selector: 'app-add-item-modal',
  templateUrl: './add-item-modal.component.html',
  styleUrls: ['./add-item-modal.component.css'],
})
export class AddItemModalComponent implements OnInit {
  @Input() imageUrl!: string; //
  @Output() newItemAdded = new EventEmitter<Item>();
  validateForm: FormGroup;
  selectedMonth!: string; // Add the selectedMonth property
  selectedImageUrl: string = '';
  constructor(private modalRef: NzModalRef, private fb: FormBuilder, private dataService: DataService) {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      image: [null],
      level: [null],
      weight: [null],
    });
    // this.validateForm.get('weight')!.disable();
  }

  ngOnInit() {}
  handleImageUrlSelected(imageUrl: string) {
    this.selectedImageUrl = imageUrl;
  }

  handleOk(): void {
    if (this.validateForm.valid) {
      const newItem: Item = {
        name: this.validateForm.value.name,
        image: this.selectedImageUrl,
        level: this.validateForm.value.level,
        weight: this.validateForm.value.weight,
        // Include the selected month in the new item
        month: this.selectedMonth,
        dateCreated: new Date(),
      };
      this.newItemAdded.emit(newItem);

      this.dataService.addItem(newItem);
      this.modalRef.destroy(newItem);
      
    }
    console.log(this.validateForm.value)
  }

  handleCancel(): void {
    this.modalRef.destroy();
  }

  onChangeLevel() {
    const levelControl = this.validateForm.get('level');
    const weightControl = this.validateForm.get('weight');

    if (levelControl?.value) {
      // If 'level' is selected, disable 'weight' control
      weightControl?.disable();
    } else {
      // If 'level' is cleared, enable 'weight' control
      weightControl?.enable();
    }
  }

  // Monitor changes in the 'weight' control
  onChangeWeight() {
    const levelControl = this.validateForm.get('level');
    const weightControl = this.validateForm.get('weight');

    if (weightControl?.value) {
      // If 'weight' is entered, disable 'level' control
      levelControl?.disable();
    } else {
      // If 'weight' is cleared, enable 'level' control
      levelControl?.enable();
    }
  }
}
