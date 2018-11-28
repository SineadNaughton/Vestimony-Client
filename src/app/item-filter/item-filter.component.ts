import { Component, OnInit, Input } from '@angular/core';
import { ItemDataService } from '../services/vestimony-api/item-data.service';
import { Item } from '../services/models/item';
import { ItemBrand } from '../services/models/ItemBrand';
import { ItemCategory } from '../services/models/ItemCategory';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';

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
  itemListinfo: string;
  brandSelection:ItemBrand;
  catSelection: ItemCategory;
  
  topshop: ItemBrand = new ItemBrand('Topshop', 'topshop', "topshop-1-logo-png-transparent.png", false);
  asos: ItemBrand = new ItemBrand('asos', 'asos', "asos-png-10-student-discount-480.png", false);
  newlook: ItemBrand = new ItemBrand('New Look', 'new look', "new-look_0.png", false);
  dorothyperkins: ItemBrand = new ItemBrand('Dorothy Perkins', 'dorothy perkins', "dorothy-perkins-logo.jpg", false)
  @Input() addVestimonial: boolean;
  @Input() postId: number;

  jeans: ItemCategory = new ItemCategory('Jeans', 'jeans', "jeans.jpg", false);
  outerwear: ItemCategory = new ItemCategory('Outerwear', 'coat', "coat.jpg", false);
  top: ItemCategory = new ItemCategory('Tops', 'top', "top.jpg", false);
  dress: ItemCategory = new ItemCategory('Dresses', 'dress', "dress.jpg", false);
  knitwear: ItemCategory = new ItemCategory('Knitwear', 'knitwear', "knitwear.jpg", false);
  skirt: ItemCategory = new ItemCategory('Skirts', 'skirt', "skirt.jpg", false);
  trouser: ItemCategory = new ItemCategory('Trousers', 'trouser', "trouser.jpg", false);
  bag: ItemCategory = new ItemCategory('Bags', 'bag', "bag.jpg", false);
  shoe: ItemCategory = new ItemCategory('Shoes', 'shoe', "heel.jpeg", false);
  jumpsuit: ItemCategory = new ItemCategory('Jumpsuits and Playsuits', 'jumpsuit', "jumpsuit.jpg", false);
  accessory: ItemCategory = new ItemCategory('Accessories', 'accessory', "hat.jpg", false);

  brands1: ItemBrand[] = [
    this.topshop,
    this.asos,
    this.newlook,
    this.dorothyperkins,
    this.asos,
    this.topshop,
    this.asos,
  ]
  categories1: ItemCategory[] = [
    this.jeans,
    this.outerwear,
    this.top,
    this.dress,
    this.knitwear,
    this.skirt,
    this.trouser,
    this.jumpsuit,
    this.bag,
    this.shoe,
    this.accessory
  ]

  constructor(private itemDataService: ItemDataService) {}

  async ngOnInit() {
    this.items = await this.itemDataService.getNewest();
    this.itemListinfo = "Newly Added"

  }

  onSelectBrand(itemBrand: ItemBrand) {    
    this.brandSelection = itemBrand;
    if(this.brandSelection.selected===true){
      this.brandSelection.selected = false;
      this.brandSelection.name="";
    }
    else{
      this.brands1.forEach(b => b.selected = false);
      this.brandSelection.selected = true;
    }
  }

  onSelectCat(itemCat: ItemCategory) {
    this.catSelection = itemCat;
    if(this.catSelection.selected===true){
      this.catSelection.selected = false;
      this.catSelection.name="";
    }
    else{
      this.categories1.forEach(b => b.selected = false);
    this.catSelection.selected = true;
    }
  }


  async submitFilter() {
    const filteredBrands = this.brands1.filter(b => b.selected === true);
    const filteredBrand = filteredBrands.length > 0 ? filteredBrands[0] : null;
    this.brand = filteredBrand === null ? "" :filteredBrand.value;

    const filteredCats = this.categories1.filter(c => c.selected === true);
    const filteredCat = filteredCats.length > 0 ? filteredCats[0] : null;
    this.category = filteredCat === null ? "" :filteredCat.value;

    this.searchName = this.searchName === null ? "" : this.searchName;

    this.items = await this.itemDataService.getFilteredItemData(this.brand, this.category, this.searchName);
    this.itemListinfo = "Results"
   
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
