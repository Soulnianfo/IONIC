import { Component, OnInit } from "@angular/core";
import { ListItemService } from "./listItem.service";

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

  constructor(public service: ListItemService) { }

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
          articlesTempo.push(data[article])
          console.log("listItem " + article);
        }
        this.articles = articlesTempo;
      }
    );

   
    

  }

  delete(id) {
    this.service.delete(id);
    //this.listItem();
    this.service.getArticlesInIndexBD().then((response: Array<any>) => { this.indexDB = response });
  }

  add(id) {
    let i;
    for (i in this.articles) {

      if (this.articles[i].id == id) {
        this.service.add(this.articles[i]);
        i = this.articles.length;
      }
    }
    //this.listItem();
    this.service.getArticlesInIndexBD().then((response: Array<any>) => { this.indexDB = response });
  }
  check(id) {
   

    for (let i in this.indexDB) {
     
      if (id == this.indexDB[i].id) {
        return true;
      }
    }

    return false;
  }
}

