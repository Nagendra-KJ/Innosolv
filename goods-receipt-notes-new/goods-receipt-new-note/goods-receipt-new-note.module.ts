import { NgModule } from '@angular/core'
import { TabsModule } from 'ngx-bootstrap'
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'

import { GoodsReceiptNewNoteRoutingModule } from './goods-receipt-new-note-routing.module'
import { GoodsReceiptNewNoteComponent } from './goods-receipt-new-note.component'
import { SharedModule } from '../../../../shared/shared.module'
import { TextMaskModule } from 'angular2-text-mask';
import {GrnCommonComponentsModule} from '../grn-common-components/grn-commom-components.module'



@NgModule({
    imports: [GoodsReceiptNewNoteRoutingModule,GrnCommonComponentsModule, TabsModule.forRoot() ,SharedModule, FormsModule, CommonModule, TextMaskModule],
    exports: [],
    declarations: [GoodsReceiptNewNoteComponent],
})
export class GoodsReceiptNewNoteModule {}