import { Component, Input } from '@angular/core';
import { List } from '../models.interface';
import { DataManagerService } from '../data-manager.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  @Input() list: List;

  constructor(private dataService: DataManagerService) {}

  delete() {
    if (confirm('Do you really want to delete the list ' + this.list.name)) {
      this.dataService.deleteList(this.list.listId);
    }
  }
  newTask(ev) {
    const text = ev.target.value.trim();

    if (text !== '') {
      this.dataService.addNewTask(text, this.list);
      ev.target.value = '';
    }
  }
}
