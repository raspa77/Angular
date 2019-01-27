import { Component, OnInit } from '@angular/core';
import { template } from '@angular/core/src/render3';
import { PlayerService } from './player.service';
import { PlayerService2 } from './player.service2';

@Component({
    selector : 'app-players',
    templateUrl: './players.component.html',
    styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
    title = 'Players';
    players = [];
    constructor(private service: PlayerService) {
    }
    ngOnInit() {
        this.players = this.service.getPlayers();
    }
 // constructor() {
 //    const service = new PlayerService2();
 //    this.players = service.getPlayers2();
 // }
}
