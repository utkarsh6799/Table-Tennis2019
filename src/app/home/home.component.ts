import { Component, OnInit } from '@angular/core';
import Parallax from 'parallax-js';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {

   }

  ngOnInit() {
    const scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene, {
      hoverOnly: true
    });

    const scene1 = document.getElementById('scene1');
    var parallaxInstance = new Parallax(scene1, {
      hoverOnly: true
    });

    const scene2 = document.getElementById('scene2');
    var parallaxInstance = new Parallax(scene2, {
      hoverOnly: true
    });

    const scene3 = document.getElementById('scene3');
    var parallaxInstance = new Parallax(scene3, {
      hoverOnly: true
    });
  }

}
