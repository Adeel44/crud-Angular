import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../category-services/category.service';
import { filter, from, map, of, tap } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  source = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]); 

  employees = from( [  
    { id: 11, name: 'Ravishankar' },  
    { id: 12, name: 'Muthu' },  
    { id: 13, name: 'Mani' },  
    { id: 14, name: 'Ajith' }  
   ]);  

  // emp = from(this.employees)




  

  categoryListdata:any;

  constructor( private categoryService:CategoryService){}

  ngOnInit(): void {
    this.CategoryList()

    // this.source.pipe(
    //   tap(data => console.log("before filter data"+data)),
    //   filter(data=> data >=10),
    //   map(data=> 3*data)
    // )
    // .subscribe(data=>{
    //   console.log(data)
    // })


    this.employees.pipe(
      //tap(data => console.log("before filter data"+data)),
      filter(data=> data.id >12),
      map(data=> data.name)
    )
    .subscribe(data=>{
      console.log(data)
    })

    



  }
 


  CategoryList(){
    this.categoryService.getCategoryList()
    // .pipe(
    //   filter(data=> data.id >12)
    //   )
    .subscribe((result:any)=>{
      this.categoryListdata = result
      console.log(result)
    })

  }

  deleteCategory(categoryid:any){

    console.log(categoryid)
     this.categoryService.DeleteCategoryById(categoryid).subscribe((result)=>{
      // console.log(result);
       alert("Category deleted")
     });
 
   }



  

     
   
   
   
  


   

  




}
