import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {TableComponent} from "../table-component/table.component";
import {Address} from "../../core/models/table.response";
import Map from 'ol/Map';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import View from 'ol/View';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import XyzSource from 'ol/source/XYZ';
import TileLayer from 'ol/layer/Tile';

import { fromLonLat } from 'ol/proj';
import {Icon, Style} from "ol/style";

@Component({
  selector: 'app-map-modal',
  templateUrl: './map-modal.component.html',
  styleUrls: ['./map-modal.component.scss']
})
export class MapModalComponent implements OnInit {

  map: Map | any;
  vectorSource: VectorSource | any;
  vectorLayer:any;
  xyzSource: XyzSource | any;
  tileLayer: any;
  view: View | any;
  marker: Feature | any;

  lat: number;
  long: number;

  constructor(private dialog: MatDialogRef<TableComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Address) {

    this.lat = Number(data.geo.lat);
    this.long = Number(data.geo.lng);
  }

  ngOnInit(): void {

    // Feature and vector
    this.marker = new Feature({
      geometry: new Point(fromLonLat([this.long, this.lat])),
      name: 'user',
      src: 'https://openlayers.org/en/v3.20.1/examples/data/icon.png'
    });

    // const iconStyle = new Style({
    //   image: new Icon({
    //     anchor: [0.5, 46],
    //     anchorXUnits: 'fraction',
    //     anchorYUnits: 'pixels',
    //     src: 'assets/home.svg',
    //   }),
    // });

    // this.marker.setStyle(iconStyle);

    this.vectorSource = new VectorSource({
      features: [this.marker]
    });

    this.vectorLayer = new VectorLayer({
      source: this.vectorSource
    });

    // XYZ
    this.xyzSource = new XyzSource({
      url: 'http://tile.osm.org/{z}/{x}/{y}.png',
    });

    this.tileLayer = new TileLayer({
      source: this.xyzSource
    });

    // View and map
    this.view = new View({
      center: fromLonLat([this.long, this.lat]),
      zoom: 4
    });

    this.map = new Map({
      target: 'map',
      layers: [this.tileLayer, this.vectorLayer],
      view: this.view
    });
  }
}
