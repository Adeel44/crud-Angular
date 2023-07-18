import { Component ,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs';
import { ClientService } from 'src/app/client/services/client.service';
//import {Clli}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{

  clientListdata:any;

  clientList:any
  p:any;

  constructor( private clientService:ClientService , private activatedRoute:ActivatedRoute){}

  ngOnInit(): void {
    this.ClientsList()

    this.clientList= this.activatedRoute.snapshot.data['list']

    console.log("List is: "+ this.clientList)
    
  }


  ClientsList(){
    this.clientService.getClientsList()
   // .pipe(map(result => { return result.name + ' ' + data.description }))
    .subscribe((result:any)=>{
      this.clientListdata = result
      console.log(result)
    })

  }
  deleteClient(clientid:any){

    console.log(clientid)
     this.clientService.DeleteClientDetail(clientid).subscribe((result)=>{
      // console.log(result);
       alert("Client deleted")
       this.ClientsList();
     });
 
   }


}
