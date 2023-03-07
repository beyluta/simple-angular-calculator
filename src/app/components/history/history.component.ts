import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent {
  @Input() entry: Subject<string> = new Subject<string>();
  @Input() clear: Subject<void> = new Subject<void>();
  public history: string[] = ['0'];

  ngOnInit(): void {
    this.entry.subscribe((entry) => {
      this.addHistoryEntry(entry);
    });

    this.clear.subscribe(() => {
      this.clearHistory();
    });
  }

  clearHistory(): void {
    this.history = ['0'];
  }

  addHistoryEntry(entry: string): void {
    this.history.unshift(entry);
  }
}
