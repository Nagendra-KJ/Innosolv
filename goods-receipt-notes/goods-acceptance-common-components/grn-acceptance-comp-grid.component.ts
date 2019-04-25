import { Component, OnInit, ViewChild} from '@angular/core'
declare var $: any;

@Component({
    templateUrl: './grn-acceptance-comp-grid.component.html',
    selector: 'grn-acceptance-comp-grid-component'
})
export class GrnAcceptanceCompGridComponent implements OnInit {
    
    @ViewChild('grnacceptComp') dataTable : any
    ngOnInit(){
        this.initializeComponentGrid()
    }
    private  initializeComponentGrid(){
        var editor = new $.fn.dataTable.Editor({
            table: "#grnacceptComp",
            fields: [
                {
                    label: 'Component',
                    name: 'comp'
                },
                {
                    label: 'Percentage',
                    name: 'percentage'
                },
                {
                    label: 'value',
                    name: 'value'
                }
            ],
            ajax: (method, url, d, successCallback, errorCallback) => {
                
            }
        })
        
        this.dataTable = $('#grnacceptComp').DataTable({
            
            dom: "Bft",
            scrollX: true,
            scrollY: 170,
            columns: [
                { data: 'comp', className: 'dt-left', defaultContent: '',width: 100 },
                { data: "percentage", className: 'editable dt-left', defaultContent: '',width: 300 },
                { data: "value", className: 'editable dt-left', defaultContent: '',width: 100 }
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