import {of as observableOf} from 'rxjs';
import {Injectable} from '@angular/core';

export class TestUtil {

  public static mockService(service: any, methods: string[]) {


    methods.forEach(method => MockedClass.prototype[method] = observableOf({}));

    return {provide: service, useClass: MockedClass};
  }
}

@Injectable()
export class MockedClass {
}
