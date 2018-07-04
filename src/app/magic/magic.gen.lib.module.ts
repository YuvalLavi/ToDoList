import { NgModule }             from '@angular/core';
import { RouterModule }         from '@angular/router';
import { ReactiveFormsModule }  from '@angular/forms';
import { CommonModule }         from "@angular/common";

import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatRadioModule,
  MatSelectModule,
  MatTableModule,
  MatTabsModule,
  MatTooltipModule,
  MatIconModule,
} from "@angular/material";

import { DynamicModule } from 'ng-dynamic-component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { ComponentListMagicService, MagicModule } from "@magic-xpa/angular";
import {magicGenComponents, magicGenCmpsHash, title} from './component-list.g';
import { MagicAngularMaterialModule } from "@magic-xpa/angular-material-core";

@NgModule({
  declarations: [
    ...magicGenComponents
  ],
  exports : [
    ...magicGenComponents,
    MagicModule
  ],
  imports: [
    // Angular Modules
    CommonModule,
    ReactiveFormsModule,
    RouterModule,

    // Magic Modules
    MagicModule,
    DynamicModule.withComponents(magicGenComponents),
    InfiniteScrollModule,

    // Material Modules
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatCheckboxModule,
    MatTabsModule,
    MatDialogModule,
    MatSelectModule,
    MatTooltipModule,
    MatCardModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MagicAngularMaterialModule,
    MatIconModule
  ],
  providers: [],
})
export class MagicGenLibModule {
  constructor(componentList: ComponentListMagicService) {
    componentList.addComponents(magicGenCmpsHash);
    componentList.title = title;
  }
}
