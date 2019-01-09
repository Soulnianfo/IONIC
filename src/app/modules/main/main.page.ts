import {Component, OnInit} from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: 'main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
  host: {'class': 'main'},
  providers: []
})
export class MainPage implements OnInit {

  constructor(public router: Router) {}

  ngOnInit() {
    console.log("INIT MAIN PAGE");
  }

  goToPage1(){
    this.router.navigateByUrl("page1");
  }
}

