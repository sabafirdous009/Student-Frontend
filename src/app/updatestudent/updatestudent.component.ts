import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../student';
import { StudentserviceService } from '../studentservice.service';

@Component({
  selector: 'app-updatestudent',
  templateUrl: './updatestudent.component.html',
  styleUrls: ['./updatestudent.component.css']
})
export class UpdatestudentComponent implements OnInit {

  student : Student = {name : '', course : '', fee : 0, marks : 0 }
  constructor(private service : StudentserviceService, private router : Router, private path : ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.path.snapshot.params['id'];
    this.service.getStudentById(id).subscribe((data)=>{this.student=data})
  }

  updateStudent(){
    this.service.update(this.student).subscribe((data)=>{
      this.router.navigate(['showAll']);
    },(err)=>{console.log(err)})
  }
}
