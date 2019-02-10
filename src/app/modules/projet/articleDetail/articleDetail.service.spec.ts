import { ArticleDetailService } from "./articleDetail.service";
import { HttpClient } from "@angular/common/http";
import createMockInstance from "jest-create-mock-instance";
import { Storage } from "@ionic/storage";
import { of } from "rxjs";
import { TestUtil } from "../../../test/util.test";


describe('Service: Page Service', () => {
  let service: ArticleDetailService;
  let httpClient: HttpClient = createMockInstance(HttpClient);
  let storage: Storage = createMockInstance(Storage);

  let mock = {
    title: "titre",
    body: "body"
  };

  beforeEach(() => {
    httpClient = createMockInstance(HttpClient);
    storage = createMockInstance(Storage);
    service = new ArticleDetailService(httpClient, storage);

    spyOn(service, "getArticle").and.returnValue(of(mock));
    spyOn(service, "setArticle").and.returnValue(TestUtil.promise(true));

    spyOn(storage, "get").and.returnValue(of(mock));
    spyOn(storage, "set").and.returnValue(of(TestUtil.promise(true)));


  }
  );

  it('should getArticle', (done) => {
    let v = service.getArticle()
      .subscribe(
      (data: any) => {
        expect(data).toEqual(mock);
        done();
      },
      error => {
        fail(error);
      }
    );
  });

  it('should setArticle', (done) => {
    service.setArticle(mock).then(
      data => {
        expect(data).toEqual(true);
        done();
      },
      error => {
        fail(error);
      }
    );
  });
});
