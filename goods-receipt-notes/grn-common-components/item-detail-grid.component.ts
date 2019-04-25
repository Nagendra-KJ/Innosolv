import {Component,OnInit, ViewChild} from '@angular/core'
declare var $:any
@Component({
    templateUrl: './item-detail-grid.component.html',
    selector: 'item-detail-grid-component'
})

export class ItemDetailGrid implements OnInit {
    @ViewChild('itemDetailGrid') dataTable :any
    ngOnInit(){
        this.initializeGrnAcceptItemDetailGrid()
    }
    private initializeGrnAcceptItemDetailGrid()
    {
        var editor = new $.fn.dataTable.Editor({
            table: "#itemDetailGrid",
            fields: [
                {
                    label: 'Item Name',
                    name: 'itemName'
                },
                {
                    label: 'PO Balance',
                    name: 'poBalance'
                },
                {
                    label: 'UOM',
                    name: 'uom'
                },
                {
                    label: 'Tolerance',
                    name: 'tolerance'
                }
            ],
            ajax: (method, url, d, successCallback, errorCallback) => {
                
            }
        })
        
        this.dataTable = $('#itemDetailGrid').DataTable({
            
            dom: "Bft",
            scrollX: true,
            scrollY: 170,
            columns: [
                { data: "itemName", className: 'editable dt-left', defaultContent: '',width: 300 },
                { data: "poBalance", className: 'editable dt-left', defaultContent: '',width: 100 },
                { data: "uom", className: 'editable dt-left', defaultContent: '',width: 100 },
                { data: "tolerance", className: 'editable dt-left', defaultContent: '',width: 100 }
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