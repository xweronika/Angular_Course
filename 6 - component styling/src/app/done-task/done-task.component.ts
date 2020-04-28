import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-done-task',
  templateUrl: './done-task.component.html',
  styleUrls: ['./done-task.component.css']
})
export class DoneTaskComponent implements OnInit {

  constructor() { }
  @Input() doneList = [];


  ngOnInit() {
  }

}
