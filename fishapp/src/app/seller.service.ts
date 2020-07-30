import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class SellerService {

constructor(private http:HttpClient) { }
getSellers(){
  return this.http.get("http://localhost:3000/sellers");
}
newSeller(item){
  return this.http.post("http://localhost:3000/insert",{"seller":item})
  .subscribe(data=>{console.log(data)})
}
deleteSeller(id){
  return this.http.post("http://localhost:3000/deleteSeller",{"id":id})
  .subscribe((status)=>{console.log(status);
  });
  }
  
  EditSeller(item){
    return this.http.post("http://localhost:3000/EditSeller",{"item":item})
    .subscribe((status)=>{console.log(status);
    });
  }
  getSeller(id){
    return this.http.post("http://localhost:3000/seller",{"id":id});
}
newSignup(item){
  return this.http.post("http://localhost:3000/signup",{"signup":item})
  .subscribe(data=>{console.log(data)})
}
newLogin(item){
  return this.http.post("http://localhost:3000/login",{"login":item})

}
newSignup1(item){
  return this.http.post("http://localhost:3000/signup1",{"signup1":item})
  .subscribe(data=>{console.log(data)})
}
newLogin1(item){
  return this.http.post("http://localhost:3000/login1",{"login1":item})

}

}


