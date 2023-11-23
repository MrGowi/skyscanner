import { Injectable } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Injectable({
  providedIn: 'root'
})
export class GeolocatorService {

  constructor() { }


  getCurrentPosition = async () => {

    let attrs = {enableHighAccuracy: true};

    const coordinates = await Geolocation.getCurrentPosition(attrs);

    console.log('Current position:', coordinates);

    return coordinates;
  };

}
