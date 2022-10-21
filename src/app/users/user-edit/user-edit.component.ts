import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http } from '@angular/http';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  @ViewChild('userForm') userForm: NgForm;
  genders = ['male', 'female'];
  user = new User(0,'','','','');
  id: number;
  hideChangeButton: boolean = true;

  constructor(private userService: UserService,
    private route: ActivatedRoute){}

  ngOnInit() {

    this.route.params
    .subscribe(
      (params: Params) => {
        console.log('good',params['id']);
        this.id = +params['id'][1];
        console.log('id est',this.id);
        this.user = this.userService.getUser(this.id);
        this.hideChangeButton = false;
      },
      ()=>{
        this.user = new User(0,'','','','');
      }
    );
  }

  onSubmit() {
    this.user.name = this.userForm.value.name;
    this.user.email = this.userForm.value.email;
    this.user.gender = this.userForm.value.gender;
    this.user.status = 'active'
    if(this.hideChangeButton) {
      this.userService.addUser(this.user);
      this.userForm.reset();
    }
    else {
      this.userService.updateUser(this.id,this.user);
      this.userForm.reset();
    }
    
  }

}
