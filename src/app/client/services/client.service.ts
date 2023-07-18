import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ClientService {
  baseURL = "http://localhost:3000/client";


  

  constructor( private http:HttpClient) { }

  // getClientsList(){
  //   let token = "eyJhbGciOiJSUzI1NiIsImtpZCI6IkNERDY3ODFEMjU4QjcwODY0REM4NEMwNTU1NUZGOUE0MDI4QjczOTRSUzI1NiIsInR5cCI6IkpXVCIsIng1dCI6InpkWjRIU1dMY0laTnlFd0ZWVl81cEFLTGM1USJ9.eyJuYmYiOjE2ODE2NDM2MDUsImV4cCI6MTY4NDIzNTYwNSwiaXNzIjoiaHR0cDovL2lkZW50aXR5LndkLmRvYnVzaW5lc3MuZGV2IiwiY2xpZW50X2lkIjoic3BhLmNsaWVudCIsInN1YiI6IjhmYTI5NTY0LWE4ODctNGMzNy05MjkyLTcxZGMyN2Y4NjlhMyIsImF1dGhfdGltZSI6MTY4MTY0MzYwNSwiaWRwIjoibG9jYWwiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJhZGlsQGRtcy5jb20iLCJBc3BOZXQuSWRlbnRpdHkuU2VjdXJpdHlTdGFtcCI6IjdHRkdPQ0dBUEo1UzZCQUtRQUNLV1kzWE41M0kyVlJOIiwiZW1haWwiOiJhZGlsQGRtcy5jb20iLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJhZGlsQGRtcy5jb20iLCJuYW1lIjoiYWRpbEBkbXMuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsIkZpcnN0TmFtZSI6Ik11aGFtbWFkIiwiTGFzdE5hbWUiOiJBcnNoYWQiLCJNaWRkbGVOYW1lIjoiQWRlZWwiLCJqdGkiOiIwRkUzQ0NFN0MxRDREOUY1RkNDRTkwMjY5RTlBMTgxRiIsImlhdCI6MTY4MTY0MzYwNSwic2NvcGUiOlsib3BlbmlkIiwicHJvZmlsZSIsIm9mZmxpbmVfYWNjZXNzIl0sImFtciI6WyJwd2QiXX0.pOe5KlgmKz96rypdQYSR4vJRrJLE3JxhOJCgcCheT6pUy4qBSKGktnK7oJPchmWLh6ovob9UBvjk-MO5djN1B0ywVTx7xFjkmqjzwaI7-QqQUCp23kO1Ax-OOt1XKGJB3doZv2nWWNSOIUIbe8KssYF6y6TECKVqpm7um31XqCHfLyTnVXw26-rwMiL5Fj6o8w1sPLXnnGsntooMKz6AoPA-_sNGVsjW8mPxGP4uYcpUIfOPmzwLj7f9qS6zE__WfGonIwaAD-ZOCYg2_g-EyqrCKbczHCKJ2qalkI4gk1Xj5rKLFDNSIkusnZYvX5nEV7HQCxedRns1yPHmFmtMWg"

  //   return this.http.get("https://api.wd.dobusiness.dev/client-api/clients",{
  //     headers:{
  //       Authorization: 'Bearer '+ token 
  //     }
  //   })
  // }
  

  getClientsList(){
    return this.http.get("http://localhost:3000/client")
  }

  CreateClient(data:any){
    return this.http.post("http://localhost:3000/client", data)
  }

  DeleteClientDetail(id:any){

    return this.http.delete(`${this.baseURL}/${id}`)

  }
  
  getClientById(id:any){
    return this.http.get(`${this.baseURL}/${id}`)
   // return this.http.get("http://localhost:3000/client", id)
  }
  
  UpdateClientDetail(id:any , data:any){
    return this.http.put(`${this.baseURL}/${id}`,data)
    //return this.http.post("http://localhost:3000/client", data)
  }
}
