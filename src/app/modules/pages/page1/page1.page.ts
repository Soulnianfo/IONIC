import {Component, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Page1Service} from "./page1.service";

@Component({
  selector: 'page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
  host: {'class': 'page1'},
  providers: [Page1Service]
})
export class Page1Page implements OnInit {

  public articles: Array<any>;

  constructor(public page1Service: Page1Service) {}

  ngOnInit() {
    console.log("INIT PAGE1");

    this.page1Service.getArticles().subscribe(

      (data: Array<any>) => {
        this.articles = data;
      }
    );
  }
}

