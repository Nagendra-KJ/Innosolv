import {NgModule} from '@angular/core'
import{Routes,RouterModule} from '@angular/router'

const routes: Routes = [
    {
        path: 'goods-receipt',
        loadChildren: './goods-receipt-notes/goods-receipt.module#GoodsReceiptModule'
    },
    {
        path: 'invoice-verification',
        loadChildren: './invoice-verifications/invoice-verification/invoice-verification.module#InvoiceVerificationModule'
         
    },
    {
            path:'stock-movement',
            loadChildren:'./stock-movements/stock-movements.module#StockMovementModule'
    },
    {
        path:'purchase-return',
        loadChildren:'./purchase-returns/purchase-return/purchase-return.module#PurchaseReturnModule'
    },
    {
        path: 'purchase-orders',
        loadChildren:'./purchase-orders/purchase-orders.module#PurchaseOrdersModule'
    },
    {
        path:'goods-receipt-new',
        loadChildren:'./goods-receipt-notes-new/goods-receipt-new.module#GoodsReceiptNotesNewModule'
    }
    // ,{
    //     path:'issue-for-cons',
    //     loadChildren:'./issue-for-consumption/issue-for-consumption.module#IssueForComsumptionModule'
    // },
    // {
    //     path:'stock-transfer',
    //     loadChildren:'./stock-transfer/stock-transfer.module#StockTransferModule'
    // },
    // {
    //     path:'factory-dispatch',
    //     loadChildren:'./factory-dispatch/factory-dispatch.module#FactoryDispatchModule'
    // },
    // {
    //     path:'material-request',
    //     loadChildren:'./material-request/material-requests.module#MaterialRequestModule'
    // },
    // {
    //     path:'stock-adjustment',
    //     loadChildren:'./stock-adjustment/stock-adjustment.module#StockAdjustmentModule'
    // }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: []
})
export class InventoryTransactionRoutingModule {

}
