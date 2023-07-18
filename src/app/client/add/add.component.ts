import { Component } from '@angular/core';
import {FormControl,FormGroup, Validators} from '@angular/forms';
import { ClientService } from 'src/app/client/services/client.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  constructor( private clientService:ClientService ){}



  

  clientform = new FormGroup({
  //  id:new FormControl(''),
    name:new FormControl('', [Validators.required ]),
    description:new FormControl(''),
  });



  addClient(){
    console.log(this.clientform.value)
    this.clientService.CreateClient(this.clientform.value).subscribe((result:any)=>{
      this.clientform.reset()
      alert("Client added ")
    },(error)=>{
      alert("Client not added ")
    })
  }

  // addClient(){
  //   // console.log(this.addStudent.value)
  //    this.clientService.CreateClient(this.clientform.value).subscribe((result)=>{
  //     this.clientform.reset({});
  //      result = {
  //       next: alert("client added"),
  //       error: alert("client not added")
    
  //     };
      
     
  //    });
  //  }

}
