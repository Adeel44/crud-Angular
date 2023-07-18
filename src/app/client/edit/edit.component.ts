import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from 'src/app/client/services/client.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{

  active:any;   // edit id
  editclient:any;

  clientform = new FormGroup({
    name:new FormControl('', [Validators.required ]),
    description:new FormControl(''),
  });

  constructor(private activatedRoute: ActivatedRoute, private clientService: ClientService , private router:Router){}

  ngOnInit(): void {
   // debugger
   // console.log("id is this"+  this.activatedRoute.snapshot.paramMap.get('id'))
    console.log(this.activatedRoute.snapshot.params)
      this.active=this.activatedRoute.snapshot.params
      console.log(this.active.id)

    this.clientService.getClientById(this.activatedRoute.snapshot.paramMap.get('id')).subscribe((result:any)=>{
         this.editclient = result;

      this.clientform.controls["name"].setValue(this.editclient.name)
      this.clientform.controls["description"].setValue(this.editclient.description)

    })

    
  }


  



  UpdateClient(){
    console.log(this.clientform.value)
    this.clientService.UpdateClientDetail(this.active.id ,this.clientform.value).subscribe((data)=>{
      console.log(data)
      this.clientform.reset();
      alert("Client Updated");
      this.router.navigateByUrl('/client/list');
    })

  }

}
