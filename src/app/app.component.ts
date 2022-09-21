import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Login';
  usuario : string = '';
  senha : string = '';

  constructor(private httpClient : HttpClient){

  }

  public login(){
    this.httpClient.post('http://localhost:3024/login', {userName : this.usuario, password : this.senha}).toPromise().then((response : any)=> {
      console.log(response);
    })
  }

  public setButton(){

  }
}
