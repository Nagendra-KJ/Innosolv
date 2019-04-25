import { NgModule } from '@angular/core'
import { SharedModule } from '../../../../shared/shared.module'
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'
import {GrnAcceptanceItemGridComponent} from './grn-acceptance-item-grid.component'
import {GrnAcceptanceScheduleGridComponent} from './grn-acceptance-schedule-grid.component'
import {GrnAcceptanceCompGridComponent } from './grn-acceptance-comp-grid.component'
import { ModalModule } from 'ngx-bootstrap'

@NgModule({
    imports: [ SharedModule, FormsModule, CommonModule,ModalModule.forRoot()],
    exports: [GrnAcceptanceItemGridComponent,GrnAcceptanceScheduleGridComponent,GrnAcceptanceCompGridComponent], 
    declarations: [GrnAcceptanceItemGridComponent,GrnAcceptanceScheduleGridComponent,GrnAcceptanceCompGridComponent]
})
export class GrnAcceptanceCommonComponentsModule {
    
}
