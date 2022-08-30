import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobModel } from '../job.model';
import { JobService } from '../job.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2'
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { SkillService } from '../skill.service';

@Component({
  selector: 'app-job-post',
  templateUrl: './job-post.component.html',
  styleUrls: ['./job-post.component.css']
})
export class JobPostComponent implements OnInit {
  
  addJob = new JobModel('','','','','','',null!,null!);
  constructor(private jobService: JobService, private skillService: SkillService, private router: Router) { }
  dropdownList: Array<Object> = [];
  selectedItems = [];
  dropdownSettings:IDropdownSettings={};

  ngOnInit(): void {
    // Getting skills for the dropdown from the skills collection
    this.skillService.getSkill()
        .subscribe(
          (res:any) =>{
            this.dropdownList =JSON.parse(JSON.stringify(res));
          });
          

    console.log("dropdown is",this.dropdownList);
    
    this.dropdownSettings  = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };

  }

  onItemSelect(item: any) {
    console.log("onselect",item);
  }
  onSelectAll(items: any) {
    console.log("onselectall",items);
  }

AddJob(){
    this.jobService.newJobs(this.addJob)
    // .subscribe(
    //   (res:any) => {  
    //     alert("res.message")
    //   })
    this.router.navigate(['employer/dashboard']);
    alert ("success")
}
}
