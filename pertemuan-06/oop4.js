class Product {
  productName = "";
  price = 0;
  constructor() {
    this.productName;
    this.price;
  }

  get getProductName() {
    return this.productName;
  }

  set setProductName(productName) {
    this.productName = productName;
  }
}

class Book extends Product {
  constructor() {
    super();
    this.author;
  }
  get getAuthor() {
    return this.author;
  }

  set setAuthor(author) {
    this.author = author;
  }
}

class Electronic extends Product {
  constructor() {
    this.watt;
  }
}

const lordOfTheRing = new Book();

lordOfTheRing.setAuthor = "J.J Tolkien";
console.log(lordOfTheRing.getAuthor);

lordOfTheRing.setProductName = "Lord Of the Ring";
console.log(lordOfTheRing);

console.log(lordOfTheRing instanceof Book);
console.log(lordOfTheRing instanceof Product);
console.log(lordOfTheRing instanceof Electronic);
