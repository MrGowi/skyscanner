import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { GeolocatorService } from '../services/geolocator.service';
import { SupabaseService } from '../services/supabase.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BatteryInfo, Device } from '@capacitor/device';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class Tab3Page {

  longitude: number = 0
  latitude: number = 0
  
  batteryLevel : number | undefined

  constructor(
    public geolocationService : GeolocatorService,
    public supaBaseService : SupabaseService
  ) { }

  ngOnInit() {
    this.getBatteryInfo()
  }

  
  getBatteryInfo = async () => { 
    const battery = await Device.getBatteryInfo()

    this.batteryLevel = battery.batteryLevel

    
  }

}
