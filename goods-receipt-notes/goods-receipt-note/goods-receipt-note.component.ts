import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { moment } from 'ngx-bootstrap/chronos/test/chain';
declare var $: any;

@Component({
    selector: 'goods-receipt',
    templateUrl: './goods-receipt-note.component.html'//,
    //providers: [DirectPoService],
    //styleUrls: ['./goods-receipt.component.css']
    
})
export class GoodsReceiptNoteComponent implements OnInit {
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

    