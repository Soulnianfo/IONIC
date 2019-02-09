import {LoginService} from "./login.service";
import {LoginPage} from "./login.page";
import {Router} from "@angular/router";

import {HttpClient} from "@angular/common/http";
import createMockInstance from "jest-create-mock-instance";
import {Storage} from "@ionic/storage";
import {of} from "rxjs";
import {TestUtil} from "../../../test/util.test";




describe('Login: Login Page', () => {
    let page: LoginPage;
    let service: LoginService;
    let router: Router = createMockInstance(Router);
  
    beforeEach(()=> {
        page = new LoginPage(service,router);
        spyOn(router, "navigateByUrl");
      });

      it('should goToPageItem', () => {
        page.GoToListItemPage();
       // page.login("toto");
        expect(router.navigateByUrl).toHaveBeenCalledTimes(1);
        expect(router.navigateByUrl).toHaveBeenCalledWith("listItem");
    
      });
    });



  