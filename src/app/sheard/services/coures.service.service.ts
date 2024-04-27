import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, filter, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICourse, ICourseRes, Ilesson, Ilessonres } from '../model/coures';

@Injectable({
  providedIn: 'root'
})
export class CouresServiceService {
  CourseUrl =`${environment.basUrl}/courses`;
  saveObj$ : Subject<boolean>= new Subject<boolean>()
  constructor(private _http: HttpClient) { }

  fetchAllcourse():Observable<ICourse[]>{
   return this._http.get<ICourseRes>(this.CourseUrl)
   .pipe(
    map(res=>res['payload'])
    
   )
   
  }
savecoures(coures : ICourse):Observable<ICourse>{
  let courseUrl = `${this.CourseUrl}/${coures.id}`
  return this._http.put<ICourse>(courseUrl,coures)
}
coures(couresid:string):Observable<ICourse>{
  let coures =`${ this.CourseUrl}/${couresid}`
  return this._http.get<ICourse>(coures)
}

getlession(couresid: string,pageSize:number =10 ,filter=''):Observable<Ilesson[]>{

    let coures =`${environment.basUrl}/lessons`
    let params = new HttpParams()
    .set("couresid",couresid)
    .set("pageSize",pageSize)
    .set("filter",filter)

    return this._http.get<Ilessonres>(coures,{
      params : params
    })
    .pipe(
     map(res =>{
      return res['payload']
     })
    )

}

}
