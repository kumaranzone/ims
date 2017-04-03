import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AntivirusComponent } from './antivirus/antivirus.component';

// Route Configuration
export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'antivirus', component: AntivirusComponent}
];
