import { Component, OnInit } from '@angular/core';
import { StadtService } from '../services/stadt.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Stadt } from '../data/stadt';
import { WetterService } from '../services/wetter.service';

@Component({
  selector: 'app-stadt-list',
  templateUrl: './stadt-list.component.html',
  styleUrls: ['./stadt-list.component.scss'],
  imports: [IonicModule,CommonModule, RouterModule],
  standalone: true
})
export class StadtListComponent  implements OnInit {
  stadts : Array<Stadt> | null = []

  constructor(
    private stadtService : StadtService,
    private router : Router,
    private wetterService:WetterService) { }

    cityInput!: string;
    wetterData: any;

    ngOnInit() {
      this.loadData()
    }

    loadData () {
      this.stadtService.getStadts()
        .then(data => {
          this.stadts = data
        })
    }

    async handleRefresh (event : any) {
      await this.loadData()
      event.target.complete()
    }
  
    async edit (stadt : Stadt) {
      await this.router.navigate(['tabs/tab1/stadt', stadt.id])
    }
  
    delete (stadt:Stadt) {
      this.stadtService.deleteStadt(stadt)
        .then(payload =>  {
          this.stadtService.getStadts()
            .then(data => {
              this.stadts = data
            })
        })
    }

  }
 
