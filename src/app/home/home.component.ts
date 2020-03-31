import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RouteGuardService } from '../service/route-guard.service';

import { Stock } from '../shared/stock';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name = ''
  riskButtonValue = ''
 

  stocks = [
    new Stock(1,'ALBK.NS','Allahabad Bank','1575305','100871880704','medium'),
    new Stock(2,'ALCHEM.NS','Alchemist Limited','5379','9661350','high'),
    new Stock(3,'AMBUJACEM.NS','Ambuja Cements Limited','2471483','398118780928','medium'),
    new Stock(4,'AXISBANK.NS','Axis Bank Limited','8481674','2110295769088','low'),
    new Stock(5,'BAJAJ-AUTO.NS','Bajaj Auto Limited','747474','934972882944','low'),
    new Stock(6,'BALPHARMA.NS','Bal Pharma Limited','24770','598935808','high')
  ]; 

  constructor(private route:ActivatedRoute,
    private routedGuardService:RouteGuardService,
    private authenticationService : AuthenticationService,
    private router : Router) { }

  ngOnInit() {
    this.name = this.route.snapshot.params['username']
  }

  onClick(event) {
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    var value = idAttr.nodeValue;

    this.riskButtonValue = value;
  }

  saveStocks(stock)
  {
    if(this.authenticationService.isUserLoggedIn()) {
      console.log("Stock Saved => ",stock);
    } else {
      //pop-up => You are not logged in!
      console.log("Please Login first");
      this.router.navigate(['login']);
    }
  }

}