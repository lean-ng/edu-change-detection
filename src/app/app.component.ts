import { Component, DoCheck } from '@angular/core';
import { HighlightService } from './services/highlight.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements DoCheck {

  constructor(private highlightService: HighlightService) {}

  ngDoCheck(): void {
   this.highlightService.treeDepth = 0;
  }
}

