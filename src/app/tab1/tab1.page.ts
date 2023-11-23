import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { WetterService } from '../services/wetter.service';
import { Router, RouterModule } from '@angular/router';
import { StadtListComponent } from '../stadt-list/stadt-list.component';
import { StadtDetailComponent } from '../stadt-detail/stadt-detail.component';
import { addIcons } from 'ionicons';
import { bookmarksOutline, addCircleOutline} from 'ionicons/icons';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule,StadtListComponent,StadtDetailComponent,RouterModule]
})
export class Tab1Page {
  constructor(private wetterService:WetterService, private router : Router) {
    addIcons({ addCircleOutline });
  }
  cityInput!: string;
  wetterData: any;

  getWetterForCity() {
    this.wetterService.getWetterForCity(this.cityInput).subscribe(data => {
      this.wetterData = data;
      this.wetterData.main.temp = this.convertKelvinToCelsius(this.wetterData.main.temp).toFixed(1);
      console.log(data);
    });
  }


  private convertKelvinToCelsius(kelvin: number): number {
    return kelvin - 273.15;
  }

  async create () {
    await this.router.navigate(['tabs/tab1/stadt'])
  }

}

