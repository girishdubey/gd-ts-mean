import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssetListComponent } from './assetlist.component';

const routes: Routes = [
    {
        path: '',
        component: AssetListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AssetListRoutingModule {}
