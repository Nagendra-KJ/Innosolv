import { Component, OnInit, ViewChild} from '@angular/core'
declare var $: any;

@Component({
    templateUrl: './grn-acceptance-schedule-grid.component.html',
    selector: 'grn-acceptance-schedule-grid-component'
})
export class GrnAcceptanceScheduleGridComponent implements OnInit {
    @ViewChild('grnacceptItemSchedule') dataTable : any
    ngOnInit(){
        this.initializeComponentGrid()
    }
    private  initializeComponentGrid(){
        var editor = new $.fn.dataTable.Editor({
            table: "#grnacceptItemSchedule",
            fields: [
                {
                    label: 'schedule Item Name',
                    name: 'scheduleItemName'
                },
                {
                    label: 'Schedule Date',
                    name: 'scheduledate'
                },
                {
                    label: 'Schedule Qty',
                    name: 'scheduleQty'
                },
                {
                    label: 'Pending Qty',
                    name: 'pendingQty'
                },
                {
                    label:'Received Qty',
                    name: 'receivedQty'
                },
                {
                    label:'Accepted Qty',
                    name: 'acceptedQty'
                },{
                    label:'Purchase Indent',
                    name:'purchaseIndent'
                },{
                    label:'Status',
                    name:'status'
                },{
                    label:'Mode Of Transport',
                    name:'modeOfTransport'
                }
                
            ],
            ajax: (method, url, d, successCallback, errorCallback) => {
                
            }
        })
        
        this.dataTable = $('#grnacceptItemSchedule').DataTable({
            
            dom: "Bft",
            scrollX: true,
            scrollY: 170,
            columns: [
                { data: 'scheduleItemName', className: 'dt-left', defaultContent: '',width: 100 },
                { data: "scheduledate", className: 'editable dt-left', defaultContent: '',width: 300 },
                { data: "scheduleQty", className: 'editable dt-left', defaultContent: '',width: 100 },
                {data: "pendingQty" , className: 'editable dt-left', defaultContent:'',width:100},
                {data: "receivedQty" , className: 'editable dt-left', defaultContent:'',width:100},
                {data: "acceptedQty" , className: 'editable dt-left', defaultContent:'',width:100},
                {data: "purchaseIndent" , className: 'editable dt-left', defaultContent:'',width:100},
                {data: "status" , className: 'editable dt-left', defaultContent:'',width:100},
                {data: "modeOfTransport" , className: 'editable dt-left', defaultContent:'',width:100}
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