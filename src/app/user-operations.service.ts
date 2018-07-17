import { Injectable } from '@angular/core';
import pnp from "sp-pnp-js";
import { from } from 'rxjs';
import { UserInforation } from './user-inforation';

@Injectable({
  providedIn: 'root'
})
export class UserOperationsService {

  constructor() {
  }

  private getConfigInfo() {
    const mySP = pnp.sp.configure({
      headers: {
        "Accept": "application/json; odata=verbose"
      }
    }, "https://infotech9211.sharepoint.com/sites/CDN");

    return mySP;
  }

  getSiteInformation() {
    const data = from(this.getConfigInfo().web.get())
    return data;
  }

  getListInformation() {
    const data = from(this.getConfigInfo().web.lists.get())
    return data;
  }

  getUserInformation() {

    const data = from(this.getConfigInfo().web.lists.getByTitle("Users").items.getAll());
    return data;
  }

  AddUserInformation(UserInforation: UserInforation) {
    const data = from(this.getConfigInfo().web.lists.
      getByTitle("Users").items.
      add({
        "Title": UserInforation.Title,
        "Desc": UserInforation.Desc
      })
    );

    return data;
  }

  DeleteUserInformation(Id: number) {
    const data = from(this.getConfigInfo().web.lists.getByTitle("Users").items.getById(Id).delete());
    return data;
  }

}
