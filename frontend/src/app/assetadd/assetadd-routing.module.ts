import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssetAddComponent } from './assetadd.component';

const routes: Routes = [
    {
        path: '',
        component: AssetAddComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AssetAddRoutingModule {}
