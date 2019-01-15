import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.scss'],
  providers: [],
})
export class AppComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {
    localStorage.setItem("identifiant", "Mickael");

  }
}
