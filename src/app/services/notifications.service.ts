import { Injectable } from '@angular/core';
import { LocalNotifications } from '@capacitor/local-notifications';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor() { }

  async createNotification (title : string = '', text : string  = '') {
    const schedule = await LocalNotifications.schedule({
      notifications: [{
        id: 1,
        title: title,
        body: text
    }]
    })
  }

}
