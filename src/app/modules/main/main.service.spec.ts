import {MainService} from "./main.service";

describe('Service: Main Service', () => {
  let service: MainService;

  beforeEach(()=> {
      service = new MainService();
    }
  );

  it('should get status', () => {
    let status = service.getStatus();
    expect(status).toEqual("Mon Status");
  });

});
