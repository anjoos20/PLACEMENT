import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpModel } from '../emp.model';
import { EmpService } from '../emp.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2'


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
            if (res.status == "success") {
              localStorage.setItem("EmpId",res.eid);
              this.router.navigate(['employer/dashboard'])
            }
            else{
              Swal.fire({
                toast: true,
                color: 'blue',
                background: 'grey',
                icon: 'error',
                title: res.message,
                position: 'center-left',
                showConfirmButton: false,
                timer: 10000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mousecenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })
              

            }
          }
        )
  }

  ngOnInit(): void {
  }

}
