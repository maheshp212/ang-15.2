import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-apis',
  templateUrl: './apis.component.html',
  styleUrls: ['./apis.component.scss']
})
export class ApisComponent implements OnInit{

  constructor(private user:UserService){}
  usersList:any;
  userinfo:any;

  ngOnInit(): void {
    this.getUsersList();
    
  }

  getUsersList(){
    this.user.getUsersList().subscribe((resp:any)=>{
      //success
      console.log(resp);
      this.usersList = resp;
    },(err:any)=>{
      //error
    })
  }

  viewUser(id:any){
    console.log(id)
    this.user.getUser(id).subscribe((resp)=>{
      this.userinfo = resp;
    }, (err)=>{

    })
  }
  createUser(){
    this.user.createUser().subscribe((resp:any)=>{
      this.userinfo = resp;
      this.getUsersList();
    }, (err:any)=>{
      //err
    })
  }
  editUser(id:any){
    this.user.updateUser(id).subscribe((resp:any)=>{
      this.userinfo = resp;
      this.getUsersList();
    }, (err:any)=>{
      //err
    })
  }
  deleteUser(id:any){
    this.user.deleteUser(id).subscribe((resp:any)=>{
      this.userinfo = resp;
      this.getUsersList();
    }, (err:any)=>{
      //err
    })
  }
}
