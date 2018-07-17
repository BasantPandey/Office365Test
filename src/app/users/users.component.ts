import { UserOperationsService } from './../user-operations.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserInforation } from '../user-inforation';

@Component({
  selector: 'Office-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  UserInforation:UserInforation[];
  constructor(private ToastrService:ToastrService, private UserOperationsService:UserOperationsService) { }

  ngOnInit() {
   this.loadUsers();
  }

  loadUsers(){
    this.UserInforation=[]
    this.UserOperationsService.getUserInformation().subscribe(
      (Response)=>{
        Response.forEach(element => {
          this.UserInforation.push(new UserInforation(element.Title,element.Desc, +element.Id))
        });
      },
      (err)=>{console.log(err)},
      ()=>{this.ToastrService.info("data Loaded")}
    );
  }

  ondeleteAction(id){

    this.UserOperationsService.DeleteUserInformation(+id).subscribe(
      (Response)=>{
        console.log(Response)
      },
      (err)=>{console.log(err)},
      ()=>{
        this.ToastrService.info("Item deleted :" + id)
        this.loadUsers();
    }
    );

    
  }

}
