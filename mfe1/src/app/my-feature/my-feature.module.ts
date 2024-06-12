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

// The webpack configuration file at /dynamic-ng16/mfe1-ng16/webpack.config.js
// exposes a webpack module which contains this Angular feature module
@NgModule({
  declarations: [MyComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes), 
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MyFeatureModule {}