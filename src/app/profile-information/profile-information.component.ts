import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-profile-information',
  templateUrl: './profile-information.component.html',
  styleUrls: ['./profile-information.component.css']
})
export class ProfileInformationComponent implements OnInit {

  editable = true;
  disableSelect = new FormControl(true);

  constructor() {
  }

  ngOnInit(): void {
  }

  edit(): void {
    this.editable = !this.editable;
    this.disableSelect.setValue(this.editable);
  }
}
