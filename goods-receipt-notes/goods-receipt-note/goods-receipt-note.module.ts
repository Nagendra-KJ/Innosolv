import { NgModule } from '@angular/core'
import { TabsModule } from 'ngx-bootstrap'
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'

import { GoodsReceiptNoteRoutingModule } from './goods-receipt-note-routing.module'
import { GoodsReceiptNoteComponent } from './goods-receipt-note.component'
import { SharedModule } from '../../../../shared/shared.module'
import { TextMaskModule } from 'angular2-text-mask';
import {GrnCommonComponentsModule} from '../grn-common-components/grn-commom-components.module'



@NgModule({
    imports: [GoodsReceiptNoteRoutingModule,GrnCommonComponentsModule, TabsModule.forRoot() ,SharedModule, FormsModule, CommonModule, TextMaskModule],
    exports: [],
    declarations: [GoodsReceiptNoteComponent],
})
export class GoodsReceiptNoteModule {

}