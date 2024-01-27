import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { QuestionsComponent } from './questions/questions.component';

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page',
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'City details',
  },
  {
    path: 'welcome',
    component: WelcomeComponent,
    title: 'Welcome',
  },
  {
    path: 'questions',
    component: QuestionsComponent,
    title: 'Questions',
  },
];

export default routeConfig;