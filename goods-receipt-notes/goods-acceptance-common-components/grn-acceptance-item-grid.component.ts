import { Component, OnInit,ViewChild} from '@angular/core'
declare var $: any;

@Component({
    templateUrl: './grn-acceptance-item-grid.component.html',
    selector: 'grn-acceptance-item-grid-component'
})
export class GrnAcceptanceItemGridComponent implements OnInit {
    @ViewChild('grnacceptItem') dataTable: any
    ngOnInit(){
        this.initializeGrnAcceptItemGrid()
    }
    private initializeGrnAcceptItemGrid()
    {
        var editor = new $.fn.dataTable.Editor({
            table: "#grnacceptItem",
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
                    label: 'UOM',
                    name: 'uom'
                },
                {
                    label: 'Qty Accepted',
                    name: 'qtyAccepted'
                },
                {
                    label: 'Accepted Date',
                    name: 'qtyAcceptedDate'
                }
                ,
                {
                    label: 'Note',
                    name: 'note'
                }
            ],
            ajax: (method, url, d, successCallback, errorCallback) => {

            }
        })
        
        this.dataTable = $('#grnacceptItem').DataTable({
            
            dom: "Bft",
            scrollX: true,
            scrollY: 170,
            columns: [
                { data: 'itemCd', className: 'dt-left', defaultContent: '',width: 100 },
                { data: "itemName", className: 'editable dt-left', defaultContent: '',width: 300 },
                { data: "uom", className: 'editable dt-left', defaultContent: '',width: 100 },
                { data: "qtyAccepted", className: 'editable dt-left', defaultContent: '',width: 100 },
                { data: "qtyAcceptedDate", className: 'editable dt-left', defaultContent: '',width: 100 },
                { data: "note", className: 'editable dt-left', defaultContent: '' ,width: 100}
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