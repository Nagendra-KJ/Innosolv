import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'


import{GoodsAcceptanceComponent} from './goods-acceptance.component'
let routes : Routes = [
   
    {
        path :'',
        component: GoodsAcceptanceComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [],
    declarations: []
    //providers: [DirectPoResolverService]
})
export class GoodsAcceptanceRoutingModule {

}