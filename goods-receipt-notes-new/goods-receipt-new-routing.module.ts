import {NgModule} from '@angular/core'
import{Routes,RouterModule} from '@angular/router'

const routes: Routes = [
    {
        path: 'goods-receipt-new-note',
        loadChildren: './goods-receipt-new-note/goods-receipt-new-note.module#GoodsReceiptNoteModule'
    },
    {
        path: 'goods-receipt-new-acceptance',
        loadChildren: './goods-acceptance/goods-acceptance.module#GoodsAcceptanceModule'
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: []
})
export class GoodsReceiptNewRoutingModule {

}
