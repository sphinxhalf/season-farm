import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { vi_VN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import vi from '@angular/common/locales/vi';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { FormsModule } from '@angular/forms';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzModalModule, nzModalAnimations } from 'ng-zorro-antd/modal'; // Import NzModalModule
import { ReactiveFormsModule } from '@angular/forms';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { HttpClientModule } from '@angular/common/http';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzLayoutModule } from 'ng-zorro-antd/layout';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './guide-table/guide-table.component';
import { ComboBoxComponent } from './combo-box/combo-box.component';
import { AddItemModalComponent } from './add-item-modal/add-item-modal.component';
import { DataService } from './data.service';
import { UploadImageComponent } from './upload-image/upload-image.component';

registerLocaleData(vi);

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    ComboBoxComponent,
    AddItemModalComponent,
    UploadImageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NzTableModule,
    NzFormModule,
    NzSelectModule,
    FormsModule,
    NzDropDownModule,
    BrowserAnimationsModule,
    NzCardModule,
    NzGridModule,
    NzModalModule,
    ReactiveFormsModule,
    NzUploadModule,
    NzIconModule,
    HttpClientModule,
    NzTagModule,
    NzLayoutModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
