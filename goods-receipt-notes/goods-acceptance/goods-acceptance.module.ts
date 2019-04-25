import { NgModule } from '@angular/core'
import { TabsModule } from 'ngx-bootstrap'
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'

import { GoodsAcceptanceRoutingModule } from './goods-acceptance-routing.module'
import { GoodsAcceptanceComponent } from './goods-acceptance.component'
import { SharedModule } from '../../../../shared/shared.module'
import { TextMaskModule } from 'angular2-text-mask'
import {GrnAcceptanceCommonComponentsModule} from '../goods-acceptance-common-components/grn-acceptance-commom-components.module'



@NgModule({
    imports: [GoodsAcceptanceRoutingModule,GrnAcceptanceCommonComponentsModule, TabsModule.forRoot() ,SharedModule, FormsModule, CommonModule, TextMaskModule],
    exports: [],
    declarations: [GoodsAcceptanceComponent],
})
export class GoodsAcceptanceModule {

}