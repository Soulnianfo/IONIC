import { Component, OnInit } from "@angular/core";
import { ListItemService } from "./listItem.service";
import { ArticleDetailService } from "../articleDetail/articleDetail.service";
import { Router } from "@angular/router";
@Component({
  selector: 'listItem',
  templateUrl: './listItem.page.html',
  //styleUrls: ['./login.page.scss'],
  host: { 'class': 'listItem' },
  providers: [ListItemService , ArticleDetailService]
})
export class ListItemPage implements OnInit {

  public articles: Array<any>;
  public indexDB: Array<any>;
  public text: string;
  public articleDetail: Object;

  constructor(public service: ListItemService, public router: Router, public articleService: ArticleDetailService) { }

  ngOnInit() {
    console.log("INIT PAGE1");
    
    this.listItem();
    this.service.getArticlesInIndexBD().then((response: Array<any>) => { this.indexDB = response });
  }

  listItem() {
    let articlesTempo = [];
   
    this.service.getArticles().subscribe(
      (data: Array<any>) => {
        this.service.getArticlesInIndexBD().then((response: Array<any>) => { this.indexDB = response });
        for (let article = 0; article < 10; article++) {
          let temp = { article: data[article], valide: false };
          for (let index in this.indexDB) {
            
            if (this.indexDB[index].article.id == temp.article.id) { temp.valide = true; }
          }
          articlesTempo.push(temp);
         // console.log("listItem " + article);
        }
        this.articles = articlesTempo;
      }
    );

  }

  delete(id) {
    
    let i;
    for (i in this.articles) {

      if (this.articles[i].article.id == id) {
        this.articles[i].valide = false;
        this.service.delete(id);
        console.log("suppression ");
        i = this.articles.length;
      }
    }

    this.service.getArticlesInIndexBD().then((response: Array<any>) => { this.indexDB = response });
    this.router.navigateByUrl("listItem");
  }

  add(id) {
    let i;
    for (i in this.articles) {
     
      if (this.articles[i].article.id == id) {
        this.articles[i].valide = true;
        console.log("valide ");
        this.service.add(this.articles[i]);
        i = this.articles.length;
      }
    }
    this.service.getArticlesInIndexBD().then((response: Array<any>) => { this.indexDB = response });
    this.router.navigateByUrl("listItem");
  }
  detail(article) {

    this.articleService.setArticle(article);
      this.router.navigateByUrl("articleDetail");
    
  }
  
}

