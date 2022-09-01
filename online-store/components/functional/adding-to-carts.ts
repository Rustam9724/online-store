import { guitars } from "../guitars";

export function addingToCart() {
    let cartItems = document.querySelector('.header__cart-items');
    let cart: string[] = [];
    addEventListener('click', function(event) {
        if (event.target !== null) {
            let target = (event.target as HTMLElement).closest('div.card');
            if (target) {
                if (!cart.includes(target.firstChild.textContent)) {
                    cart.push(target.firstChild.textContent);
                    cartItems.textContent = parseInt(cartItems.textContent) + 1 + ''; 
                    guitars.find(elem => elem.title === target.firstChild.textContent).isChecked = true;
                    target.classList.toggle('card-check');
                } else {
                    cart.splice(cart.indexOf(target.firstChild.textContent), 1);
                    cartItems.textContent = parseInt(cartItems.textContent) - 1 +'';  
                    guitars.find(elem => elem.title === target.firstChild.textContent).isChecked = true;
                    target.classList.toggle('card-check');
                }
            }
        }
    })
}