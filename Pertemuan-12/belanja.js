const priceList = [
  { name: "RTX 3060", price: 6000000 },
  { name: "Rode Mic 1500", price: 1500000 },
  { name: "Keyboard Logitech K120 ", price: 150000 },
  { name: "RAM 16 GB ", price: 800000 },
];

let money = 10000000;

function shopping(money, productPrice, callback) {
  let change = money - productPrice.price;
  console.log(" money : ", money);
  console.log(" Product : ", productPrice);
  callback(change);
}

function shopping2(money, product) {
  return new Promise((resolve, reject) => {
    let change = money - product.price;
    console.log(" money : ", money);
    console.log(" Product : ", product);
    resolve(change);
  });
}

// shopping2(money, priceList[0])
//   .then((change) => {
//     console.log(" money left : ", change);
//     console.log(" ================================= ");
//     return shopping2(change, priceList[1]);
//   })
//   .then((change) => {
//     console.log(" money left : ", change);
//     console.log(" ================================= ");
//     return shopping2(change, priceList[3]);
//   });

// shopping(money, priceList[0], (change) => {
//   console.log(" money left : ", change);
//   console.log(" ================================= ");
//   shopping(change, priceList[1], (change) => {
//     console.log(" money left : ", change);
//     console.log(" ================================= ");
//     shopping(change, priceList[2], (change) => {
//       console.log(" money left : ", change);
//       console.log(" ================================= ");
//       shopping(change, priceList[1], (change) => {
//         console.log(" money left : ", change);
//         console.log(" ================================= ");
//         shopping(change, priceList[3], (change) => {
//           console.log(" money left : ", change);
//           console.log(" ================================= ");
//           shopping(change, priceList[3], (change) => {
//             console.log(" money left : ", change);
//             console.log(" ================================= ");
//             shopping(change, priceList[3], (change) => {
//               console.log(" money left : ", change);
//               console.log(" ================================= ");
//               shopping(change, priceList[3], (change) => {
//                 console.log(" money left : ", change);
//                 console.log(" ================================= ");
//                 shopping(change, priceList[3], (change) => {
//                   console.log(" money left : ", change);
//                   console.log(" ================================= ");
//                 });
//               });
//             });
//           });
//         });
//       });
//     });
//   });
// });

module.exports = {
  shopping,
  priceList,
};
