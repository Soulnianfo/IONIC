
import {ListItemPage} from "./listItem.page";
import {ListItemService} from "./listItem.service";
import { ArticleDetailService } from "../articleDetail/articleDetail.service";


import {Router} from "@angular/router";

import {HttpClient} from "@angular/common/http";
import createMockInstance from "jest-create-mock-instance";
import {Storage} from "@ionic/storage";
import {of} from "rxjs";
import {TestUtil} from "../../../test/util.test";




describe('ListItemPage: ListItem Page', () => {
    let page: ListItemPage;
    let service: ListItemService;
    let articleDetail: ArticleDetailService;
    let router: Router = createMockInstance(Router);
  
    beforeEach(()=> {
        page = new ListItemPage(service,router,articleDetail);
        spyOn(router, "navigateByUrl");
      });

      it('should goToPageDetails', () => {
        page.goToPageDetails();
        expect(router.navigateByUrl).toHaveBeenCalledTimes(1);
        expect(router.navigateByUrl).toHaveBeenCalledWith("articleDetail");
    
      });
    });



  