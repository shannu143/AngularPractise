import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatBadgeModule } from '@angular/material/badge';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider'
import { MatGridListModule } from '@angular/material/grid-list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatCheckboxModule} from '@angular/material/checkbox';


const materials = [ MatCheckboxModule,MatPaginatorModule, MatSortModule,MatTableModule,MatCardModule,MatExpansionModule,MatGridListModule,MatDividerModule,MatListModule,MatMenuModule,MatSidenavModule,MatSliderModule,MatBadgeModule,MatToolbarModule,MatButtonModule,MatButtonToggleModule,MatProgressSpinnerModule,MatInputModule ];

@NgModule({
  imports: [ materials],
  exports: [ materials]
})
export class MaterialModule { }
