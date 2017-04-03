import { Component } from '@angular/core';
import {
  async,
  TestBed
} from '@angular/core/testing';

import { OnlineUseModule } from './onlineUse.module';

export function main() {
   describe('OnlineUse component', () => {
    // Setting module for testing
    // Disable old forms

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TestComponent],
        imports: [OnlineUseModule]
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
  template: '<sd-onlineUse></sd-onlineUse>'
})
class TestComponent {}
