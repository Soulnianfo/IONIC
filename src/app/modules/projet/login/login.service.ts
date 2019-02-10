import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Storage } from "@ionic/storage";

@Injectable()
export class LoginService {


  constructor(public httpclient: HttpClient, public storage: Storage) {

  }

  persistUsername(username) {
    return localStorage.setItem("username", username);
  }
  getusername() {
    return localStorage.getItem("username");
  }

  setArticles() {
    return this.storage.set("articles", []);
  }

}
