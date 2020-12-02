import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-team',
  templateUrl: './show-team.component.html',
  styleUrls: ['./show-team.component.css']
})
export class ShowTeamComponent implements OnInit {

  constructor(private service:SharedService) { }

  TeamList:any=[];
  ActivateAddEditTeamComp:boolean=false;
  ModalTitle:string="";
  tea:any;

  ngOnInit(): void {
    this.refreshTeamList();
  }

  addClick(){
    this.tea={
      idTeam:0,
      teamName:""
    }
    this.ModalTitle="Add team";
    this.ActivateAddEditTeamComp=true;
  }

  editClick(item: any){
    this.tea=item;
    this.ModalTitle="Edit team";
    this.ActivateAddEditTeamComp=true;
  }

  closeClick(){
    this.ActivateAddEditTeamComp=false;
    this.refreshTeamList();
  }

  refreshTeamList(){
    this.service.getTeam().subscribe(data=>{
      this.TeamList=data;
    });
  }
}
