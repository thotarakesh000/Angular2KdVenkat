import { Component, OnInit } from '@angular/core';
import {TestService} from '../test.service';
import {TestData} from './Test'
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  providers:[TestService]
})
export class TestComponent implements OnInit {
  isCheckeditem:boolean=false;
  userCheckedList: any = [];
  TestData:any[];
  ListData:any[];
  constructor(private TestService:TestService) { }

  ngOnInit() {
    this.getAllProdData();
  }

  getAllProdData():void {
  this.TestService.getTestData()
  .subscribe(TestData =>
    (this.TestData=TestData));
  
  }
  onChange(deviceValue) {
    console.log(deviceValue);
    this.TestService.getlistdataonid(deviceValue)
    .subscribe(TestData =>
      (this.ListData=TestData["availableSchemas"]));
    console.log(this.ListData);
}
OnCheckChange(isChecked){
  let id:number=isChecked.currentTarget["id"];
if(isChecked.target.checked){
  this.userCheckedList.push(id);
}
else{
  let index=this.userCheckedList.indexOf(id);
  this.userCheckedList.splice(index,1)
}
}
// toggleEditable(event){
// for(let i=0;this.ListData.length;i++){

//   if(event.target.checked){
//     console.log("checked");
//     this.userCheckedList.push(i+1);
//   }else{
//     let index=this.userCheckedList.indexOf(i+1);
//     this.userCheckedList.splice(index,1)
//     console.log("unchecked");
//   }
  
// }
// if(event.target.checked){
//   this.ListData.forEach(x => x.state = event.target.checked)
//   }
//   else{
//     this.ListData.forEach(x => x.state = event.target.checked)
//   }
// }

checkAll(ev) {
  this.ListData.forEach(
    
    x => 
  
    x.state     = ev.target.checked
    );
    for(let i=0;i<this.ListData.length;i++){

  if(ev.target.checked){
    console.log("checked");
    this.userCheckedList.push(i+1);
  }else{
    let index=this.userCheckedList.indexOf(i+1);
    this.userCheckedList.splice(index,1)
    console.log("unchecked");
  }
  
}


}

isAllChecked() {
  return this.ListData.every(_ => _.state);
}
  
}
