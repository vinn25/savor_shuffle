import elipse1 from "./image/ellipse_1.jpg";
import elipse2 from "./image/ellipse_2.jpg";
import elipse3 from "./image/ellipse_3.png";

import burger from "./image/burger.jpg";
import tacos from "./image/tacos.jpg";
import dessert from "./image/dessert.jpg";
import drink from "./image/drink.jpg";

import fat_salad from "./image/fat_salad.jpg";
import veg_salad from "./image/veg_salad.jpg";
import egg_salad from "./image/egg_salad.jpg";

export const typesOfServices = [
  {
    logo: elipse1,
    title: "Fast Delivery",
    subtitle:
      "Our service ensures swift delivery, ensuring your orders reach you promptly.",
  },
  {
    logo: elipse2,
    title: "Easy to order",
    subtitle: "Seamless Ordering: Simple, Quick, and Hassle-Free",
  },
  {
    logo: elipse3,
    title: "Quality Food",
    subtitle: "Our website ensures top-notch quality in every dish we serve.",
  },
];

export const categories = [
  { logo: burger, type: "Main Dish", total: "(86 dishes)" },
  { logo: tacos, type: "Break Fast", total: "(12 break fast)" },
  { logo: dessert, type: "Dessert", total: "(48 dessert)" },
  { logo: drink, type: "Browse All", total: "(255 items)" },
];

export const specialDishes = [
  {
    logo: fat_salad,
    title: "Fattoush salad",
    subtitle: "Description of the item",
    price: "24.00",
    rating: "4.9",
  },
  {
    logo: veg_salad,
    title: "Vegetable salad",
    subtitle: "Description of the item",
    price: "26.00",
    rating: "4.6",
  },
  {
    logo: egg_salad,
    title: "Egg vegi salad",
    subtitle: "Description of the item",
    price: "23.00",
    rating: "4.5",
  },
];
