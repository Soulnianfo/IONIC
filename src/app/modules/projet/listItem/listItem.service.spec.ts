import { ListItemService } from "./listItem.service";
import { HttpClient } from "@angular/common/http";
import createMockInstance from "jest-create-mock-instance";
import { Storage } from "@ionic/storage";
import { of } from "rxjs";
import { TestUtil } from "../../../test/util.test";


describe('Service: ListItem Service', () => {
  let service: ListItemService;
  let httpClient: HttpClient = createMockInstance(HttpClient);
  let storage: Storage = createMockInstance(Storage);

  let mock = {
    title: "titre",
    body: "body"
  };

  beforeEach(() => {
    httpClient = createMockInstance(HttpClient);
    storage = createMockInstance(Storage);
    service = new ListItemService(httpClient, storage);

    spyOn(service, "getArticlesInIndexBD").and.returnValue(of(mock));
    spyOn(service, "getArticles").and.returnValue(of(mock));
    spyOn(service, "add").and.returnValue(of(mock));
    spyOn(service, "delete").and.returnValue(of(mock));

    spyOn(storage, "set").and.returnValue(of(TestUtil.promise(true)));
    spyOn(storage, "get").and.returnValue(of(mock));
    spyOn(httpClient, "get").and.returnValue(of(mock));
  }
  );

  it('should getArticlesInIndexBD', (done) => {
   service.getArticlesInIndexBD().subscribe(
      (data: any) => {
        expect(data).toEqual(mock);
        done();
      },
      error => {
        fail(error);
      }
    );
  });

  it('should getArticles', (done) => {
    service.getArticles().subscribe(
      data => {
        expect(data).toEqual(mock);
        done();
      },
      error => {
        fail(error);
      }
    );
  });

  it('should add', (done) => {

    service.add(mock).subscribe(

      (data: any) => {
        expect(data).toEqual(mock);
        done();
      },
      error => {
        fail(error);
      }

    );
    
  });
  it('should delete', (done) => {
    service.delete(mock).subscribe(
      (data: any) => {
        expect(data).toEqual(mock);
        done();
      },
      error => {
        fail(error);
      }
    );
  });

});
