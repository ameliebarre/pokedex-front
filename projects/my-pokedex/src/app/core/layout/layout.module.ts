import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { SharedModule } from '../../shared/shared.module';
import { LayoutRoutes } from './layout.routes';

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, SharedModule, LayoutRoutes],
  exports: []
})
export class LayoutModule {}
