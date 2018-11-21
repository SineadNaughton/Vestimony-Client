import { Component, OnInit, Input } from '@angular/core';
import { ItemDataService } from '../services/vestimony-api/item-data.service';
import { Item } from '../services/models/item';
import { ItemBrand } from '../services/models/ItemBrand';
import { ItemCategory } from '../services/models/ItemCategory';

@Component({
  selector: 'app-item-filter',
  templateUrl: './item-filter.component.html',
  styleUrls: ['./item-filter.component.scss']
})
export class ItemFilterComponent implements OnInit {
  searchName: string = "";
  brand: string;
  category: string;
  items: Item[] = [];
  index: number;
  
  topshop: ItemBrand = new ItemBrand('Topshop', 'topshop', "topshop-1-logo-png-transparent.png", false);
  asos: ItemBrand = new ItemBrand('asos', 'asos', "asos-png-10-student-discount-480.png", false);
  @Input() addVestimonial: boolean;
  @Input() postId: number;

  jeans: ItemCategory = new ItemCategory('Jeans', 'jeans', "jeans.jpg", false);
  outerwear: ItemCategory = new ItemCategory('Outerwear', 'coat', "Coat.png", false);
  top: ItemCategory = new ItemCategory('Top', 'top', "top.jpg", false);

  brands1: ItemBrand[] = [
    this.topshop,
    this.asos
  ]
  categories1: ItemCategory[] = [
    this.jeans,
    this.outerwear,
    this.top
  ]

  constructor(private itemDataService: ItemDataService) {}

  async ngOnInit() {
    this.items = await this.itemDataService.getNewest();

  }

  onSelectBrand(itemBrand: ItemBrand) {    
    const selection = itemBrand;
    this.brands1.forEach(b => b.selected = false);
    selection.selected = true;
  }

  onSelectCat(itemCat: ItemCategory) {
    const selection = itemCat;
    this.categories1.forEach(b => b.selected = false);
    selection.selected = true;
  }


  async submitFilter() {
    const filteredBrands = this.brands1.filter(b => b.selected === true);
    const filteredBrand = filteredBrands.length > 0 ? filteredBrands[0] : null;
    this.brand = filteredBrand != null ? filteredBrand.value : null;

    const filteredCats = this.categories1.filter(c => c.selected === true);
    const filteredCat = filteredCats.length > 0 ? filteredCats[0] : null;
    this.category = filteredCat != null ? filteredCat.value : null;

    this.searchName = this.searchName === null ? "" : this.searchName;

    this.items = await this.itemDataService.getFilteredItemData(this.brand, this.category, this.searchName);
  }

  ngDoCheck() {

  }

  sortPriceDesc() {
    this.items = this.items.sort((a, b): number => {
      if (a.price < b.price) return -1;
      if (a.price > b.price) return 1;
      return 0;
    })
    this.ngDoCheck();
  }

  sortPriceAsc() {
    this.items = this.items.sort((a, b): number => {
      if (a.price > b.price) return -1;
      if (a.price < b.price) return 1;
      return 0;
    })
  }

  sortNewest() {
    this.items = this.items.sort((a, b): number => {
      if (a.createdDateTime < b.createdDateTime) return -1;
      if (a.createdDateTime > b.createdDateTime) return 1;
      return 0;
    })
  }


}
