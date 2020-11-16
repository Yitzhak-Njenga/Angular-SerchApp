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
  repos: object;
  username:string;

constructor(private ProfilService: ProfileService){
}
  findProfile(){
  	this.ProfilService.updateProfile(this.username);
  	this.ProfilService.getProfileInfo().subscribe(profile => {
  		console.log(profile);
  		this.profile = profile;
  	});

  	this.ProfilService.getProfileRepos().subscribe(repos => {
  		console.log(repos);
  		this.repos = repos;
  	})  	
  }
  ngOnInit(): void {
  }
}