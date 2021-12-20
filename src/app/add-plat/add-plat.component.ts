import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Products } from '../services/products';
import { ProductsService } from '../services/plat.service';



@Component({
  selector: 'app-add-plat',
  templateUrl: './add-plat.component.html',
  styleUrls: ['./add-plat.component.css']
})
export class AddPlatComponent implements OnInit {
  public myform:FormGroup;
  plat ={} as any;
  Plat: Products = new Products();
  list = {}as any ;
  
  
  myForm : FormGroup;
 

  constructor(public platservice : ProductsService, 
    
    public formBuilder:FormBuilder,public router:Router)
     {
      
    
   }
   
  ngOnInit(): void {
    this.platservice .getPlasList().subscribe((res) => {
      this.list = res;
      
      console.log("PLAT",this.list);
    
    });
    

  }
 
  onSubmit() {  
   this.platservice.productsAdd(this.plat);
     alert("ajouter avec succés");
        
        //alert('SUCCESS!!');    

}

}
