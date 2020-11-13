import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username:string;
  private clientid = "285a80f139d337e0ba05";
  private clientsecret ="703c1fa1001e2ad6a69e19c90c4070104c2c8094"

  constructor(private http:HttpClient) {
    console.log("service is now ready");
    this.username ="Yitzhak-Njenga";
   }
   getPfofileInfo(){
    return this.http.get('https://api.github.com/users/' + this.username + "?this.client_id=" + this.clientid + "&client_secret=" + this.clientsecret );
   }
}
