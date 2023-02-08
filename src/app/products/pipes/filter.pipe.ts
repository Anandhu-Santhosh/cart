import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allproducts:[],searchkey:string,propsname:string): any[] {
    
    const result:any=[];
    //blank search
    if(!allproducts || searchkey=='' || propsname==''){
      return allproducts;
    }

    //searching
    allproducts.forEach((product:any)=>{
      if(product[propsname].trim().toLowerCase().includes(searchkey.toLowerCase())){
        result.push(product);
      }
    })
    return result;
  }

}
