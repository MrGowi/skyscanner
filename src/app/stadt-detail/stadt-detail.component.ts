import { Component, OnInit } from '@angular/core';
import { Stadt } from '../data/stadt';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { StadtService } from '../services/stadt.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GeolocatorService } from '../services/geolocator.service';
import { WetterService } from '../services/wetter.service';

@Component({
  selector: 'app-stadt-detail',
  templateUrl: './stadt-detail.component.html',
  styleUrls: ['./stadt-detail.component.scss'],
  imports: [IonicModule,FormsModule,ReactiveFormsModule,CommonModule],
  standalone: true
})
export class StadtDetailComponent  implements OnInit {

  stadt : Stadt = new Stadt()
  public stadtForm = new FormGroup({
    id: new FormControl(0),
    name: new FormControl('', Validators.required),
  })

  wetterData: any;
  Name!: string;
  longitude: number = 0
  latitude: number = 0

  constructor(
    private stadtService : StadtService,
    private formBuilder : FormBuilder,
    private router : Router,
    private route : ActivatedRoute,
    public geolocationService : GeolocatorService, 
    private wetterService:WetterService) {}

  ngOnInit() {
    if (this.route.snapshot.paramMap.get('id') !== null) {
      const id = Number.parseInt(this.route.snapshot.paramMap.get('id') as string);
      this.stadtService.getStadt(id).then(
        data => {
          this.stadt = data
          this.stadtForm = this.formBuilder.group(this.stadt)
          this.getWetter();
      })
     }
   }

   async back () {
    await this.router.navigate(['tabs','tab1'])
  }

    saveStadt (formData : any) {
      this.stadt = Object.assign(formData)
  
      if (this.stadt.id) {
        this.stadtService.updateStadt(this.stadt)
          .then(payload=>{
            this.back()
          })
        } else {
          this.stadtService.createStadt(this.stadt)
            .then(payload=>{
              this.back()
            })
        }
    }

    getWetter() {
      const cityName = this.stadtForm.value.name!;
      this.wetterService.getWetterForCity(cityName).subscribe((data) => {
        this.wetterData = data;
        this.wetterData.main.temp = this.convertKelvinToCelsius(this.wetterData.main.temp).toFixed(1);
        console.log(data);
      });
    }
  
    private convertKelvinToCelsius(kelvin: number): number {
      return kelvin - 273.15;
    }
  

}
