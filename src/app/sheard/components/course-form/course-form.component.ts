import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ICourse } from '../../model/coures';
import { CouresServiceService } from '../../services/coures.service.service';
import { CourseDialogComponent } from '../course-dialog/course-dialog.component';


@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {
courseform! :FormGroup;
couresData! : ICourse
  constructor(private _services : CouresServiceService,
    private F : FormBuilder,
    @Inject(MAT_DIALOG_DATA) private _coures : ICourse ,
   private _matdilog : MatDialogRef<CourseDialogComponent>

      
  
  ) { 
    this.creatcourse();
    this.couresData = _coures
    this.courseform.patchValue(_coures)

  }

  ngOnInit(): void {
  //  console.log(this.courseform.value);
 

   
  }
  get f(){
    return this.courseform.controls
  }
  
creatcourse(){
  this.courseform=this.F.group({
    description:["",Validators.required],
    category :["",Validators.required],
    releaseAt: ["",Validators.required],
    longDescription:["",Validators.required],
  })
}
onsave(){
  if(this.courseform.valid){
    console.log(this.courseform.value);
    let obj ={...this.courseform.value,id: this.couresData.id}
    this._services.savecoures(obj)
    .subscribe(res =>{
      this._services.saveObj$.next(true)
      console.log(res);
      this._matdilog.close()

      
    })
  }

}
onclose(){
  this._matdilog.close()
}

}
