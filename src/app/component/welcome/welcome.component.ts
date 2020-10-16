import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.less']
})
export class WelcomeComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  turnTheWheel() {
    let range = 5000;

    let deg = Math.floor(Math.random() * (-range)) + range;

    document.getElementById('wheel').style.transform = "rotate(" + deg + "deg)";
    let element = document.getElementById('wheel-body');
    element.classList.remove('animate');
    setTimeout(function () {
      element.classList.add('animate');
    }, 3000);
  }
}
