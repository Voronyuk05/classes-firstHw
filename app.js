//#2
class User {
    constructor(name,age,followers) {
        this.name = name
        this.age = age
        this.followers = followers
    }
    getInfo() {
        console.log(`User ${this.name} is ${this.age} years old and has ${this.followers} followers`)
    }
}

const mango = new User('Mango', 2,20);
mango.getInfo();
  
const poly = new User('Poly',3,17);
poly.getInfo();



//#3
class Storage {
    constructor(items) {
        this.items = items
    }
    getItems() {
        return this.items;
    }
    addItem(_item) {
        this.items.push(_item);
    }
    removeItem(_item) {
        const index = this.items.indexOf(_item);
        if (index !== -1) {
          this.items.splice(index, 1);
        }
    }    
}

const storage = new Storage([
    'Нанітоіди',
    'Пролонгер',
    'Залізні жупи',
    'Антигравітатор',
  ]);
  
const items = storage.getItems();
console.log(items);
  
storage.addItem('Дроїд');
console.log(storage.items);
  
storage.removeItem('Пролонгер');
console.log(storage.items); 



//#4
class StringBuilder {
    constructor(value) {
        this._value = value
    }
    get value() {
        return this._value;
    }
    append(str) {
        this._value = this.value + str
    }
    prepend(str) {
        this._value = str + this.value 
    }
    pad(str) {
        this._value = str + this.value + str
    }

}

const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value);

builder.prepend('^');
console.log(builder.value);

builder.pad('=');
console.log(builder.value);