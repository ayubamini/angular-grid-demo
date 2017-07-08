import { Component } from '@angular/core';



@Component({
    selector: 'app-smart-t',
    templateUrl: './smart-table.component.html',
})


export class SmartTableComponent {
    title = 'Smart Table Demo';

    settings = {
        mode: 'Inline',
        columns: {
            id: {
                title: 'شناسه'
            },
            name: {
                title: 'نام و نام خانوادگی'
            },
            username: {
                title: 'نام کاربری'
            },
            email: {
                title: 'ایمیل'
            }
        },
        add: {
            addButtonContent: "افزودن رکورد",
            createButtonContent: "افزودن",
            cancelButtonContent: "انصراف"
        },
        delete: {
            deleteButtonContent: "حذف"
        },
        edit: {
            editButtonContent: "ویرایش",
            cancelButtonContent: "انصراف",
            saveButtonContent: "بروزرسانی"
        },
        sort: {
            sortDirection: true,
        },
        pager: { perPage : 10 },
        actions:{
            columnTitle: 'عملیات'
        },
        hideHeader: true,
        noDataMessage: 'هیچ رکوردی برای نمایش وجود ندارد'
    };

    data = [
        {
            id: 1,
            name: "Leanne Graham",
            username: "Bret",
            email: "Sincere@april.biz"
        },
        {
            id: 2,
            name: "Ervin Howell",
            username: "Antonette",
            email: "Shanna@melissa.tv"
        },
        {
            id: 3,
            name: "Ervin Howell",
            username: "Antonette",
            email: "Shanna@melissa.tv"
        },
        {
            id: 4,
            name: "Ervin Howell",
            username: "Antonette",
            email: "Shanna@melissa.tv"
        },
        {
            id: 5,
            name: "Ervin Howell",
            username: "Antonette",
            email: "Shanna@melissa.tv"
        },
        {
            id: 6,
            name: "Ervin Howell",
            username: "Antonette",
            email: "Shanna@melissa.tv"
        },
        {
            id: 7,
            name: "Ervin Howell",
            username: "Antonette",
            email: "Shanna@melissa.tv"
        },
        {
            id: 8,
            name: "Ervin Howell",
            username: "Antonette",
            email: "Shanna@melissa.tv"
        },
        {
            id: 9,
            name: "Ervin Howell",
            username: "Antonette",
            email: "Shanna@melissa.tv"
        },
        {
            id: 10,
            name: "Ervin Howell",
            username: "Antonette",
            email: "Shanna@melissa.tv"
        },
        {
            id: 11,
            name: "Nicholas DuBuque",
            username: "Nicholas.Stanton",
            email: "Rey.Padberg@rosamond.biz"
        }
    ];
}

