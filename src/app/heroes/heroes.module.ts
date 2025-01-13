import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroComponent } from './hero/hero.component';
import { ListComponent } from './list/list.component';
import { PowerComponent } from './power/power.component';

@NgModule({
  exports: [
    HeroComponent,
    ListComponent,
    PowerComponent,
  ],
  declarations: [
    HeroComponent,
    ListComponent,
    PowerComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class HeroesModule { }
