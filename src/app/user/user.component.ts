import { MatCardModule } from '@angular/material/card';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  standalone: true,
  imports :[MatCardModule],
  providers: [],
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
