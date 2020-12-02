import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { ShowExpComponent } from './expenses/show-exp/show-exp.component';
import { AddEditExpComponent } from './expenses/add-edit-exp/add-edit-exp.component';
import { GoalsComponent } from './goals/goals.component';
import { ShowGoalsComponent } from './goals/show-goals/show-goals.component';
import { AddEditGoalsComponent } from './goals/add-edit-goals/add-edit-goals.component';
import { InjuriesComponent } from './injuries/injuries.component';
import { ShowInjComponent } from './injuries/show-inj/show-inj.component';
import { AddEditInjComponent } from './injuries/add-edit-inj/add-edit-inj.component';
import { MatchesComponent } from './matches/matches.component';
import { ShowMatchComponent } from './matches/show-match/show-match.component';
import { AddEditMatchComponent } from './matches/add-edit-match/add-edit-match.component';
import { OpponentsComponent } from './opponents/opponents.component';
import { ShowOppComponent } from './opponents/show-opp/show-opp.component';
import { AddEditOppComponent } from './opponents/add-edit-opp/add-edit-opp.component';
import { PlaceComponent } from './place/place.component';
import { ShowPlaceComponent } from './place/show-place/show-place.component';
import { AddEditPlaceComponent } from './place/add-edit-place/add-edit-place.component';
import { PlayerComponent } from './player/player.component';
import { ShowPlayComponent } from './player/show-play/show-play.component';
import { AddEditPlayComponent } from './player/add-edit-play/add-edit-play.component';
import { SeasonsComponent } from './seasons/seasons.component';
import { ShowSeasonComponent } from './seasons/show-season/show-season.component';
import { AddEditSeasonComponent } from './seasons/add-edit-season/add-edit-season.component';
import { TeamComponent } from './team/team.component';
import { ShowTeamComponent } from './team/show-team/show-team.component';
import { AddEditTeamComponent } from './team/add-edit-team/add-edit-team.component';
import { TrainersComponent } from './trainers/trainers.component';
import { ShowTrainComponent } from './trainers/show-train/show-train.component';
import { AddEditTrainComponent } from './trainers/add-edit-train/add-edit-train.component';
import { WorkerComponent } from './worker/worker.component';
import { ShowWorkComponent } from './worker/show-work/show-work.component';
import { AddEditWorkComponent } from './worker/add-edit-work/add-edit-work.component';
import { InjurylistComponent } from './injurylist/injurylist.component';
import { ShowInjLComponent } from './injurylist/show-inj-l/show-inj-l.component';
import { AddEditInjLComponent } from './injurylist/add-edit-inj-l/add-edit-inj-l.component';
import { ManagementworkersComponent } from './managementworkers/managementworkers.component';
import { ShowManwComponent } from './managementworkers/show-manw/show-manw.component';
import { AddEditManwComponent } from './managementworkers/add-edit-manw/add-edit-manw.component';
import { SeasontimetableComponent } from './seasontimetable/seasontimetable.component';
import { ShowSttComponent } from './seasontimetable/show-stt/show-stt.component';
import { AddEditSttComponent } from './seasontimetable/add-edit-stt/add-edit-stt.component';
import { TrainingtimetableComponent } from './trainingtimetable/trainingtimetable.component';
import { ShowTttComponent } from './trainingtimetable/show-ttt/show-ttt.component';
import { AddEditTttComponent } from './trainingtimetable/add-edit-ttt/add-edit-ttt.component';
import{SharedService} from './shared.service';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ExpensesComponent,
    ShowExpComponent,
    AddEditExpComponent,
    GoalsComponent,
    ShowGoalsComponent,
    AddEditGoalsComponent,
    InjuriesComponent,
    ShowInjComponent,
    AddEditInjComponent,
    MatchesComponent,
    ShowMatchComponent,
    AddEditMatchComponent,
    OpponentsComponent,
    ShowOppComponent,
    AddEditOppComponent,
    PlaceComponent,
    ShowPlaceComponent,
    AddEditPlaceComponent,
    PlayerComponent,
    ShowPlayComponent,
    AddEditPlayComponent,
    SeasonsComponent,
    ShowSeasonComponent,
    AddEditSeasonComponent,
    TeamComponent,
    ShowTeamComponent,
    AddEditTeamComponent,
    TrainersComponent,
    ShowTrainComponent,
    AddEditTrainComponent,
    WorkerComponent,
    ShowWorkComponent,
    AddEditWorkComponent,
    InjurylistComponent,
    ShowInjLComponent,
    AddEditInjLComponent,
    ManagementworkersComponent,
    ShowManwComponent,
    AddEditManwComponent,
    SeasontimetableComponent,
    ShowSttComponent,
    AddEditSttComponent,
    TrainingtimetableComponent,
    ShowTttComponent,
    AddEditTttComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
