import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public title: string = 'Hola Mundo';
  public subtitle: string = 'Miguel Ángel';
  public showComponent: boolean = true;

  toggleComponent(): void {
    this.showComponent = !this.showComponent;
  }
}
