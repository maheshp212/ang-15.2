import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  headersObj = {'Authorization' : 'Bearer 8ac8b6b544cf0cb6658d10d29b4f08e1f99113d711318b21e7e05b0444b920ce'}
  constructor(private http:HttpClient) { }

  getUserssss(){
    let url = 'https://gorest.co.in/public/v2/users';
    return this.http.get(url,{headers: this.headersObj});
  }
  getSingleUser(id:any){
    let url = 'https://gorest.co.in/public/v2/users/'+id;
    return this.http.get(url,{headers: this.headersObj});
  }
  createUser(body:any){
    let url = 'https://gorest.co.in/public/v2/users';
    
    return this.http.post(url,body, {headers: this.headersObj});
  }
  updateUser(id:any, body:any){
    let url = 'https://gorest.co.in/public/v2/users/'+id;
    return this.http.put(url,body,{headers: this.headersObj});
  }
  delete(id:any){
    let url = 'https://gorest.co.in/public/v2/users/'+id;
    return this.http.delete(url, {headers: this.headersObj});
  }
}


// http.get(url, ?headers)
// http.post(url, body, ?headers)
// http.put(url, body, ?headers)
// http.delete(url, ?body, ?headers)
// ? is optional