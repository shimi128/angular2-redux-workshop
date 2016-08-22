import {Component} from "@angular/core";
import {ListActions} from "../actions/list.actions";

@Component({

  selector: 'item-form',
  template: `
  <div class="form-group">        
        <input type="text"               
               class="form-control"
               #input
               (keydown.enter)="list.add(input.value)" 
               placeholder="Add Item">
      </div>
    `
})
export class ItemFormComponent {

  private list:ListActions;

  constructor(_list:ListActions) {
    this.list  = _list;
  }
}