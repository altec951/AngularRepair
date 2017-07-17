import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-repair',
  templateUrl: './repair.component.html',
  styleUrls: ['./repair.component.css']
})
export class RepairComponent implements OnInit {

  floorValueList: any[] = [];
  floorIdList: any[] = [];

  constructor(
    private _http: HttpService
  ) { }

  ngOnInit() {
    this.getFloorValue();
  }

  getFloorValue(){
    this._http.getData("http://localhost:2422/api/floors").subscribe(
      data =>{
        for (let floorVal of data){
          this.floorValueList.push(floorVal.floorName)
          this.floorIdList.push(floorVal.floor1)
        }
      }
    )
    console.log(this.floorIdList)
  }

  // firstDropDownChanged(val: any) {
  //   const obj = this._values1[val];
  //   console.log(val, obj);

  //   if (!obj) return;

  //   if (obj.id == 1) {
  //     this._values2 = ["1.1", "1.2", "1.3"];
  //   }
  //   else if (obj.id == 2) {
  //     this._values2 = ["2.1", "2.2", "2.3"];
  //   }
  //   else if (obj.id == 3) {
  //     this._values2 = ["3.1", "3.2", "3.3"];
  //   }
  //   else {
  //     this._values2 = [];
  //   }
  // }
}
