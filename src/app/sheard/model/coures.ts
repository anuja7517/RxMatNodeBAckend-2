export interface ICourseRes{
  payload:ICourse[]
}


export interface ICourse {
  id:number;
  description:string;
  iconUrl: string;
  courseListIcon: string;
  longDescription: string;
  category: "BEGINNER" | "ADVANCED";
  lessonsCount:number;
}


export interface Ilessonres{
  payload:Ilesson[]

}

export interface Ilesson {
  id: number;
  description: string;
  duration: string;
  seqNo: number;
  courseId: number;
}