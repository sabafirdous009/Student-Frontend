import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentserviceService } from '../studentservice.service';

@Component({
  selector: 'app-liststudent',
  templateUrl: './liststudent.component.html',
  styleUrls: ['./liststudent.component.css']
})
export class ListstudentComponent implements OnInit {
  allStudent : any;

  constructor(private service : StudentserviceService, private router : Router) { }

  ngOnInit(): void {
    this.showAllStudents();
  }
  showAllStudents() : void{
    this.service.liststudents().subscribe((result)=>{
      console.log(result);
      this.allStudent = result;
    });
  }
  deleteStudent(id:number){
   alert(id);
    this.service.deleteStudent(id).subscribe((result)=>{
      this.router.navigate(['showAll']);
    },(err)=>{console.log(err)}
    )
  }
}
