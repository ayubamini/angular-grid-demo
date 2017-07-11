import { Component, OnInit } from '@angular/core';
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { SortDescriptor, orderBy } from '@progress/kendo-data-query';

// Add Service
import { Product } from '../model/product'
import { ProductService } from '../service/product.service'


@Component({
    selector: 'app-kendoui-dt',
    templateUrl: `./kendoui.component.html`,
    providers: [ProductService]
})


export class KendouiComponent implements OnInit {
    title: string = 'Kendo-UI!';
    selectedProduct: Product;

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
    private products: any = this.productService.getProducts();

    constructor(private productService: ProductService) {

    }

    ngOnInit(): void {
        //this.productService.getProductsPromise().then(i => this.items = i);
        //this.items = this.productService.getProducts();
        this.loadProductes();
    }

    protected sortChange(sort: SortDescriptor[]): void {
        this.sort = sort;
        this.loadProductes();
    }

    protected pageChange(event: PageChangeEvent): void {
        this.skip = event.skip;
        this.loadProductes();
    }

    onSelect(product: Product): void {
        this.selectedProduct = product;
    }

    private loadProductes(): void {
                
        this.gridView = {
            data: orderBy(this.products.slice(this.skip, this.skip + this.pageSize), this.sort),
            total: this.products.length
        };
    }

}
