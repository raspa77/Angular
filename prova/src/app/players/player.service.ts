import { Injectable } from '@angular/core';

@Injectable()
export class PlayerService {
    getPlayers() {
        return[
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
        },
        {
            name: 'Pist',
            pg: 'Talindor',
            lev: 14
        }
        ];
       }
}
