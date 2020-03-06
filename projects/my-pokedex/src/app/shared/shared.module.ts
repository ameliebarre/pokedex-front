import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  imports: [CommonModule, RouterModule, HttpClientModule],
  exports: [CommonModule, RouterModule, HttpClientModule],
  declarations: [HomeComponent]
})
export class SharedModule {}
