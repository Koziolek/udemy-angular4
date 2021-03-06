import {Component, OnInit} from '@angular/core';

@Component({
  selector: '[app-servers]', //".app-servers"
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = "no server created"
  serverName = "Test";
  userName = "";
  serverCreated: boolean = false;
  servers = ["Test 1", "Test 2"];


  constructor() {
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000)
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  resetUserName() {
    this.userName = "";
  }
}
