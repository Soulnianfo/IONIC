import { Component, OnInit } from "@angular/core";
import { ListItemService } from "./listItem.service";
import { Router } from "@angular/router";
@Component({
  selector: 'listItem',
  templateUrl: './listItem.page.html',
  //styleUrls: ['./login.page.scss'],
  host: { 'class': 'listItem' },
  providers: [ListItemService]
})
export class ListItemPage implements OnInit {

  public articles: Array<any>;
  public indexDB: Array<any>;
  public text: string;

  constructor(public service: ListItemService, public router: Router) { }

  ngOnInit() {
    console.log("INIT PAGE1");
    
    this.listItem();
    this.service.getArticlesInIndexBD().then((response: Array<any>) => { this.indexDB = response });
  }

  listItem() {
    let articlesTempo = [];
    /*console.log("length :" + articlesTempo.length);
    console.log(articlesTempo[0]);
    if (articlesTempo.length == 0) {
      console.log("length à 0")
      this.service.getArticlesInIndexBD().then((response: Array<any>) => { this.articles = response });
    }*/
    this.service.getArticles().subscribe(
      (data: Array<any>) => {
        console.log("okkkkk!!!!");
        for (let article = 0; article < 10; article++) {
          let temp = { article: data[article], valide: false };
          articlesTempo.push(temp);
         // articlesTempo.push(data[article]);
          console.log("listItem " + article);
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
  loadIndexDB() {
    this.service.getArticlesInIndexBD().then((response: Array<any>) => { this.articles = response });
    this.router.navigateByUrl("listItem");
  }
}

