import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { UnsubscribeOnDestroyAdapter } from '@app-core/unsuscribe-adapter/unsuscribe-adapter';
import * as Highcharts from 'highcharts/highmaps';
import mapdata from './mapdata';
import MapModule from 'highcharts/modules/map';
import { ChartComponent } from 'ng-apexcharts';
import { interval, Subscription } from 'rxjs';
/* import * as worldMap from "@highcharts/map-collection/custom/world.geo.json"; */
import { HttpParams, HttpHeaders, HttpClient } from '@angular/common/http';
import { HttpService } from '@app-core/http/http.service';
import { forkJoin } from 'rxjs';
mapdata(Highcharts);
@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})

export class ActivityComponent extends UnsubscribeOnDestroyAdapter
  implements OnInit, AfterViewInit, OnDestroy {
    Highcharts: typeof Highcharts = Highcharts;
  chartConstructor = 'mapChart';
  chartData = [{ code3: 'ABW', z: 105 }, { code3: 'AFG', z: 35530 }];
  mapWorld = require('@highcharts/map-collection/custom/world.geo.json');

  chartOptions2: any = {
    chart: {
      map: this.mapWorld as any
    },
    title: {
      text: 'Highmaps basic demo'
    },
    subtitle: {
      text:
        'Source map: <a href="http://code.highcharts.com/mapdata/custom/world.js">World, Miller projection, medium resolution</a>'
    },
    mapNavigation: {
      enabled: true,
      buttonOptions: {
        alignTo: 'spacingBox'
      }
    },
    legend: {
      enabled: true
    },
    colorAxis: {
      min: 0
    },
    series: [
      {
        type: 'map',
        name: 'Tweets data',
        states: {
          hover: {
            color: '#BADA55'
          }
        },
        dataLabels: {
          enabled: true,
          format: '{point.name}'
        },
        allAreas: false,
        data: []
      }
    ]
  };
  public tableData;
  public countTable;
  public mapaTable;
  public cloudTable;
  public pieTable;
  subscription: Subscription;
  public source = interval(45000);
  public begin = 0;
  public finish = 140;
  constructor(private httpService: HttpService, private http: HttpClient, ) {
    super();
  }

  @ViewChild('container') public myIdentifier: ElementRef;
  @ViewChild('container2') public myIdentifier2: ElementRef;
  public change = true;
  public barOptions = {
    series: [
      {
        name: 'My-series',
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
      }
    ],
    chart: {
      height: 350,
      type: 'bar'
    },
    title: {
      text: 'My First Angular Chart'
    },
    xaxis: {
      categories: ['Jan', 'Feb',  'Mar',  'Apr',  'May',  'Jun',  'Jul',  'Aug', 'Sep']
    }
  };
  public pieOptions: any = {
    series: [0, 0, 0, 0, 0],
    chart: {
      type: 'donut'
    },
    labels: ['', '', '', '', ''],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }
    ]
  };
  public countries: any = [
    ['fo', 0],
    ['us', 306],
    ['um', 0],
    ['jp', 7],
    ['sc', 0],
    ['in', 27],
    ['fr', 2],
    ['fm', 0],
    ['cn', 0],
    ['pt', 4],
    ['sw', 0],
    ['sh', 0],
    ['br', 8],
    ['ki', 0],
    ['ph', 10],
    ['mx', 0],
    ['es', 4],
    ['bu', 0],
    ['mv', 0],
    ['sp', 0],
    ['gb', 30],
    ['gr', 0],
    ['as', 0],
    ['dk', 0],
    ['gl', 0],
    ['gu', 0],
    ['mp', 0],
    ['pr', 0],
    ['vi', 0],
    ['ca', 26],
    ['st', 0],
    ['cv', 0],
    ['dm', 0],
    ['nl', 2],
    ['jm', 2],
    ['ws', 0],
    ['om', 0],
    ['vc', 0],
    ['tr', 0],
    ['bd', 0],
    ['lc', 0],
    ['nr', 0],
    ['no', 2],
    ['kn', 0],
    ['bh', 0],
    ['to', 0],
    ['fi', 0],
    ['id', 4],
    ['mu', 0],
    ['se', 0],
    ['tt', 0],
    ['my', 3],
    ['pa', 0],
    ['pw', 0],
    ['tv', 0],
    ['mh', 0],
    ['cl', 0],
    ['th', 2],
    ['gd', 0],
    ['ee', 0],
    ['ag', 0],
    ['tw', 0],
    ['bb', 1],
    ['it', 2],
    ['mt', 0],
    ['vu', 0],
    ['sg', 0],
    ['cy', 0],
    ['lk', 0],
    ['km', 0],
    ['fj', 0],
    ['ru', 0],
    ['va', 0],
    ['sm', 0],
    ['kz', 0],
    ['az', 0],
    ['tj', 0],
    ['ls', 1],
    ['uz', 0],
    ['ma', 0],
    ['co', 1],
    ['tl', 0],
    ['tz', 0],
    ['ar', 0],
    ['sa', 0],
    ['pk', 4],
    ['ye', 0],
    ['ae', 5],
    ['ke', 6],
    ['pe', 0],
    ['do', 1],
    ['ht', 0],
    ['pg', 0],
    ['ao', 0],
    ['kh', 0],
    ['vn', 0],
    ['mz', 0],
    ['cr', 0],
    ['bj', 0],
    ['ng', 13],
    ['ir', 0],
    ['sv', 0],
    ['sl', 0],
    ['gw', 0],
    ['hr', 0],
    ['bz', 0],
    ['za', 10],
    ['cf', 0],
    ['sd', 0],
    ['cd', 0],
    ['kw', 0],
    ['de', 4],
    ['be', 2],
    ['ie', 10],
    ['kp', 0],
    ['kr', 0],
    ['gy', 0],
    ['hn', 0],
    ['mm', 0],
    ['ga', 0],
    ['gq', 0],
    ['ni', 0],
    ['lv', 0],
    ['ug', 0],
    ['mw', 0],
    ['am', 0],
    ['sx', 0],
    ['tm', 0],
    ['zm', 0],
    ['nc', 0],
    ['mr', 0],
    ['dz', 0],
    ['lt', 0],
    ['et', 0],
    ['er', 0],
    ['gh', 0],
    ['si', 0],
    ['gt', 0],
    ['ba', 0],
    ['jo', 1],
    ['sy', 0],
    ['mc', 0],
    ['al', 0],
    ['uy', 3],
    ['cnm', 0],
    ['mn', 0],
    ['rw', 0],
    ['so', 0],
    ['bo', 0],
    ['cm', 0],
    ['cg', 0],
    ['eh', 0],
    ['rs', 0],
    ['me', 0],
    ['tg', 0],
    ['la', 0],
    ['af', 0],
    ['ua', 0],
    ['sk', 0],
    ['jk', 0],
    ['bg', 0],
    ['qa', 0],
    ['li', 0],
    ['at', 0],
    ['sz', 0],
    ['hu', 0],
    ['ro', 0],
    ['ne', 0],
    ['lu', 0],
    ['ad', 0],
    ['ci', 0],
    ['lr', 0],
    ['bn', 0],
    ['iq', 0],
    ['ge', 6],
    ['gm', 0],
    ['ch', 0],
    ['td', 0],
    ['kv', 0],
    ['lb', 1],
    ['dj', 0],
    ['bi', 0],
    ['sr', 0],
    ['il', 0],
    ['ml', 0],
    ['sn', 0],
    ['gn', 0],
    ['zw', 1],
    ['pl', 0],
    ['mk', 0],
    ['py', 0],
    ['by', 0],
    ['cz', 0],
    ['bf', 0],
    ['na', 0],
    ['ly', 0],
    ['tn', 0],
    ['bt', 0],
    ['md', 0],
    ['ss', 0],
    ['bw', 0],
    ['bs', 0],
    ['nz', 3],
    ['cu', 0],
    ['ec', 0],
    ['au', 21],
    ['ve', 0],
    ['sb', 0],
    ['mg', 0],
    ['is', 0],
    ['eg', 0],
    ['kg', 0],
    ['np', 0]
  ];
  public show = true;

  ngOnInit() {
    this.chartOptions2.series[0].data = this.countries;
    forkJoin(
      [this.tabla(), this.count(), this.mapa(), this.cloudWords(), this.pieChart()]
    ).subscribe(([tableResp, countTable, mapaData, cloudData, pieData]) => {
        this.tableData = tableResp;
        this.countTable = countTable;
        this.cloudTable = cloudData;
        this.mapaTable = mapaData;
        this.pieTable = pieData;
        this.mapaTable = Object.entries(this.mapaTable);
        this.pieOptions.series = Object.values(this.pieTable);
        this.pieOptions.labels = Object.keys(this.pieTable);
    });
    this.subscription = this.source.subscribe(val => {
      this.begin += 140;
      this.finish += 140;
      forkJoin(
        [this.tabla(), this.count(), this.mapa(), this.cloudWords(), this.pieChart()]
      ).subscribe(([tableResp, countTable, mapaData, cloudData, pieData]) => {
        this.tableData = tableResp;
        this.countTable = countTable;
        this.cloudTable = cloudData;
        this.mapaTable = mapaData;
        this.pieTable = pieData;
        this.mapaTable = Object.entries(this.mapaTable);
        this.show = false;

        this.chartOptions2.series[0].data = this.countries;
        this.show = true;
        this.pieOptions.series = Object.values(this.pieTable);
        this.pieOptions.labels = Object.keys(this.pieTable);
      });
    });
  }
  tabla() {
    const params = new HttpParams();
    // tslint:disable-next-line:max-line-length
    return this.http.get(`https://pfi76iz4wl.execute-api.us-east-1.amazonaws.com/default/tabla?begin=${this.begin}&limit=${this.finish}`, {params});
  }
  count() {
    const params = new HttpParams();
    return this.http.get(`https://ppwgioyvr5.execute-api.us-east-1.amazonaws.com/prod/test?limit=${this.finish}`, {params});
  }
  mapa() {
    const params = new HttpParams();
    return this.http.get(`https://lmcg4lv97e.execute-api.us-east-1.amazonaws.com/default/mapa?limit=${this.finish}`, {params});
  }
  cloudWords() {
    const params = new HttpParams();
    return this.http.get(`https://7i3bwk4vy1.execute-api.us-east-1.amazonaws.com/default/nube_palabras?limit=${this.finish}`, {params});
  }
  pieChart() {
    const params = new HttpParams();
    return this.http.get(`https://0kydqqayq4.execute-api.us-east-1.amazonaws.com/default/pie_chart?limit=${this.finish}`, {params});
  }
  ngAfterViewInit() {
    this.change = false;
    setTimeout(() => {
      this.barOptions.chart.height = (this.myIdentifier.nativeElement.offsetHeight * 0.99);
      this.pieOptions.chart.height = (this.myIdentifier2.nativeElement.offsetHeight * 0.99);
      this.change = true;
    }, 100);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
