import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ICourse, ICourseRes, Ilesson } from '../../model/coures';
import { ActivatedRoute } from '@angular/router';
import { CouresServiceService } from '../../services/coures.service.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
coureid ! :string;
coureObj$!:Observable<ICourse>;
lession$!:Observable<Ilesson[]>
  constructor(private _router :ActivatedRoute,
                private _services : CouresServiceService
  ) { }

  ngOnInit(): void {
    this.coureid =this._router.snapshot.params['id'];
    // this.coureObj$ =this._services.savecoures(this.coureid)
    this.coureObj$ =this._services.coures(this.coureid)

     this.lession$ =this._services.getlession(this.coureid)
  }


}
