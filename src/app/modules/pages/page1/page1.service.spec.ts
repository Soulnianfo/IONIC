import {Page1Service} from "./page1.service";
import {HttpClient} from "@angular/common/http";
import createMockInstance from "jest-create-mock-instance";
import {Storage} from "@ionic/storage";
import {of} from "rxjs";
import {TestUtil} from "../../../test/util.test";


describe('Service: List Service', () => {
  let service: Page1Service;
  let httpClient: HttpClient = createMockInstance(HttpClient);
  let storage: Storage = createMockInstance(Storage);

  let mock = {
    title: "titre",
    body: "body"
  };

  beforeEach(()=> {
      httpClient = createMockInstance(HttpClient);
      storage = createMockInstance(Storage);
      service = new Page1Service(httpClient, storage);

      spyOn(service, "getArticles").and.returnValue(of(mock));
      spyOn(service, "persistArticles").and.returnValue(TestUtil.promise(true));

      spyOn(httpClient, "get").and.returnValue(of(mock));
      spyOn(storage, "set").and.returnValue(of(TestUtil.promise(true)));


    }
  );

  it('should getArticles', (done) => {
    service.getArticles().subscribe(
      data => {
        expect(data).toEqual(mock);
        done();
      },
      error =>{
        fail(error);
      }
    );
  });

  it('should persistArticles', (done) => {
    service.persistArticles(mock).then(
      data => {
        expect(data).toEqual(true);
        done();
      },
      error =>{
        fail(error);
      }
    );
  });
});
