import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../category-services/category.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  categoryEditId: any

  categoryform = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('')

  })

  constructor(private activatedRoute: ActivatedRoute, private categoryService: CategoryService, private router: Router) { }

  ngOnInit(): void {
    console.log("id of category " + this.activatedRoute.snapshot.paramMap.get('id'))
    this.categoryEditId = this.activatedRoute.snapshot.paramMap.get('id')


    this.categoryService.getCategoryById(this.categoryEditId).subscribe((result: any) => {
      console.log(result)
      this.categoryform.controls["name"].setValue(result.name)
      this.categoryform.controls["description"].setValue(result.description)


    })


  }




  updateCategory() {
    this.categoryService.UpdateCategoryDetail(this.categoryEditId, this.categoryform.value).subscribe((data) => {
      console.log(data)
      this.categoryform.reset();
      alert("Category Updated");
      this.router.navigateByUrl('/category/list');

    })
  }

}


// console.log(this.clientform.value)
// this.clientService.UpdateClientDetail(this.active.id ,this.clientform.value).subscribe((data)=>{
//   console.log(data)
//   this.clientform.reset();
//   alert("Client Updated");
//   this.router.navigateByUrl('/client/list');
// })

// }
