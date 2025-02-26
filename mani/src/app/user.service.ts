import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  headersObj ={ headers: {'Authorization': 'Bearer 8ac8b6b544cf0cb6658d10d29b4f08e1f99113d711318b21e7e05b0444b920ce'}}
  constructor(private http: HttpClient) {}

  getUsersList() {
    let url = 'https://gorest.co.in/public/v2/users';
    return this.http.get(url, this.headersObj);
  }

  getUser(id: any) {
    let url = 'https://gorest.co.in/public/v2/users/' + id;
    return this.http.get(url, this.headersObj);
  }

  createUser() {
    let url = 'https://gorest.co.in/public/v2/users';
    let user = {
      name: 'Mani11',
      email: 'mani11@mani.com',
      gender: 'male',
      status: 'active',
    };
    return this.http.post(url, user, this.headersObj);
  }


  updateUser(id: any) {
    let url = 'https://gorest.co.in/public/v2/users/'+id;
    let user = {
      name: 'Mani22',
      email: 'mani22@mani.com',
      gender: 'male',
      status: 'active',
    };
    return this.http.put(url, user, this.headersObj);
  }

  deleteUser(id: any) {
    let url = 'https://gorest.co.in/public/v2/users/'+id;
    return this.http.delete(url, this.headersObj);
  }

}
