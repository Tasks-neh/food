import { Component,Input, OnInit } from '@angular/core';
import{ActivatedRoute} from '@angular/router';
import {ProductService } from '../product.service'
@Component({
  selector: 'app-prodcard',
  templateUrl: './prodcard.component.html',
  styleUrls: ['./prodcard.component.css']
})
export class ProdcardComponent implements OnInit {
  @Input() prodData: any = {}

  productObject:any={};
  constructor(private activatedRoute:ActivatedRoute,private dataService:ProductService) { }

  ngOnInit(): void {
    console.log(this.prodData)
    this.activatedRoute.snapshot.params.id
    this.productObject=this.dataService.getProductByQ(this.activatedRoute.snapshot.params.id)
  
  }

}
