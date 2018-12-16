import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'blade-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  @Input() pageTitle: string;
  @Input() fontAwesomeIconName: string;
  @Input() padPage: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
