import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent  {

  users!: User[];
  subscription!: Subscription;
  constructor(private userService: UserService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.subscription = this.userService.usersChanged
      .subscribe(
        (users: User[]) => {
          this.users = users;
        }
      );
    this.users = this.userService.getUsers();
  }

  onNewUser() {
    this.router.navigate(['/users/new', {relativeTo: this.route}]);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
