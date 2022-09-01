import { cards } from "./components/sections/cards/cards";
import { addingToCart } from "./components/functional/adding-to-carts";
import { sort } from "./components/functional/sort";
import { guitars } from "./components/guitars";
import { doFilters } from "./components/functional/filters";
import { resetFilters } from "./components/functional/filters";


cards(guitars);
addingToCart();
sort();
doFilters();
resetFilters();