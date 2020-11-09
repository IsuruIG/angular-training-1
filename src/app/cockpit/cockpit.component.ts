import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();;
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput') serverInputContent: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(inputServerName: HTMLInputElement) {
    this.serverCreated.emit({serverName: inputServerName.value, serverContent: this.serverInputContent.nativeElement.value});
  }

  onAddBlueprint(inputServerName: HTMLInputElement) {
    this.blueprintCreated.emit({serverName: inputServerName.value, serverContent: this.serverInputContent.nativeElement.value});
  }

}
