import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

/* import { HttpClient, HttpHeaders, HttpResponse, HttpRequestOptions } from '@angular/common/http'; */

class TmpResponse {
  msg: string;
};


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  @Input() userInput: string;
  serverResponse: string;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  server_get() {
    this.http.get<TmpResponse>('http://127.0.0.1:5000/api/plain_get')
      .subscribe(res => {this.serverResponse = res.msg; console.log(res);},
                 error => console.error(error))      
  }

  server_post() {
    this.http.post<TmpResponse>('http://127.0.0.1:5000/api/plain_post', {'message': this.userInput})
     .subscribe(res => {this.serverResponse = res.msg; console.log(res);},
                error => console.error(error));
  }


/*
  json_header(): RequestOptions {
    return RequestOptions({
        headers: Headers({ 'Content-Type': 'application/json' })
    });
  }
*/
}



