import { Component, Input, OnInit } from '@angular/core';
import { ICourse } from '../../model/coures';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CourseFormComponent } from '../course-form/course-form.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
@Input()getcourse!:ICourse
  constructor(private _matdilog : MatDialog) { }

  ngOnInit(): void {
  }
  // onedit(){
  //   // let matcong = new MatDialogConfig();
  //   // matcong.width ='400px';
  //   // matcong.data = this.getcourse;

  //   // //let newdilog = this._matdilog.open(CourseFormComponent,matcong)
  //   // let newdilog = this._matdilog.open(CourseFormComponent,matcong)
  // }
  onedit(){
    let dialoconfig = new MatDialogConfig()
    dialoconfig.width="400px";
    dialoconfig.data = this.getcourse;

    let newdailog =this._matdilog.open(CourseFormComponent,dialoconfig)

  }
}
