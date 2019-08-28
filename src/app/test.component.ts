import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  userRoleListTemp: any = [];
  userRoleListToSave: any = [];
  checkedInfo: any;
  isChecked =true;
  OnChangeCheck(role:number,isChecked){
    this.checkedInfo=isChecked;
    if(isChecked.target.checked){
      this.userRoleListTemp.push(role);
    }
    else{
      let index = this.userRoleListTemp.indexOf(role);
      this.userRoleListTemp.splice(index, 1);
    }
  }

  appUserRoleList: any = [
    {id: '1', roleName: 'SETUP_ROLE', isChecked: true},
    {id: '2', roleName: 'ENTRY_ROLE', isChecked: false},
    {id: '3', roleName: 'SEATPLAN_ROLE', isChecked: true},
    {id: '4', roleName: 'MARKSENTRY_ROLE', isChecked: true},
    {id: '5', roleName: 'APPLICANT_ROLE', isChecked: true}
];
  constructor() { }

  ngOnInit() {
  }

  checkedEvnt(val){
for(let i=0;i<this.appUserRoleList.length;i++){
  //this.userRoleListTemp.push(role);
  if(val==true){
    this.userRoleListTemp.push(i+1);
  }else if(val==false){
    let index = this.userRoleListTemp.indexOf(i+1);
    this.userRoleListTemp.splice(index, 1);
  }
  this.appUserRoleList[i].isChecked=val;
}
  }
}
