import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { TestLayoutComponent } from './pages/test-layout/test-layout.component';

const routes: Routes = [{ 
  path: '',
  component: LayoutComponent,
  children: [
    { path: 'test', component: TestLayoutComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }