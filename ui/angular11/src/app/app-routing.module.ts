import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ExpensesComponent} from './expenses/expenses.component';
import {GoalsComponent} from './goals/goals.component';
import {InjuriesComponent} from './injuries/injuries.component';
import {InjurylistComponent} from './injurylist/injurylist.component';
import {ManagementworkersComponent} from './managementworkers/managementworkers.component';
import {MatchesComponent} from './matches/matches.component';
import {OpponentsComponent} from './opponents/opponents.component';
import {PlaceComponent} from './place/place.component';
import {PlayerComponent} from './player/player.component';
import {SeasonsComponent} from './seasons/seasons.component';
import {SeasontimetableComponent} from './seasontimetable/seasontimetable.component';
import {TeamComponent} from './team/team.component';
import {TrainersComponent} from './trainers/trainers.component';
import {TrainingtimetableComponent} from './trainingtimetable/trainingtimetable.component';
import {WorkerComponent} from './worker/worker.component';

const routes: Routes = [
{path:'expenses', component:ExpensesComponent},
{path:'goals', component:GoalsComponent},
{path:'injuries', component:InjuriesComponent},
{path:'injurylist', component:InjurylistComponent},
{path:'managementworkers', component:ManagementworkersComponent},
{path:'matches', component:MatchesComponent},
{path:'opponents', component:OpponentsComponent},
{path:'place', component:PlaceComponent},
{path:'player', component:PlayerComponent},
{path:'seasons', component:SeasonsComponent},
{path:'seasontimetable', component:SeasontimetableComponent},
{path:'team', component:TeamComponent},
{path:'trainers', component:TrainersComponent},
{path:'trainingtimetable', component:TrainingtimetableComponent},
{path:'worker', component:WorkerComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
