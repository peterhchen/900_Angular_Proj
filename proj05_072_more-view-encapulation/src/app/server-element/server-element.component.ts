import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // control component style defined in CSS file
  // Emulated: Use the color defined in CSS
  // None: Disable the color defined in CSS>
  // ShadowDom: Use pf W3C's modern web Shadow DOM (https://w3c.github.io/webcomponents/spec/shadow/)
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit {
  @Input('srvElement') element: {type: string, name: string, content: string};
  // @Input() element: {type: string, name: string, content: string};
  constructor() { }
  ngOnInit(): void {
  }
}
