import { Component } from '@angular/core';
import { NAVBAR_TEXT } from '../../constants/text/navbar.text';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})

export class Navbar {

  text = NAVBAR_TEXT;

}
