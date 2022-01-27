import { TestBed } from '@angular/core/testing';

import { MockRequestsInterceptor } from './mock-requests.interceptor';

describe('DebugInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      MockRequestsInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: MockRequestsInterceptor = TestBed.inject(MockRequestsInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
