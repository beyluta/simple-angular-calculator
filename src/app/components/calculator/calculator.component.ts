import { Component, OnInit } from "@angular/core";
import { Subject } from "rxjs";
import { VersionService } from "src/app/services/version.service";

@Component({
  selector: "app-calculator",
  templateUrl: "./calculator.component.html",
  styleUrls: ["./calculator.component.scss"],
})
export class CalculatorComponent implements OnInit {
  public result: string = "0";
  public showHistory: boolean = true;
  public newEntry: Subject<string> = new Subject<string>();
  public clear: Subject<void> = new Subject<void>();

  constructor(private versionService: VersionService) {}

  clearResult(): void {
    this.result = "0";
    this.clear.next();
  }

  toggleHistory(): void {
    this.showHistory = true;
  }

  calculateResult(): void {
    const calculatedResult = eval(this.result);
    this.newEntry.next(`${calculatedResult}`);
    this.result = calculatedResult;
  }

  addCharacterToResult(number: string): void {
    if (this.result === "0" && !isNaN(Number(number))) {
      this.result = number;
      return;
    }

    this.result += number;
  }

  onButtonClick(event: Event): void {
    // @ts-ignore-next-line
    const number = event.target.innerText;
    this.addCharacterToResult(number);
  }

  async ngOnInit(): Promise<void> {
    const version = this.versionService.getVersion();
    console.log(
      `%c Calculator version: ${version}! `,
      "background: #222; color: green"
    );
  }
}
