import { Component, OnInit } from '@angular/core';
import { CouresServiceService } from '../../services/coures.service.service';
import { ICourse } from '../../model/coures';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
courseArr! :ICourse[];
beginerArry! :ICourse[];
advanceArry! :ICourse[]
  constructor(private _services : CouresServiceService) { }

  ngOnInit(): void {
    this.savecourse()
    this._services.saveObj$
    .subscribe(res=>{
      console.log(res);
      if(res){
        this.savecourse()
      }
      
    })
  }

    savecourse(){
      this._services.fetchAllcourse()
      .subscribe((res=>{
        console.log(res);
  
  
        this.beginerArry =res.filter(a=>a.category==='BEGINNER')
        this.advanceArry =res.filter(a=>a.category==='ADVANCED')
        console.log(this.beginerArry);
        console.log(this.advanceArry);
        
        
        
      }))
    }
}
