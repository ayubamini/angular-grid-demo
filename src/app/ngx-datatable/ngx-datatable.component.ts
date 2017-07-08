import { Component, ViewChild } from '@angular/core'


@Component({
    selector: 'app-smart-t',
    templateUrl: './ngx-datatable.component.html',
})


export class NgxDataTableComponent {
    title = 'Ngx DataTable Demo';
    rows = [];
    loadingIndicator: boolean = true;
    reorderable: boolean = true;

    columns = [
        { prop: 'name' },
        { name: 'Gender' },
        { name: 'Company' }
    ];
    
    
    constructor() {
        this.fetch((data) => {
            this.rows = data;
            setTimeout(() => { this.loadingIndicator = false; }, 1500);
        });
    }

    fetch(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', `assets/data/company.json`);

        req.onload = () => {
            cb(JSON.parse(req.response));
        };

        req.send();
    }

}

