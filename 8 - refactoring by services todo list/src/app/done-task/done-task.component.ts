import { Component, OnInit, Input } from '@angular/core';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-done-task',
  templateUrl: './done-task.component.html',
  styleUrls: ['./done-task.component.css']
})
export class DoneTaskComponent implements OnInit {

  tasksDone: Array<string> = [];

  constructor(private taskService: TasksService) {
    this.taskService.getTasksDoneObs().subscribe((tasks: Array<string>) => {
      this.tasksDone = tasks;
    });

  }

  // @Input() doneList = []; USUWAMY


  ngOnInit() {
  }

}
