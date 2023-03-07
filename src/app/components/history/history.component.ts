import { Component, Input } from "@angular/core";
import { Subject } from "rxjs";

@Component({
  selector: "app-history",
  templateUrl: "./history.component.html",
  styleUrls: ["./history.component.scss"],
})
export class HistoryComponent {
  @Input() entry: Subject<string> = new Subject<string>();
  @Input() clear: Subject<void> = new Subject<void>();
  public history: string[] = ["0"];

  ngOnInit(): void {
    this.entry.subscribe((entry) => {
      this.addHistoryEntry(entry);
    });

    this.clear.subscribe(() => {
      this.clearHistory();
    });
  }

  clearHistory(): void {
    this.history = ["0"];
  }

  // TODO: Stack the history entries
  // ^Maybe there is a better way to do this?
  addHistoryEntry(entry: string): void {
    this.history[this.history.length] = entry;
  }

  /* WARNING: Scrapped for being too complicated
  **
  addHistoryEntry(entry: string): void {
    const newHistory = [entry];
    for (let i = 0; i < this.history.length; i++) {
      newHistory[i + 1] = this.history[i];
    }
    this.history = newHistory;
  }
  */
}
