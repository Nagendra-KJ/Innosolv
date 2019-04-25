import { NgModule } from '@angular/core'
import { SharedModule } from '../../../../shared/shared.module'
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'
import {GrnItemGridComponent} from './grn-item-grid.component'
import {GrnScheduleGridComponent} from './grn-schedule-grid.component'
import {ItemDetailGrid} from './item-detail-grid.component'
import { ModalModule } from 'ngx-bootstrap'

@NgModule({
    imports: [ SharedModule, FormsModule, CommonModule,ModalModule.forRoot()],
    exports: [GrnItemGridComponent,GrnScheduleGridComponent,ItemDetailGrid], 
    declarations: [GrnItemGridComponent,GrnScheduleGridComponent,ItemDetailGrid]
})
export class GrnCommonComponentsModule {
    
}
