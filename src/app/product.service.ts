import { Injectable } from '@angular/core';
import{ HttpClient}from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  
  getAllProducts():Observable<Array<Object>>
  { return this.http.get<Array<object>>('https://api.edamam.com/search')

  }
  getProductByQ(id:number):Observable<Object>
  {
   return this.http.get(`https://api.edamam.com/search${id}`)
  }
  addProduct(dataObj:any){
    return this.http.post('https://api.edamam.com/search',dataObj)
  }
}
