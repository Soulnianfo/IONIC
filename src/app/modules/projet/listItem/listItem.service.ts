import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Storage } from "@ionic/storage";

@Injectable()
export class ListItemService {


  constructor(public httpclient: HttpClient, public storage: Storage) {

  }

 getArticles() {
     return this.httpclient.get("https://jsonplaceholder.typicode.com/posts");
  }

 delete(id) {
   return this.storage.get("articles").then((response: Array<any>) => {

     for (let index in response) {
       if (response[index].article.id == id) {
         response.splice(Number(index), 1);
         this.storage.set("articles", response)
       }
     }
   });
    
  }

 add(article) {
   return this.storage.get("articles").then((response: Array<any>) => {
     response.push(article);
     this.storage.set("articles", response)
   });
  }


  getArticlesInIndexBD(){

    return this.storage.get("articles");
  }
}
