import {NgModule} from '@angular/core'
import{Routes,RouterModule} from '@angular/router'

const routes: Routes = [
    {
        path: 'goods-receipt-note',
        loadChildren: './goods-receipt-note/goods-receipt-note.module#GoodsReceiptNoteModule'
    },
    {
        path: 'goods-acceptance',
        loadChildren: './goods-acceptance/goods-acceptance.module#GoodsAcceptanceModule'
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: []
})
export class GoodsReceiptRoutingModule {

}
