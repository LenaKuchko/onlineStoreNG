import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { AlbumDetailComponent }   from './album-detail/album-detail.component';
import { AdminComponent }   from './admin/admin.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'about',
    component: AboutPageComponent
  },
  {
    path: 'marketplace',
    component: MarketplaceComponent
  },
  {
  path: 'albums/:id',
  component: AlbumDetailComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
