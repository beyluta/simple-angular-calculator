import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class VersionService {
  constructor() {}

  /* This function simulates an async call to a backend service */
  async getVersion(): Promise<string> {
    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve('1.0.0');
      }, 1000);
    });
  }
}
