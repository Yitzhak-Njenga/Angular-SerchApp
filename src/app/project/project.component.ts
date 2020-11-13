import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../profile.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor( private ProfileService:ProfileService) {
    this.ProfileService.getPfofileInfo().subscribe(profile => {
      console.log(profile);
    });
   }

  ngOnInit(): void {
  }

}
