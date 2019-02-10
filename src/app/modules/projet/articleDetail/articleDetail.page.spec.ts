
import { ArticleDetailService } from "./articleDetail.service";
import {articleDetailPage} from "./articleDetail.page";


import {Router} from "@angular/router";

import {HttpClient} from "@angular/common/http";
import createMockInstance from "jest-create-mock-instance";
import {Storage} from "@ionic/storage";
import {of} from "rxjs";
import {TestUtil} from "../../../test/util.test";




describe('articleDetailPage: articleDetail  Page', () => {
    let page: articleDetailPage;
    let service: ArticleDetailService;
    let router: Router = createMockInstance(Router);
  
    beforeEach(()=> {
        page = new articleDetailPage(router,service);
        spyOn(router, "navigateByUrl");
      });

      it('should returnToListItemPage', () => {
        page.retourListItem();
        expect(router.navigateByUrl).toHaveBeenCalledTimes(1);
        expect(router.navigateByUrl).toHaveBeenCalledWith("listItem");
    
      });
    });



  