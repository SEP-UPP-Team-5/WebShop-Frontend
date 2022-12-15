import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserDto } from 'src/model/user-dto';
import { map, Observable } from 'rxjs';
import { AppConstants } from 'src/utils/app-constants';
import { Token } from '@angular/compiler';
import { LoginDto } from 'src/model/login-dto';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  login(user: LoginDto) {
    const apiUrl = AppConstants.API_HOST + AppConstants.USERS.LOGIN;
    return this.http.post(apiUrl, user).pipe(map((item: any) => {
      console.log(item, "jahsxhbs");
       return item;
      }))
  }

  getByUsername(username: any) {
    const apiUrl = AppConstants.API_HOST + AppConstants.USERS.GET_BY_USERNAME;
    return this.http.get(apiUrl+username);
  }

}
