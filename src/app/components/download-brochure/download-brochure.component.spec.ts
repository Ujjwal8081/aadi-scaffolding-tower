import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadBrochureComponent } from './download-brochure.component';

describe('DownloadBrochureComponent', () => {
  let component: DownloadBrochureComponent;
  let fixture: ComponentFixture<DownloadBrochureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DownloadBrochureComponent]
    });
    fixture = TestBed.createComponent(DownloadBrochureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
