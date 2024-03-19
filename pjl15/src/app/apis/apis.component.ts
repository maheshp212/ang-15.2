import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-apis',
  templateUrl: './apis.component.html',
  styleUrls: ['./apis.component.scss'],
  providers: [UsersService]
})
export class ApisComponent implements OnInit {

  usersList:any;
  userInfo:any
  constructor(private user:UsersService){}


  //promise
  // user.then(()=>{
  // },()=>{
  // })

  //Observables
  // asdf. subscribe(()=>{
  // }, ()=>{
  // })
  ngOnInit(): void {
    this.getUsersList()
  }

  getUsersList(){
    this.user.getUserssss().subscribe((resp:any)=>{
      // success
      console.log(resp);
      this.usersList = resp;
    }, (error) =>{
      // error
    })
  }

  viewUser(id:any){
    this.user.getSingleUser(id).subscribe((resp)=>{
      console.log(resp);
      this.userInfo = resp;
    },(err) =>{
      //error
    })
  }

  creatUser(){
    let obj = {
      "name": "Pjl3 Kaur",
      "email": "pjl3@test.com",
      "gender": "female",
      "status": "active"
    };
    this.user.createUser(obj).subscribe((resp)=>{
      console.log(resp);
      this.userInfo = resp;
      // to refresh the list of users we are calling getUsersList
      this.getUsersList();
    },(err) =>{
      //error
    })  
  }
    
    updateUser(id:any){
      let obj = {
        "name": "Pjl Kaur updated2",
        "email": "pjlup2@test.com",
        "gender": "female",
        "status": "active"
      };
      this.user.updateUser(id, obj).subscribe((resp)=>{
        console.log(resp);
        this.userInfo = resp;
        // to refresh the list of users we are calling getUsersList
        this.getUsersList();
      },(err) =>{
        //error
      })  
  }
  deleteUser(id:any){
    this.user.delete(id).subscribe((resp)=>{
      console.log(resp);
      this.userInfo = resp;
      // to refresh the list of users we are calling getUsersList
      this.getUsersList();
    },(err) =>{
      //error
    })  
}
}
