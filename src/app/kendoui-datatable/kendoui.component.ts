import { Component } from '@angular/core';
import { products } from '../../assets/data/products';
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { SortDescriptor, orderBy } from '@progress/kendo-data-query';



@Component({
    selector: 'app-kendoui-dt',
    templateUrl: `./kendoui.component.html`,
})
export class KendouiComponent {
    title: string = 'Kendo-UI!';

    /* Sorting */
    public multiple: boolean = false;
    public allowUnsort: boolean = true;
    private sort: SortDescriptor[] = [];


    /* Paging */
    private data: Object[];
    private pageSize: number = 10;
    private skip: number = 0;

    /* Data */
    private gridView: GridDataResult;
    private items: any[] = products;

    constructor() {
        this.loadItems();
    }

    protected sortChange(sort: SortDescriptor[]): void {
        this.sort = sort;
        this.loadItems();
    }

    protected pageChange(event: PageChangeEvent): void {
        this.skip = event.skip;
        this.loadItems();
    }

    private loadItems(): void {
        this.gridView = {
            data: orderBy(this.items.slice(this.skip, this.skip + this.pageSize), this.sort),
            total: this.items.length
        };
    }

}
