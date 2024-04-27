import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {MatSidenavModule  } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatButtonModule  } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import {MatInputModule  } from '@angular/material/input';
import {MatFormFieldModule  } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatSelectModule  } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';




let matArry =[
  MatToolbarModule,
  MatCardModule,
  MatIconModule,
  MatSidenavModule,
  MatDialogModule,
  MatSnackBarModule,
  MatButtonModule,
  MatListModule,
  MatTabsModule,
  MatDividerModule,
MatInputModule,
MatFormFieldModule,
MatDatepickerModule,
MatSelectModule,
MatNativeDateModule,
  
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...matArry
  ],
  exports:[
    ...matArry
  ]
})
export class MaterialModule { }
