import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CRUDMasterComponent } from './crud-master.component';

describe('CRUDMasterComponent', () => {
  let component: CRUDMasterComponent;
  let fixture: ComponentFixture<CRUDMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CRUDMasterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CRUDMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
