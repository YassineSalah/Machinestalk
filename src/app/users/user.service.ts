import { Subject } from "rxjs";
import { User } from "./user.model";
import { Http, Response, Headers } from '@angular/http';
import { Injectable } from "@angular/core";
import { DefaultRouteReuseStrategy } from "@angular/router/src/route_reuse_strategy";

@Injectable()
export class UserService {
    usersChanged = new Subject<User[]>();

    users: User[] = [
      new User(0,'','','','')
    ];

    constructor(private http: Http){}

    addUser(user: User) {
      
      // const headers = new Headers({
      //   'Content-Type': 'application/json',
      //   'Authorization': 'Bearer 8f194c3411604c7661e87c53d050a8bafdb2534e349aea6df1cc11b5959c3932'
      // })
        this.http.post('http://localhost:8080/addUser', user)
          .subscribe(
            (response: Response) => {
                this.users.push(response.json());
                this.usersChanged.next(this.users);
            }
          );
    }

    setUsers() {
       return this.http.get('http://localhost:8080/users/')
          
    }

    getUsers() {
        return this.users;
    }

    getUser(index: number) {
        return this.users[index];
    }

    deleteUser(idUser: number,index: number) {
      const headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 8f194c3411604c7661e87c53d050a8bafdb2534e349aea6df1cc11b5959c3932'
      });
      this.http.delete(`http://localhost:8080/deleteUser/${idUser}`,{headers: headers})
        .subscribe(
          () => {
            this.users.splice(index, 1);
            this.usersChanged.next(this.users);
          }
        );
    }

    updateUser(index: number,user: User) {
      const headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 8f194c3411604c7661e87c53d050a8bafdb2534e349aea6df1cc11b5959c3932'
      });
      this.http.put(`${user.id}`,user,{headers: headers})
        .subscribe(
          () => {
            this.users.splice(index, 1);
            this.users.push(user);
            this.usersChanged.next(this.users);
          }
        );
    }


}