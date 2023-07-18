import { Component } from '@angular/core';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
 isMenuCollapsed = true;

toggled:any=1;



//document!:HTMLElement| null;




toggle(){

  if(this.toggled){
   
    document.getElementById('sidebar')!.style.width = "80px"
    document.getElementById('content')!.style.height = "100%"
    this.toggled = 0;
    //this.sideNavStatus= true
  }else{
    document.getElementById('sidebar')!.style.width = "260px"
    this.toggled = 1;

  }

}





}
