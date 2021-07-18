import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MatIconModule } from '@angular/material/icon';
import { MaterialButtonComponent } from './material-button/material-button.component';
import { TypographyComponent } from './typography/typography.component';
import { BadgeComponent } from './badge/badge.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { ListComponent } from './list/list.component';
import { GridComponent } from './grid/grid.component';
import { CardComponent } from './card/card.component';
import { ExpansionsRAccordionsComponent } from './expansions-r-accordions/expansions-r-accordions.component';
import { TableComponent } from './table/table.component';
import { DialogComponent } from './dialog/dialog.component';

// import {MatPaginator} from '@angular/material/paginator';
// import {MatSort} from '@angular/material/sort';

@NgModule({
  declarations: [
    AppComponent,
    MaterialButtonComponent,
    TypographyComponent,
    BadgeComponent,
    SpinnerComponent,
    ToolbarComponent,
    SidenavComponent,
    MenuComponent,
    ListComponent,
    GridComponent,
    CardComponent,
    ExpansionsRAccordionsComponent,
    TableComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
