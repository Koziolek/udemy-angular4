import {Component, OnInit} from '@angular/core';

@Component({
  selector: '[app-assignment3]',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component implements OnInit {


  private _secret = false;
  private _log: Array<Date> = [];


  constructor() {
  }

  ngOnInit() {
  }

  showSecret() {
    this._secret = !this._secret;
    this._log.push(new Date());
  }

  get log(): Array<Date> {
    return this._log;
  }

  get secret(): boolean {
    return this._secret;
  }

  getBgColor(index: Number): String {
    console.log(index)
    return index >= 4 ? "blue" : "";
  }
}
