import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchProductsComponent } from './product/search-products/search-products.component';

const routes: Routes = [
    { path: '', redirectTo: 'search', pathMatch: 'full' },
   
    
    { path: 'search', component: SearchProductsComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
