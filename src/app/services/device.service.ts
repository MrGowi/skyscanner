import { Injectable } from '@angular/core';
import { Device } from '@capacitor/device';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor() { }

  getBatteryInfo = async () => {

    const info = await Device.getBatteryInfo();

  console.log(info);

  return info;
  };

}
