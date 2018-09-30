import { TestBed, inject } from '@angular/core/testing';

import { AddLessonService } from './add-lesson.service';

describe('AddLessonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddLessonService]
    });
  });

  it('should be created', inject([AddLessonService], (service: AddLessonService) => {
    expect(service).toBeTruthy();
  }));
});
