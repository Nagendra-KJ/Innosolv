import { Component, OnInit, ViewChild} from '@angular/core'
declare var $: any;

@Component({
    templateUrl: './grn-item-grid.component.html',
    selector: 'grn-item-grid-component'
})
export class GrnItemGridComponent implements OnInit {
    @ViewChild('grnItemTable') dataTable : any
    ngOnInit(){
        this.initializeComponentGrid()
    }
    private  initializeComponentGrid(){
        var editor = new $.fn.dataTable.Editor({
            table: "#grnItemTable",
            fields: [
                {
                    label: 'Item Code',
                    name: 'itemCd'
                },
                {
                    label: 'Item Name',
                    name: 'itemName'
                },
                {
                    label: 'Part Number',
                    name: 'partNumber'
                },
                {
                    label: 'uom',
                    name: 'uom'
                },
                {
                    label:'DC Qty',
                    name: 'dcQty'
                },
                {
                    label:'Qty Received',
                    name: 'qtyReceived'
                },{
                    label:'Location',
                    name:'location'
                },{
                    label:'Cost Level1',
                    name:'cc1Desc'
                },{
                    label:'Cost Level2',
                    name:'cc2Desc'
                },{
                    label:'Batch Code',
                    name:'batchCode'
                },{
                    label:'Lot Number',
                    name:'lotNumber'
                },{
                    label:'Manufacturing Date',
                    name:'manufactureDate'
                },{
                    label:'Expiry Date',
                    name:'expiryDate'
                },{
                    label:'mrp',
                    name:'mrp'
                },{
                    label:'Rejected QC',
                    name:'rejectedQc'
                },{
                    label:'Accepted Date',
                    name:'acceptedDate'
                },{
                    label:'PO Bal. Qty',
                    name:'poBalQty'
                },{
                    label:'PO Rate',
                    name:'poRate'
                },{
                    label:'Purchase Order Note',
                    name:'purchaseOrderNote'
                },{
                    label:'Voucher Code',
                    name:'voucherCode'
                },{
                    label:'Voucher Number',
                    name:'voucherNo'
                },{
                    label:'Voucher Date',
                    name:'voucherDate'
                }
                
            ],
            ajax: (method, url, d, successCallback, errorCallback) => {
                
            }
        })
        
        this.dataTable = $('#grnItemTable').DataTable({
            
            dom: "Bft",
            scrollX: true,
            scrollY: 170,
            columns: [
                { data: 'itemCd', className: 'dt-left', defaultContent: '',width: 100 },
                { data: "itemName", className: 'editable dt-left', defaultContent: '',width: 300 },
                { data: "partNumber", className: 'editable dt-left', defaultContent: ''},
                { data: "uom" , className: 'editable dt-left', defaultContent:''},
                { data: "dcQty" , className: 'editable dt-left', defaultContent:''},
                { data: "qtyReceived" , className: 'editable dt-left', defaultContent:''},
                { data: "location" , className: 'editable dt-left', defaultContent:''},
                { data: "cc1Desc" , className: 'editable dt-left', defaultContent:''},
                { data: "cc2Desc" , className: 'editable dt-left', defaultContent:''},
                { data: "batchCode" , className:"editable dt-left", defaultContent:''},
                { data:'lotNumber' , className:'editable dt-left',defaultContent:''},
                { data:'manufactureDate' , className:'editable dt-left' , defaultContent:''},
                {data:'expiryDate'  , className:'editable dt-left' , defaultContent:'' },
                {data:'mrp', className:'editable dt-left' , defaultContent:''},
                {data:'rejectedQc', className:'editable dt-left' , defaultContent:''},
                {data:'acceptedDate', className:'editable dt-left' , defaultContent:''},
                {data:'poBalQty', className:'editable dt-left' , defaultContent:''},
                {data:'poRate', className:'editable dt-left' , defaultContent:''},
                {data:'purchaseOrderNote',className:'editable dt-left' , defaultContent:''},
                {data:'voucherCode',className:'editable dt-left' , defaultContent:''},
                {data:'voucherNo',className:'editable dt-left' , defaultContent:''},
                {data:'voucherDate',className:'editable dt-left' , defaultContent:''}
            ],
            select: true,
            keys: {
                keys: [9, 13, 8],
                editor: editor
            },
            paging: false,
            rowId: 'uuid',
            buttons: [
                {
                    text: 'New',
                    action: (e, dt, node, config) => {
                        
                        
                        
                    }
                },
                { extend: "remove", editor: editor }
            ]
        });
    }
}