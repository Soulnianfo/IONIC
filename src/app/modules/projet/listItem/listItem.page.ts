import { Component, OnInit } from "@angular/core";
import { ListItemService } from "./listItem.service";
import { ArticleDetailService } from "../articleDetail/articleDetail.service";
import { Router } from "@angular/router";
@Component({
  selector: 'listItem',
  templateUrl: './listItem.page.html',
  styleUrls: ['./listItem.page.scss'],
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
	
	
	
    constructor(public service: ListItemService, public router: Router, public articleService: ArticleDetailService) {
      
    }
    ngOnInit() {
    console.log("INIT PAGE1");


    this.listItem();
    this.listIdexBD();
  }

changePage(){
	let articlesTempo = [];
	for (let article = this.indexElement; article < this.elementAfficher; article++) {
          let temp = { article: this.Allarticles[article], valide: false };
          for (let index in this.indexDB) {
           
            if (this.indexDB[index].article.id == temp.article.id) { temp.valide = true; }
          }
          articlesTempo.push(temp);
         
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
 
  AllarticlesDBTMP.push(this.AllarticlesDB[elementBD])
  }
 this.indexDB = AllarticlesDBTMP;
}



//Nouveau
listIdexBD(){
  let AllarticlesDB =[];
 
  this.service.getArticlesInIndexBD().then((response: Array<any>) => { this.indexDBTMP = response;
  this.size = this.indexDBTMP.length;
  console.log("la taille de index bd "+this.size);
  console.log("la taille de elementAfficherBD "+this.elementAfficherBD);

    if(this.size < this.elementAfficherBD)
	{
    console.log("");
		this.elementAfficherBD = this.size;
		this.pageSuivanteBD =1;
	}
	else{
		this.pageSuivanteBD+=1;
		
	}
		 
    for (let elementBD = this.indexElementBD; elementBD< this.elementAfficherBD; elementBD++) {
   
    AllarticlesDB.push(response[elementBD])
    }
   this.indexDB = AllarticlesDB;
   this.AllarticlesDB = this.indexDBTMP;
  
  });
}



  listItem() {
    let articlesTempo = [];


    this.service.getArticles().subscribe(
      (data: Array<any>) => {
      
	   
        this.service.getArticlesInIndexBD().then(
          (response: Array<any>) => {
              this.indexDB = response;
              console.log(response);
          
              for (let article = this.indexElement; article < this.elementAfficher; article++) {
               
                let temp = { article: data[article], valide: false };
         
                for (let index in this.indexDB) {
                 
                  if (this.indexDB[index].article.id == temp.article.id) {  temp.valide = true; }
                }
                articlesTempo.push(temp);
               // console.log("listItem " + article);
              }

          }
        );
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
   
    let i;
    for (i in this.articles) {
     
      if (this.articles[i].article.id == id) {
       
        this.articles[i].valide = false;
        this.service.delete(id);
     
        i = this.articles.length;
      }
    }

    this.service.getArticlesInIndexBD().then((response: Array<any>) => { this.indexDB = response });
    this.router.navigateByUrl("listItem");
  }

  
  deleteFromIndexBD(id) {
    
    let i;
    for (i in this.indexDB) {

      if (this.indexDB[i].article.id == id) {
      //  console.log(" id 2"+this.articles[i].article.id);
        this.indexDB[i].valide = false;
       this.service.delete(id);
        i = this.indexDB.length;
      }
      console.log(" 0 pageCouranteDB "+this.pageCourante);
      console.log(" 0 pageSuivantDB "+this.pageSuivanteBD);

    }

    this.service.getArticlesInIndexBD().then((response: Array<any>) => {
       this.indexDB = response ;
       this.AllarticlesDB= this.indexDB
      });
     // this.changePageDB();
     this.listIdexBD();
    this.router.navigateByUrl("listItem");

    console.log(" 1 pageCouranteDB "+this.pageCourante);
    console.log(" 1 pageSuivantDB "+this.pageSuivanteBD);
  }

  add(id) {
    let i;
    for (i in this.articles) {
     
      if (this.articles[i].article.id == id) {
        this.articles[i].valide = true;
       
        this.service.add(this.articles[i]);
        i = this.articles.length;
      }
    }
    this.service.getArticlesInIndexBD().then((response: Array<any>) => { this.indexDB = response });
    this.router.navigateByUrl("listItem");
  }

  detail(article) {

    this.articleService.setArticle(article);
    this.goToPageDetails();
    
  }
  

  goToPageDetails(){
    this.router.navigateByUrl("articleDetail");
  }
}
