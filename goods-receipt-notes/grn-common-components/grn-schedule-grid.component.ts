import {Component,OnInit, ViewChild} from '@angular/core'
declare var $:any
@Component({
    templateUrl: './grn-schedule-grid.component.html',
    selector: 'grn-schedule-grid-component'

})

export class GrnScheduleGridComponent implements OnInit {
  @ViewChild('scheduleGrid') dataTable:any
  ngOnInit(){
    this.initializeGrnAcceptItemDetailGrid()
  }

  private initializeGrnAcceptItemDetailGrid()
  {
    // <td>Item Name</td>
    // <td>Sched.Date</td>
    // <td>Sched. Qty</td>
    // <td>Pending Qty</td>
    // <td> Received Qty</td>
    // <td> Accepted Qty</td>
    // <td>Purchase Indent</td>
    // <td>Status</td>
    // <td>Mode Of Transport</td>


      var editor = new $.fn.dataTable.Editor({
          table: "#scheduleGrid",
          fields: [
              {
                  label: 'Item Name',
                  name: 'itemName'
              },
              {
                  label: 'Schedule Data',
                  name: 'scheduleDate'
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
                  label: 'Received Qty',
                  name: 'receivedQty'
              },
              {
                  label: 'Accepted Qty',
                  name: 'acceptedQty'
              },
              {
                  label: 'Purchase Indent',
                  name: 'purchaseIndent'
              },
              {
                  label: 'Status',
                  name: 'status'
              },
              {
                  label: 'Mode of Transport',
                  name: 'modeOfTransport'
              }
          ],
          ajax: (method, url, d, successCallback, errorCallback) => {
              
          }
      })
      
      this.dataTable = $('#scheduleGrid').DataTable({
          
          dom: "Bft",
          scrollX: true,
          scrollY: 170,
          columns: [
              { data: "itemName", className: 'editable dt-left', defaultContent: '',width: 300 },
              { data: "scheduleDate", className: 'editable dt-left', defaultContent: '',width: 100 },
              { data: "scheduleQty", className: 'editable dt-left', defaultContent: '',width: 100 },
              { data: "pendingQty", className: 'editable dt-left', defaultContent: '',width: 100 },
              { data: "receivedQty", className: 'editable dt-left', defaultContent: '',width: 100 },
              { data: "acceptedQty", className: 'editable dt-left', defaultContent: '',width: 100 },
              { data: "purchaseIndent", className: 'editable dt-left', defaultContent: '',width: 100 },
              { data: "status", className: 'editable dt-left', defaultContent: '',width: 100 },
              { data: "modeOfTransport", className: 'editable dt-left', defaultContent: '',width: 100 }
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