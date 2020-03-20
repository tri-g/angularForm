import { Component, OnInit } from '@angular/core';
import {User} from '../user';
@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css']
})
export class RegisterformComponent implements OnInit {
topics=['Movies','Painting','Dancing'];
  usermodel=new User('tri','tri@gmail.com',9876567876,'','morn',true);
  constructor() { }

  ngOnInit() {
  }

}
