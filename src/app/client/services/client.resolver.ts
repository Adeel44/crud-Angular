import { ResolveFn } from '@angular/router';
import { Injectable } from '@angular/core';
import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';









import {
  Router,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';

@Injectable()
export class ClientService {
  // getClientsList(id: any) {
  //   return {name: `Superman-${id}`};
  // }
  constructor(private httpClient: HttpClient) {

  }
  
}



export const clientResolver: ResolveFn<boolean> = 
(route: ActivatedRouteSnapshot, state:RouterStateSnapshot) => {
  console.log("Resolver")
  return true

 // return inject(ClientService).getClientsList(route.paramMap.get('id')!);
};













