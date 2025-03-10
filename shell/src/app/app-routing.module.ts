import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [
  {
    path: 'mfe1',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './my-feature-module',
      })
        .then((m) => m.MyFeatureModule)
        .catch((err) => console.error('Error lazy loading mfe1 app', err)),
  },
  {
    path: 'mfe3',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4203/remoteEntry.js',
        exposedModule: './my-feature3-module',
      })
        .then((m) => m.MyFeature3Module)
        .catch((err) => console.error('Error lazy loading mfe3 app', err)),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}