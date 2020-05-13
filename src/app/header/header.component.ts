import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  @Output() pageChange = new EventEmitter<{page: string}>();
  constructor() { }
  ngOnInit(): void {
  }
  onClickMenu(page: string){
    this.pageChange.emit({page: page});
  }
}
