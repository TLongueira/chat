import { TestBed } from '@angular/core/testing';

import { FireChatService } from './fire-chat.service';

describe('FireChatService', () => {
  let service: FireChatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FireChatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
