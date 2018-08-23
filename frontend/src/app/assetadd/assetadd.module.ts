import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetAddRoutingModule } from './assetadd-routing.module';
import { AssetAddComponent } from './assetadd.component';

@NgModule({
    imports: [CommonModule, AssetAddRoutingModule],
    declarations: [AssetAddComponent]
})
export class AssetAddModule {}
