import {of as observableOf} from 'rxjs';
import {Injectable} from '@angular/core';

export class TestUtil {

  public static mockService(service: any, methods: string[]) {


    methods.forEach(method => MockedClass.prototype[method] = observableOf({}));

    return {provide: service, useClass: MockedClass};
  }

  public static promise(returnedValue?) {
    return new Promise((resolve) => {
      resolve(returnedValue);
    });
  }

}

@Injectable()
export class MockedClass {
}
