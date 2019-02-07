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
 
  public AllarticlesDB: Array<any>;
  public Allarticles: Array<any>;
  public articles: Array<any>;
  public indexDB: Array<any>;
  public indexDBTMP: Array<any>;
  public text: string;
  public articleDetail: Object;
 
   erreur: boolean =false;
   pageCourante: number =1;
   indexElement: number =0;
   elementAfficher: number =10;

   pageCouranteBD: number =1;
   indexElementBD: number =0;
   elementAfficherBD: number =10;

    pageSuivanteBD: number =1;
	pagePrcedenteBD: number =0;
	size: number ;
	
	
	
  constructor(public service: ListItemService, public router: Router, public articleService: ArticleDetailService) { }
    ngOnInit() {
    console.log("INIT PAGE1");
    console.log("2 : pageCourante, indexElement,elementAfficher "+this.pageCourante+","+this.indexElement+","+this.elementAfficher);
    

    this.listItem();
    this.listIdexBD();
  }
/* Ancien
listIdexBD(){
  let AllarticlesDB =[];
  this.service.getArticlesInIndexBD().then((response: Array<any>) => { this.indexDBTMP = response;
    if(this.indexDBTMP.length < this.elementAfficherBD)
      this.elementAfficherBD = this.indexDBTMP.length;
    
    for (let elementBD = this.indexElementBD; elementBD< this.elementAfficherBD; elementBD++) {
    console.log("INDEX BD : "+response[elementBD].article.id);
    console.log("INDEX BD 1: "+response[elementBD].valide);
   
    AllarticlesDB.push(response[elementBD])
    }
   this.indexDB = AllarticlesDB;
  

  });
}
*/


changePage(){
	let articlesTempo = [];
	for (let article = this.indexElement; article < this.elementAfficher; article++) {
          let temp = { article: this.Allarticles[article], valide: false };
          for (let index in this.indexDB) {
           
            if (this.indexDB[index].article.id == temp.article.id) { temp.valide = true; }
          }
          articlesTempo.push(temp);
         // console.log("listItem " + article);
        }
		this.articles = articlesTempo;	
}

changePageDB(){
	let AllarticlesDBTMP =[];
  this.size = this.AllarticlesDB.length;
  if(this.size < this.elementAfficherBD)
{
  this.elementAfficherBD = this.size;
  this.pageSuivanteBD =1;
}
else{
  this.pageSuivanteBD+=1;
  
}
for (let elementBD = this.indexElementBD; elementBD< this.elementAfficherBD; elementBD++) {
  //console.log("INDEX BD : "+response[elementBD].article.id);
  //console.log("INDEX BD 1: "+response[elementBD].valide);
 
  AllarticlesDBTMP.push(this.AllarticlesDB[elementBD])
  }
 this.indexDB = AllarticlesDBTMP;
 console.log("la taille du INDEX DB : "+this.indexDB.length);
}



//Nouveau
listIdexBD(){
  let AllarticlesDB =[];
 
  this.service.getArticlesInIndexBD().then((response: Array<any>) => { this.indexDBTMP = response;
	this.size = this.indexDBTMP.length;
    if(this.size < this.elementAfficherBD)
	{
		this.elementAfficherBD = this.size;
		this.pageSuivanteBD =1;
	}
	else{
		this.pageSuivanteBD+=1;
		
	}
		 
    for (let elementBD = this.indexElementBD; elementBD< this.elementAfficherBD; elementBD++) {
    console.log("INDEX BD : "+response[elementBD].article.id);
    console.log("INDEX BD 1: "+response[elementBD].valide);
   
    AllarticlesDB.push(response[elementBD])
    }
   this.indexDB = AllarticlesDB;
   this.AllarticlesDB = this.indexDBTMP;
  
  });
}



  listItem() {
    let articlesTempo = [];

    console.log("3 : pageCourante, indexElement,elementAfficher "+this.pageCourante+","+this.indexElement+","+this.elementAfficher);
   
    this.service.getArticles().subscribe(
      (data: Array<any>) => {
      
	   
        this.service.getArticlesInIndexBD().then((response: Array<any>) => { this.indexDB = response });
        for (let article = this.indexElement; article < this.elementAfficher; article++) {
          let temp = { article: data[article], valide: false };
          for (let index in this.indexDB) {
           
            if (this.indexDB[index].article.id == temp.article.id) { temp.valide = true; }
          }
          articlesTempo.push(temp);
         // console.log("listItem " + article);
        }
        this.articles = articlesTempo;
        this.Allarticles = data;
        this.erreur = true;
      }
    );
  
  }
  next(){
    this.pageCourante+=1;
    this.indexElement = this.elementAfficher;
    this.elementAfficher += 10;
   // this.listItem();	
  	this.changePage()
    this.router.navigateByUrl("listItem");	   
 }

 before(){
	this.pageCourante-=1;
	this.indexElement = this.indexElement - 10;
	this.elementAfficher = this.elementAfficher -10;
	//this.listItem();  
	this.changePage();
	this.router.navigateByUrl("listItem");	
  }

  nextINDEXBD(){
    this.pageCouranteBD+=1;
    this.indexElementBD = this.elementAfficherBD;
    this.elementAfficherBD +=10;
    this.listIdexBD();
    this.router.navigateByUrl("listItem");	
  }

  beforeINDEXBD(){
    this.pageCouranteBD-=1;
    this.indexElementBD = this.indexElementBD - 10;
    this.elementAfficherBD = this.indexElementBD + 10;
    this.listIdexBD();
    this.router.navigateByUrl("listItem");

  }


  delete(id) {
    console.log(" 0 suppression ");
    console.log(" id "+id);
    let i;
    for (i in this.articles) {
      console.log(" id 1"+id);
      if (this.articles[i].article.id == id) {
        console.log(" id 2"+this.articles[i].article.id);
        this.articles[i].valide = false;
        this.service.delete(id);
        console.log("suppression ");
        i = this.articles.length;
      }
    }

    this.service.getArticlesInIndexBD().then((response: Array<any>) => { this.indexDB = response });
    this.router.navigateByUrl("listItem");
  }

  
  deleteFromIndexBD(id) {
    console.log(" 0 suppression ");
    console.log(" id "+id);
    let i;
    for (i in this.indexDB) {
      console.log(" id 1"+id);
      if (this.indexDB[i].article.id == id) {
      //  console.log(" id 2"+this.articles[i].article.id);
        this.indexDB[i].valide = false;
        this.service.delete(id);
        console.log("suppression ");
        i = this.indexDB.length;
      }
    }

    this.service.getArticlesInIndexBD().then((response: Array<any>) => {
       this.indexDB = response ;
       this.AllarticlesDB= this.indexDB
      });
     // this.changePageDB();
     this.listIdexBD();
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
