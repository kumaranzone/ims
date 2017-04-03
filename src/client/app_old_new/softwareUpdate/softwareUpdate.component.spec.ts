import { Component } from '@angular/core';
import {
  async,
  TestBed
} from '@angular/core/testing';

import { SoftwareUpdateModule } from './softwareUpdate.module';

export function main() {
   describe('Antivirus component', () => {
    // Setting module for testing
    // Disable old forms

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TestComponent],
        imports: [SoftwareUpdateModule]
      });
    });

    it('should work',
      async(() => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.createComponent(TestComponent);
            let aboutDOMEl = fixture.debugElement.children[0].nativeElement;

              expect(aboutDOMEl.querySelectorAll('h2')[0].textContent).toEqual('Features');
          });
        }));
    });
}

@Component({
  selector: 'test-cmp',
  template: '<sd-softwareUpdate></sd-softwareUpdate>'
})
class TestComponent {}
