import { Directive, DoCheck, ElementRef, NgZone } from '@angular/core';
import { CheckCounterService } from '../services/check-counter.service';

@Directive({
  selector: '[appHighlightCheck]'
})
export class HighlightCheckDirective implements DoCheck {

  constructor(private eltRef: ElementRef, private zone: NgZone, private checkCounter: CheckCounterService) {}

  ngDoCheck(): void {
    this.enlight(this.eltRef.nativeElement);
  }

  enlight(elt: HTMLElement): void {
    this.zone.runOutsideAngular(() => {

      const currentCheckIx = this.checkCounter.checkCount++;
      setTimeout( () => {
        elt.classList.replace('mat-elevation-z1', 'mat-elevation-z8');
        elt.style.backgroundColor = '#c7c7f5';
        setTimeout(() => {
          elt.classList.replace('mat-elevation-z8', 'mat-elevation-z1');
          elt.style.backgroundColor = 'white';
        }, 1000);
      }, currentCheckIx * 200 );
    });
  }
}
