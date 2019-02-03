
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ListItemPage } from "../listItem/listItem.page";
import { ArticleDetailService } from "./articleDetail.service";

@Component({
  selector: 'articleDetail',
  templateUrl: './articleDetail.page.html',
  host: { 'class': 'articleDetail' },
  providers: [ArticleDetailService]
})
export class articleDetailPage implements OnInit {

  public article: object;

  constructor(public router: Router, public service: ArticleDetailService) { }

  ngOnInit() {
    this.service.getArticle().then((response: object) => { this.article = response });;
   
  }
}
