import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.Component.html'
})

export class ServerComponent implements OnInit {
    serverId: number = 10;
    serverStatus: string= 'offline';
    constructor() { }

    ngOnInit() { }
}