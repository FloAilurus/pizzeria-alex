import { Component, OnInit, Type } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item.model';
import { Pizza } from 'src/app/models/pizza.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  listPizza = [
    {
      pizza: {
        id: 1,
        nom: 'hawaïenne',
        prix: 10,
        img: 'assets/img/hawai.jpg'
      },
      qttVoulue: 1
    },
    {
      pizza: {
        id: 2,
        nom: '4 saisons',
        prix: 12,
        img: 'assets/img/4sais.jpg'
      },
      qttVoulue: 1
    },
    {
      pizza: {
        id: 3,
        nom: 'margarita',
        prix: 8,
        img: 'assets/img/marga.jpg'
      },
      qttVoulue: 1
    }
  ]

  panier: CartItem[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  isConnected(){
    return sessionStorage.getItem("connectedUser") != undefined;
  }

  calculateTotal(){

    let sum = 0;
    this.panier.forEach( item => sum += item.pizza.prix * item.qtt );
    return sum;

  }

  addToCart( toAdd: Pizza, qtt: number ){
    
    let existingPizza = this.panier.filter( item => item.pizza.id == toAdd.id )[0];

    if( existingPizza )
      existingPizza.qtt += qtt;
    else
      this.panier.push( 
        { 
          pizza: toAdd, 
          qtt: qtt, 
          qttASupprimer: 0 
        } 
      );
  }

  deleteFromCart( item: CartItem ){

    item.qtt -= item.qttASupprimer;
    item.qttASupprimer = 0;

    if( item.qtt <= 0 ){
      const index = this.panier.indexOf(item);
      this.panier.splice(index, 1);
    }

  }

  confirmOrder(){
    this.panier = [];
  }

}
