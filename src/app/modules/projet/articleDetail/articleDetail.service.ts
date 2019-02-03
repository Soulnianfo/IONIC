import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Storage } from "@ionic/storage";

@Injectable()
export class ArticleDetailService {

  public article: object;
  constructor(public httpclient: HttpClient, public storage: Storage) {

  }

  setArticle(article) {
    console.log(article);
    this.storage.set("articleDetail", article);
    this.article = article;
  }
  getArticle() {
    return this.storage.get("articleDetail");
  }
}
