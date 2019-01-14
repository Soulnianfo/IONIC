import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class Page1Service {


  constructor(public httpclient: HttpClient) {
  }

  getArticles(){
    return this.httpclient.get("https://jsonplaceholder.typicode.com/posts");
  }

}
