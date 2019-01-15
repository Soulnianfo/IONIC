import {Injectable} from "@angular/core";

@Injectable()
export class MainService {

  constructor(){}

  getStatus(){
    return "Mon Status";
  }
}
