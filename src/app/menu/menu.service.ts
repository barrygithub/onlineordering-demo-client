import { HttpClient} from '@angular/common/http';

import { Injectable } from '@angular/core';

import { MenuModel } from './menu.model';

@Injectable()
export class MenuService {

  constructor(private http: HttpClient) {}

  //private dishes: MenuModel[] = [];

 /** private dishes: MenuModel[] = [
    new MenuModel(
      'Combo Platter (Regular)',
      'Chicken and Gyro platter served with rice, salad and The Halal Guy\'s famous hot and white sauce.',
      'https://cdn.pixabay.com/photo/2016/03/05/23/02/barbecue-1239434_960_720.jpg',
      10,
      {'id': 1,
        'title': 'Choose of Spice Level',
        'description': 'Select 1',
        'choices': [
          {'name': 'mild', 'price': 1},
          {'name': 'medium', 'price': 2},
          {'name': 'spicy', 'price': 3}
        ],
      'required': 1},
      {'id': 1, 'title': 'Special Instruction', 'description': 'Add Note...', 'text': ''}
    ),
    new MenuModel(
      'Falafel Platter (Regular)',
      'Falafel platter served with rice, salad and The Halal Guy\'s famous hot and white sauce.',
      'https://images.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg?cs=srgb&dl=close-up-cooking-dinner-46239.jpg&fm=jpg',
      12.49,
      {'id': 1,
        'title': 'Choose of Spice Level',
        'description': 'Select 1',
        'choices': [
          {'name': 'mild', 'price': 1},
          {'name': 'medium', 'price': 1},
          {'name': 'spicy', 'price': 1}
        ],
        'required': 1},
      {'id': 1, 'title': 'Special Instruction', 'description': 'Add Note...', 'text': ''}
    ),
    new MenuModel(
      'Baklava',
      'Combination Fried Rice',
      'https://images.pexels.com/photos/128388/pexels-photo-128388.jpeg?cs=srgb&dl=appetizer-boiled-eggs-bowl-128388.jpg&fm=jpg',
      9.99,
      {'id': 1,
        'title': 'Choose of Spice Level',
        'description': 'Select 1',
        'choices': [
          {'name': 'mild', 'price': 1},
          {'name': 'medium', 'price': 1},
          {'name': 'spicy', 'price': 1}
        ],
        'required': 1},
      {'id': 1, 'title': 'Special Instruction', 'description': 'Add Note...', 'text': ''}
    ),
    new MenuModel(
      'Hummus',
      'Chickpeas Dip. Includes 1 pita.',
      'https://images.pexels.com/photos/33406/pexels-photo.jpg?cs=srgb&dl=chicken-delicious-dinner-33406.jpg&fm=jpg',
      8.99,
      {'id': 1,
        'title': 'Choose of Spice Level',
        'description': 'Select 1',
        'choices': [
          {'name': 'mild', 'price': 1},
          {'name': 'medium', 'price': 1},
          {'name': 'spicy', 'price': 1}
        ],
        'required': 1},
      {'id': 1, 'title': 'Special Instruction', 'description': 'Add Note...', 'text': ''}
    ),
    new MenuModel(
      'Fries',
      'Crinkle cut fries',
      'https://images.pexels.com/photos/221149/pexels-photo-221149.jpeg?cs=srgb&dl=cooking-cuisine-delicious-221149.jpg&fm=jpg',
      12.39,
      {'id': 1,
        'title': 'Choose of Spice Level',
        'description': 'Select 1',
        'choices': [
          {'name': 'mild', 'price': 1},
          {'name': 'medium', 'price': 1},
          {'name': 'spicy', 'price': 1}
        ],
        'required': 1},
      {'id': 1, 'title': 'Special Instruction', 'description': 'Add Note...', 'text': ''}
    ),
    new MenuModel(
      'Gyro Sandwich',
      'Served with your choice of toppings and The Halal Guy\'s famous hot and white sauce',
      'https://images.pexels.com/photos/209431/pexels-photo-209431.jpeg?cs=srgb&dl=blur-breakfast-close-up-209431.jpg&fm=jpg',
      11.37,
      {'id': 1,
        'title': 'Choose of Spice Level',
        'description': 'Select 1',
        'choices': [
          {'name': 'mild', 'price': 1},
          {'name': 'medium', 'price': 1},
          {'name': 'spicy', 'price': 1}
        ],
        'required': 1},
      {'id': 1, 'title': 'Special Instruction', 'description': 'Add Note...', 'text': ''}
    )
  ]; **/

  // getDishes() {
  //   return this.dishes.slice(); //The slice() method returns the selected elements in an array, as a new array object.
  // }

  getDishes() {
   return this.http.get<{message: string, data: MenuModel[]}>('http://localhost:3000/api/posts');
  }
}
