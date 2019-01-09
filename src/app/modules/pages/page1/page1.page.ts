import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
  host: {'class': 'page1'},
  providers: []
})
export class Page1Page implements OnInit {

  constructor() {}

  ngOnInit() {
    console.log("INIT PAGE1");
  }
}

