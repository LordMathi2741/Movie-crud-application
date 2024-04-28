import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";


@Component({
  selector: 'the-toolbar-content',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './the-toolbar-content.component.html',
  styleUrl: './the-toolbar-content.component.css'
})
export class TheToolbarContentComponent {

}
