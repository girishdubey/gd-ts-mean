import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetListRoutingModule } from './assetlist-routing.module';
import { AssetListComponent } from './assetlist.component';

@NgModule({
    imports: [CommonModule, AssetListRoutingModule],
    declarations: [AssetListComponent]
})
export class AssetListModule {}
