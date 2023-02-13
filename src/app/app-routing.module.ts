import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QueueComponent } from './queue/queue.component';
import { UserviewComponent } from './userview/userview.component';

const routes: Routes = [
  { path: '', component: QueueComponent},
  { path: 'user', component: UserviewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
