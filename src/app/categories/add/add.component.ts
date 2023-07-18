import { Component } from '@angular/core';
import {FormControl,FormGroup, Validators} from '@angular/forms';
import { CategoryService } from '../category-services/category.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  constructor( private categoryService:CategoryService){}


  categoryform = new FormGroup({
    name:new FormControl('', [Validators.required ]),
    description:new FormControl('')

  })

  createCategory(){
    console.log(this.categoryform.value)
    this.categoryService.CreateCategoryDetail(this.categoryform.value).subscribe((result:any)=>{
      this.categoryform.reset()
      alert("Category  added ")
    },(error)=>{
      alert("Category not added ")
    })

   
  }



}
