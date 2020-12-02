import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';


@Component({
  selector: 'app-show-exp',
  templateUrl: './show-exp.component.html',
  styleUrls: ['./show-exp.component.css']
})
export class ShowExpComponent implements OnInit {

  constructor(private service:SharedService) { }

  ExpensesList:any=[];
  ModalTitle:string="";
  ActivateAddEditExpComp:boolean=false;
  exp:any;

  ngOnInit(): void {
    this.refreshExpList();
  }

  addClick(){
    this.exp={
      idExpenses:0,
      food:"",
      equipment:"",
      rent:"",
      treatmentCost:"",
      id_expenses_team:"",
      id_expenses_seasons:""
    }
    this.ModalTitle="Add Expenses";
    this.ActivateAddEditExpComp=true;
  }

  editClick(item: any){
      this.exp=item;
      this.ModalTitle="Edit Expenses";
      this.ActivateAddEditExpComp=true;
  }

  deleteClick(item:any){
    if(confirm('Are you sure?')){
      this.service.deleteExpenses(item.idExpenses).subscribe(data=>{
        alert(data.toString());
        this.refreshExpList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditExpComp=false;
    this.refreshExpList();
  }

  refreshExpList(){
    this.service.getExpensesList().subscribe(data=>{
        this.ExpensesList=data;
    });
  }

}
