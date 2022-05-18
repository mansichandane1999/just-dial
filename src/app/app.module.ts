import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { FooterComponent } from './footer/footer.component';
import { FooterMenuComponent } from './footer-menu/footer-menu.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { ListItemsComponent } from './list-items/list-items.component';
import { ItemsComponent } from './items/items.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import {HttpClientModule} from '@angular/common/http'
import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routesConfig: Routes =[
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ContactUsComponent
  },
  {
    path: 'list',
    component: ListItemsComponent
  }

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderMenuComponent,
    FooterComponent,
    FooterMenuComponent,
    MainContainerComponent,
    ListItemsComponent,
    ItemsComponent,
    ContactUsComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routesConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
