import { Component, OnInit } from "@angular/core";
import { LoginService } from "./login.service";
import { Router } from "@angular/router";

@Component({
  selector: 'login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  host: { 'class': 'login' },
  providers: [LoginService]
})
export class LoginPage implements OnInit {

  public articles: Array<any>;
  public username: string;
  constructor(public service: LoginService, public router: Router) { }


  ngOnInit() {
    console.log("INIT PAGE1");
   
  }

  login(username: string) {
    this.service.persistUsername(username);
    this.service.setArticles();
    this.username = this.service.getusername();
    if(this.username == null) {
         this.router.navigateByUrl("/login")
    }
    else{
      this.GoToListItemPage();
    }
   
    
  }

  GoToListItemPage() {
    this.router.navigateByUrl("listItem")
    
  }
}

