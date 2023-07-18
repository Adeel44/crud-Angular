// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// import {
//   Router,Resolve,
//   RouterStateSnapshot,
//   ActivatedRouteSnapshot
// } from '@angular/router';
// import { Observable, of } from 'rxjs';
// import { ClientService } from './client.service';

// @Injectable({
//   providedIn: 'root'
// })

// export class ClientResolver implements Resolve<Promise<any>> {
//   constructor(private clientService: ClientService,private httpClient: HttpClient){}
//    async  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any> {
    
//     console.log('Resolver');
//     const data = await this.httpClient.get('http://localhost:3000/client').toPromise();
//     console.log(data);
//     return data;
//   }
// }


