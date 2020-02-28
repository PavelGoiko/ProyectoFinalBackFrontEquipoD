import { Component, OnInit } from '@angular/core';
import { Publication } from 'src/app/entity/publication';
import { PublicationsService } from 'src/app/providers/publications.service';
import { Router } from '@angular/router';


/*export interface Data {
  movies: string;
}*/

@Component({
  selector: 'app-publications',
  templateUrl: './publications.page.html',
  styleUrls: ['./publications.page.scss'],
 
})
export class PublicationsPage {

  sales1=[{id :1,
    region : "safasfa",
    country :"asafaf",
    itemtype: "string",
    saleschannel : "string",
    orderpriority : "string",
    orderdate  : "string",
    orderid  : "string",
    shipdate : "string",
    unitssold : "number",
    unitprice :"number",
    unitcost : "Float32Array",
    totalrevenue : "Float32Array",
    totalcost :"Float32Array",
    totalprofit : "Float32Array"},
    {id :1,
      region : "safasfa",
      country :"asafaf",
      itemtype: "string",
      saleschannel : "string",
      orderpriority : "string",
      orderdate  : "string",
      orderid  : "string",
      shipdate : "string",
      unitssold : "number",
      unitprice :"number",
      unitcost : "Float32Array",
      totalrevenue : "Float32Array",
      totalcost :"Float32Array",
      totalprofit : "Float32Array"}
  ]


  publications: Publication = {} as Publication;
  publicationDetail: Publication = {} as Publication;
  list: Publication[] = [];
  publication: any = {};
  id: number = 0;
  constructor(private publicationsService: PublicationsService, private router: Router) {

  }


  ngOnInit() {
    this.showAll();
    this.reloadData();
  

  }

  showAll() {
    this.publicationsService.searchAll().then((datos) => {
      this.list = datos as Publication[];
    });



  }
  reloadData(){
    this.publicationsService.searchAll()
      
  }

  delete(publications) {
    this.publicationsService.delete(publications).then((datos) => {
      this.showAll();
    });

  }

  detail(publications: Publication) {
    this.router.navigate(["/detail", publications.id])
  }

  searchPublication() {
    this.publicationsService.searchOne(this.id).then((datos) => {
      this.publications = datos;
    });
  }

  edit(publications: Publication) {
    this.router.navigate(["/edit", publications.id])
  }


}
