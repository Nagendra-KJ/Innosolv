import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { moment } from 'ngx-bootstrap/chronos/test/chain';
declare var $: any;

@Component({
    selector: 'goods-receipt-new',
    templateUrl: './goods-receipt-new-note.component.html',
    
})
export class GoodsReceiptNewNoteComponent implements OnInit {
    selectedBusinessUnit : string
    documentType : string
    selectedPoNo : string
    grnNumber : string
    selectedVendor : string
    selectedVendorBranch : string
    selectedItemGroup : string
    allowAdvance : any
    grnDate : any = moment()
    ngOnInit(){
        this.grnDate = moment(this.grnDate).format('DD/MM/YYYY')
    }
}

    