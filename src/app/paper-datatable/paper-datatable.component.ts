import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//import { shops } from '../service/data/shops.json';

@Component({
    selector: '<paper-datatable-app>',
    templateUrl: './paper-datatable.component.html'
})


export class PaperDatatableComponent implements OnInit {
    title: string = 'Paper Datatable';

    shops: string[];
    data: any;


    // Inject HttpClient into your component or service.
    constructor(private http: HttpClient) { }

    ngOnInit(): void {
        this.http
            .get<any>('/service/data/data.json', { observe: 'response' })
            .subscribe(resp => {
                this.data = resp;
                console.log(resp.headers.get('X-Custom-Header'));
                console.log(resp.body.someField);
            });
    }
}