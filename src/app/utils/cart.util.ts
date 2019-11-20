import { Cart } from '../models/cart.model';
import { CartItem } from '../models/cart-item.model';
import { providerDef } from '@angular/core/src/view';

export class CartUtil {
    public static get(): Cart {
        const data = localStorage.getItem('petshopcart');

        if (!data) {
            return new Cart();
        } else {
            return JSON.parse(data);
        }
    }

    public static add(id: string, product: string, quantity: number, price: number, image: string){
        const cart = this.get();

        const item = new CartItem(id, product, quantity, price, image);

        cart.items.push(item);

        localStorage.setItem('petshopcart', JSON.stringify(cart));
    }

    public static update(cart: Cart) {
        localStorage.setItem('petshopcart', JSON.stringify(cart));
    }

    public static clear(){
        localStorage.removeItem('petshopcart');
    }
}
