class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class Transaction {
  constructor() {
    this.total = 0;
    this.products = []; // cart
  }

  addToCart(productObj, qty) {
    let dataTransaction = {
      product: productObj,
      qty: qty,
      total: productObj.price * qty,
    };

    this.products.push(dataTransaction); // insert to cart
  }

  showTotal() {
    for (let i = 0; i < this.products.length; i++) {
      this.total += this.products[i].total;
    }

    return this.total;
  }

  checkout() {
    let readableTransaction = this.products.map((item) => {
      return {
        total: item.total,
        product: item.product.name,
        qty: item.qty,
      };
    });

    for (let i = 0; i < this.products.length; i++) {
      this.total += this.products[i].total;
    }

    return {
      cart: readableTransaction,
      total: this.total,
    };
  }
}

let msiRTX3060 = new Product("mst RTX 3060", 9000000);
let iphone15 = new Product("iPhone 15", 20000000);

let transaction001 = new Transaction();

transaction001.addToCart(msiRTX3060, 3);
transaction001.addToCart(iphone15, 1);

// console.log(transaction001.products);

// console.log(transaction001.showTotal());

console.log(transaction001.checkout());

//
