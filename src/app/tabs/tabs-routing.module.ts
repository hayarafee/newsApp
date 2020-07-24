import { NewsPage } from './../news/news.page';
import { Tab1Page } from './../tab1/tab1.page';
import { Tab2Page } from './../tab2/tab2.page';
import { Tab3Page } from './../tab3/tab3.page';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      /* {
        path: 'news',
        loadChildren: () => import('../news/news.module').then(m => m.NewsPageModule)
      }, */
      {
        path: 'news',
        component:NewsPage
        /* loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule) */
      },
      {
        path: 'tab2',
        component:Tab2Page
/*         loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
 */      },
      {
        path: 'tab3',
        component:Tab3Page
/*         loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
 */      },
      {
        path: '',
        redirectTo: '/tabs/news',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/news',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
