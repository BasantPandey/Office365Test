import { UserOperationsService } from '../user-operations.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserInforation } from '../user-inforation';


@Component({
  selector: 'Office-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  UserName: string = '';
  Desc: string = ''
  constructor(private ToastrService: ToastrService, private UserOperationsService: UserOperationsService) {

  }

  ngOnInit() {

  }

  onSave() {
    this.UserOperationsService.
      AddUserInformation(new UserInforation(this.UserName, this.Desc)).
      subscribe(
        (Response) => {
          console.log(Response);
        },
        (err) => { console.log(err) },
        () => {
          this.ToastrService.info("users added")
          this.UserName = "";
          this.Desc = "";
        }
      );
  }
}
