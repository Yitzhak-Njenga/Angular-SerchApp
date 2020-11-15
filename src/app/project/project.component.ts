import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../profile.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})


export class ProjectComponent implements OnInit {
  profile:object;
  repos: any[];
  username:string;

  constructor( private ProfileService:ProfileService) {
    this.ProfileService.getProfileInfo().subscribe(profile => {
      console.log(profile);
      this.profile = profile
    });
   }

  ngOnInit(): void {
  }

}
