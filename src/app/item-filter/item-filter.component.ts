import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-filter',
  templateUrl: './item-filter.component.html',
  styleUrls: ['./item-filter.component.scss']
})
export class ItemFilterComponent implements OnInit {

  brands = [
    {name:'Topshop', value:'Topshop', checked:false},
    {name:'ASOS', value:'ASOS', checked:false},
    {name:'NewLook', value:'NewLook', checked:false}
  ]

  categories = [
    {name:'Top', value:'top', checked:false},
    {name:'Coat', value:'coat', checked:false},
    {name:'Trouser', value:'trouser', checked:false}
  ]

  constructor() { 

   
    
  }

  ngOnInit() {
  }

}
