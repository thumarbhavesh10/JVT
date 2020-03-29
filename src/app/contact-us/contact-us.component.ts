import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  // map: google.maps.Map;


  constructor() { }

  ngOnInit() {

      // var mapProp = {
      //   center: new google.maps.LatLng(18.5793, 73.8143),
      //   zoom: 15,
      //   mapTypeId: google.maps.MapTypeId.ROADMAP
      // };
      // this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    }
  }
