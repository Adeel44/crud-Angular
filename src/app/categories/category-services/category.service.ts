import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  baseURL = "http://localhost:3000/categories"

  constructor( private http:HttpClient) { }

  

  getCategoryList(){
    return this.http.get("http://localhost:3000/categories")
  }

  CreateCategoryDetail(data:any){
    return this.http.post("http://localhost:3000/categories", data)
  }

  DeleteCategoryById(id:any){

    return this.http.delete(`${this.baseURL}/${id}`)

  }

  getCategoryById(id:any){
    return this.http.get(`${this.baseURL}/${id}`)

  }
  UpdateCategoryDetail(id:any , data:any){
    return this.http.put(`${this.baseURL}/${id}`,data)
    //return this.http.post("http://localhost:3000/client", data)
  }
  



}
