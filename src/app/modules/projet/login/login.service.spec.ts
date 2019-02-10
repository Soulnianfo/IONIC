import { LoginService } from "./login.service";
import { HttpClient } from "@angular/common/http";
import createMockInstance from "jest-create-mock-instance";
import { Storage } from "@ionic/storage";
import { of } from "rxjs";
import { TestUtil } from "../../../test/util.test";


describe('Service:Login Page Service', () => {
  let service: LoginService;
  let httpClient: HttpClient = createMockInstance(HttpClient);
  let storage: Storage = createMockInstance(Storage);

  let mock = {
    title: "titre",
    body: "body"
  };

  beforeEach(() => {
    httpClient = createMockInstance(HttpClient);
    storage = createMockInstance(Storage);
    service = new LoginService(httpClient, storage);

    spyOn(service, "setArticles").and.returnValue(TestUtil.promise(true));
    
    spyOn(storage, "set").and.returnValue(of(TestUtil.promise(true)));
  }
  );

  it('should setArticles', (done) => {
    let v = service.setArticles().then(
      (data: any) => {
        expect(data).toEqual(true);
        done();
      },
      error => {
        fail(error);
      }
      );
  });


  it('should persistUsername', () => {
    let username = service.persistUsername("soul");
    expect(username).toEqual("soul");
  });
  it('should getusername', () => {
    let username = service.getusername();
    expect(username).toEqual("soul");
  });

});
