import { Component } from '@angular/core';
import {
  async,
  TestBed
} from '@angular/core/testing';

import { LockComputerModule } from './lockComputer.module';

export function main() {
   describe('LockComputer component', () => {
    // Setting module for testing
    // Disable old forms

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TestComponent],
        imports: [LockComputerModule]
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
  template: '<sd-lockComputer></sd-lockComputer>'
})
class TestComponent {}
