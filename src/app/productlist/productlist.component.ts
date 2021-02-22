import { Component, OnInit } from '@angular/core';
import { ProductService} from "../product.service";
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  dataListing:Array<Object>=[];
  constructor(private dataservice:ProductService) { }
  

  ngOnInit(): void {
    this.dataservice.getAllProducts().subscribe((data) => {
      this.dataListing= data;
    });
  }
  

}
