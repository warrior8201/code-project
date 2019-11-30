import { Component } from '@angular/core';
import {AppService} from "./app.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private router: Router
  ){}

  create(): void {
    this.router.navigateByUrl('/new');
  }


}
