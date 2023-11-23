import { Component } from '@angular/core';
import { WetterService } from '../services/wetter.service';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { GeolocatorService } from '../services/geolocator.service';
import { CommonModule } from '@angular/common';
import { NotificationsService } from '../services/notifications.service';


// ...

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule]
})
export class Tab2Page {

  longitude: number = 0
  latitude: number = 0


  wetterData: any;

  constructor(  
    private geolocationService : GeolocatorService, 
    private wetterService:WetterService,
    private notificationService: NotificationsService) {
      this.setupTemperatureNotification();
  }
   
  ngOnInit(){
    this.getCurrentPosition();
    this.getWetter();
  }

  setupTemperatureNotification() {
    // Starte die Funktion alle 30 Sekunden (für Testzwecke)
    setInterval(() => {
      this.triggerNotification();
    }, 30 * 1000); // 30 Sekunden in Millisekunden
  }


  triggerNotification() {
    // Füge den Text hinzu, den du in der Benachrichtigung anzeigen möchtest
    const text = 'Es ist kalt!';

    // Löse die Benachrichtigung aus
    this.notificationService.createNotification('Achtung', text);
  }

  getWetter(){
    this.wetterService.getWetter(this.latitude, this.longitude).subscribe(data => {
      this.wetterData = data;
      this.wetterData.main.temp = this.convertKelvinToCelsius(this.wetterData.main.temp).toFixed(1);

      console.log(data);
    })
   }

  getCurrentPosition = async () => {
    const position = await this.geolocationService.getCurrentPosition()

    this.latitude = position.coords.latitude
    this.longitude = position.coords.longitude

    this.getWetter();
  }

  private convertKelvinToCelsius(kelvin: number): number {
    return kelvin - 273.15;
  }
}
