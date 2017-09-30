import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';


@Component({
    selector: 'app-smart-t',
    templateUrl: './smart-table.component.html',
    styleUrls: ['smart-table.component.scss'],
})

export class SmartTableComponent {
    title = 'Smart Table Demo';
    source: LocalDataSource; // add a property to the component

    constructor() {
        this.source = new LocalDataSource(this.data); // create the source
    }

    settings = {
        attr: {
            class: 'align: right'
        },
        columns: {
            id: {
                title: "شناسه",
                filter: false,
                editable: false,
                addable: false
            },
            name: {
                title: 'نام و نام خانوادگی',
                filter: false
            },
            username: {
                title: 'نام کاربری',
                filter: false
            },
            email: {
                title: 'ایمیل',
                filter: false
            }
        },
        add: {
            addButtonContent: "افزودن رکورد",
            createButtonContent: "افزودن",
            cancelButtonContent: "انصراف"
        },
        delete: {
            deleteButtonContent: "حذف",
            confirmDelete: true
        },
        edit: {
            editButtonContent: "ویرایش",
            cancelButtonContent: "انصراف",
            saveButtonContent: "بروزرسانی"
        },
        sort: {
            sortDirection: true,
        },
        pager: {
            perPage: 10,
            display: true
        },
        actions: {
            columnTitle: 'عملیات',
            position: 'right'
        },
        filter:{
            inputClass: ''
        },
        mode: 'external',
        hideHeader: false,
        hideSubHeader: true,
        noDataMessage: 'هیچ رکوردی برای نمایش وجود ندارد',
    };



    onSearch(query: string = '') {
        this.source.setFilter([
            // fields we want to include in the search
            {
                field: 'id',
                search: query
            },
            {
                field: 'name',
                search: query
            },
            {
                field: 'username',
                search: query
            },
            {
                field: 'email',
                search: query
            }
        ], false);
        // second parameter specifying whether to perform 'AND' or 'OR' search 
        // (meaning all columns should contain search query or at least one)
        // 'AND' by default, so changing to 'OR' by setting false here
    }

    data = [
        {
            id: '۱',
            name: "امیر",
            username: "مولایی",
            email: "amir.m@april.biz"
        },
        {
            id: '۲',
            name: "امیر حسین",
            username: "قاسمی",
            email: "Shanna@melissa.tv"
        },
        {
            id: '۳',
            name: "امیر علی",
            username: "اسماعیلی",
            email: "Shanna@melissa.tv"
        },
        {
            id: '۴',
            name: "امیر علی",
            username: "اسماعیلی",
            email: "Shanna@melissa.tv"
        },
        {
            id: '۵',
            name: "امیر علی",
            username: "اسماعیلی",
            email: "Shanna@melissa.tv"
        },
        {
            id: '۶',
            name: "امیر علی",
            username: "اسماعیلی",
            email: "Shanna@melissa.tv"
        },
        {
            id: '۷',
            name: "امیر علی",
            username: "اسماعیلی",
            email: "Shanna@melissa.tv"
        },
        {
            id: '۸',
            name: "امیر علی",
            username: "اسماعیلی",
            email: "Shanna@melissa.tv"
        },
        {
            id: '۹',
            name: "امیر علی",
            username: "اسماعیلی",
            email: "Shanna@melissa.tv"
        },
        {
            id: '۱۰',
            name: "امیر علی",
            username: "اسماعیلی",
            email: "Shanna@melissa.tv"
        },
        {
            id: '۱۱',
            name: "Nicholas DuBuque",
            username: "Nicholas.Stanton",
            email: "Rey.Padberg@rosamond.biz"
        }
    ];
}

