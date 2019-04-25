import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { GoodsReceiptNoteComponent } from './goods-receipt-note.component'
let routes : Routes = [
   
    {
        path :'',
        component: GoodsReceiptNoteComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [],
    declarations: []
    //providers: [DirectPoResolverService]
})
export class GoodsReceiptNoteRoutingModule {

}