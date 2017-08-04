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

    
    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }
    
    // Inject HttpClient into your component or service.
    constructor(private http: HttpClient) { }

    // ngOnInit(): void {
    //     this.http
    //         .get<MyJsonData>('/service/data.json', { observe: 'response' })
    //         .subscribe(resp => {
    //             console.log(resp.headers.get('X-Custom-Header'));
    //             console.log(resp.body.someField);
    //         });
    // }
}