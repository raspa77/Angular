import { Component } from '@angular/core';
import { template } from '@angular/core/src/render3';

@Component({
    selector : 'app-players',
    templateUrl: './players.component.html',
    styleUrls: ['./players.component.css']
})
export class PlayersComponent {
    title = 'Players';
    players = [
        {
            name: 'Master',
            pg: 'Master',
            lev: 99
        },
        {
            name: 'Raspa',
            pg: 'Snatk',
            lev: 13
        },
        {
            name: 'Ciappy',
            pg: 'Cornovald',
            lev: 15
        }
    ];
}
