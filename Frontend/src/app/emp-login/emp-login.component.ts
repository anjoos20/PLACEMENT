import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpModel } from '../emp.model';
import { EmpService } from '../emp.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-emp-login',
  templateUrl: './emp-login.component.html',
  styleUrls: ['./emp-login.component.css']
})
export class EmpLoginComponent implements OnInit {

  user = {
    "email":'',
    "password":''
  };

  constructor(private empService: EmpService, private router: Router) { }

  EmpLogin(){
    console.log("In employer service");
    this.empService.employerLogin(this.user)
        .subscribe(
          (res:any) =>{
            console.log("res id is",res.eid)
            //  console.log("res.token is",res.token)
             localStorage.setItem("EmpId",res.eid);
             this.router.navigate(['employer/dashboard'])
          }
        )
  }

  ngOnInit(): void {
  }

}
