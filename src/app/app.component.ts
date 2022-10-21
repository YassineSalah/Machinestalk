import { Component } from '@angular/core';
import { UserService } from './users/user.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   constructor(private userService: UserService) {}
   ngOnInit() {
     this.userService.setUsers()
      .subscribe(
        (response: Response) => {
            this.userService.users = response.json();
            this.userService.usersChanged.next(this.userService.users);
        }
    );
   }
}
