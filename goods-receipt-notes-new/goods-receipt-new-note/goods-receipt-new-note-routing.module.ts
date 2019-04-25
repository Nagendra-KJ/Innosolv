import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { GoodsReceiptNewNoteComponent } from './goods-receipt-new-note.component'
let routes : Routes = [
   
    {
        path :'',
        component: GoodsReceiptNewNoteComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [],
    declarations: []
    //providers: [DirectPoResolverService]
})
export class GoodsReceiptNewNoteRoutingModule {

}