import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  exports: [CommonModule, RouterModule, HttpClientModule, ReactiveFormsModule, FormsModule],
  declarations: [HomeComponent]
})
export class SharedModule {}
