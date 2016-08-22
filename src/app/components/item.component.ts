import {Component} from "@angular/core";
import {ListActions} from "../actions/list.actions";

@Component({
  selector: 'item',
  inputs  : ['item'],
  template: `
    <li class="list-group-item">
          {{ item }}
        <button class="close" 
                (click)="list.remove(item)">X</button>    
    </li>
    `
})
export class ItemComponent {
  private list:ListActions;

  constructor(_list:ListActions) {
    this.list = _list;
  }


}