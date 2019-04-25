import {Component,OnInit} from '@angular/core'
@Component({
    selector:'goods-acceptance',
    templateUrl : './goods-acceptance.component.html'
})
export class GoodsAcceptanceComponent  implements OnInit {
    selectBusinessUnit: string
    documentType : string
    selectedPoNo : string
    transferDetails : string
    dcDate : string
    dcNo : string
    grnDate: any
    itemgpName : string
    sBranchName : string
    grnNo : string
    sname : string
    sysNo : string
    grnDocType : string
    
    ngOnInit(){

    }

}