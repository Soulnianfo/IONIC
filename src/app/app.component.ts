import { Component, OnInit } from "@angular/core";
import { LoginService } from "./modules/projet/login/login.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.scss'],
  providers: [LoginService],
})
export class AppComponent implements OnInit {
  public username: string;
  constructor(public service: LoginService, public router: Router) {

  }

  ngOnInit() {
    localStorage.setItem("identifiant", "Mickael");
    this.username = this.service.getusername();
    console.log("user logged " + this.username)
    if (this.username == null) {
      this.router.navigateByUrl("/login")
    } else {
      this.router.navigateByUrl("/listItem")
    }
  }
}
