import { ListInformation } from './../list-information';
import { SiteInformation } from './../site-information';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { UserOperationsService } from '../user-operations.service';

@Component({
  selector: 'Office-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  _SiteInformation: SiteInformation = new SiteInformation(null, null, null);
  _ListInformation: ListInformation[] = [];

  constructor(private ToastrService: ToastrService, private UserOperationsService: UserOperationsService) { }

  ngOnInit() {
    this.getSiteInformation();
    this.getListInformation();
  }

  getSiteInformation() {
    this.UserOperationsService.getSiteInformation().subscribe(
      (Response) => {
        console.log(Response);
        this._SiteInformation.Title = Response.Title;
        this._SiteInformation.Url = Response.Url;
        this._SiteInformation.WebTemplate = Response.WebTemplate;
      },
      (err) => { console.log(err) },
      () => { this.ToastrService.success("Web Loaded successfuly") }
    )

  }

  getListInformation() {
    this.UserOperationsService.getListInformation().subscribe(
      (Response) => {
        Response.forEach((element) => {
          console.log(element.Title)
          this._ListInformation.push(new ListInformation(element.Title));
        });
      },
      (err) => { console.log(err) },
      () => { this.ToastrService.success("List Loaded successfuly") }
    )
  }

}
