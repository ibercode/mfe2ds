import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyComponent } from './my-component/my-component.component';
import { RouterModule, Routes } from '@angular/router';
import '@salut/design-system-salut';

const routes: Routes = [
  {
    path: 'my-component',
    component: MyComponent,
  },
];

@NgModule({
  declarations: [MyComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes), 
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MyFeature3Module {}