import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from './student';

const myheader={
  headers:new HttpHeaders({'Content-type' : 'application/json',
  'Access-Control-Allow-Origin' : '*'
})
}

@Injectable({
  providedIn: 'root'
})
export class StudentserviceService {

  constructor(private http : HttpClient) { }
  liststudents():Observable<Student[]>{
    alert('List Students')
    return this.http.get<Student[]>("http://localhost:8585/allStudents");
  }

  deleteStudent(id : number) : Observable<Student>{
    return this.http.delete<Student>("http://localhost:8585/delete/"+id,myheader);
  }

  register(stu : Student) : Observable<Student>{
    return this.http.post<Student>("http://localhost:8585/addStudent",stu,myheader);
  }

  update(stu : Student) : Observable<Student>{
    return this.http.put<Student>("http://localhost:8585/updateStudent",stu,myheader);
  }

  getStudentById(id:number) : Observable<Student>{
    return this.http.get<Student>("http://localhost:8585/getStudentById/"+id);
  }
}
