import { Component } from '@angular/core';
import { products } from '../../assets/data/products';

@Component({
    selector: 'app-kendoui-dt',
    templateUrl: `./kendoui.component.html`,
    styleUrls: ['../../styles.scss'],
})
export class KendouiComponent {
    title: string = 'Kendo-UI!';
    public value: string = "359884123321";
    public mask: string = "(999) 000-00-00-00";

    private gridData: any[] = products;

    onButtonClick() {
        this.title = 'Hello from Kendo UI!';
    }
}
