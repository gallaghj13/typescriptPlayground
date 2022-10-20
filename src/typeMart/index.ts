import products from './products';
const productName: string = 'shirt';
let shipping: number;
let taxPercent: number;
let taxTotal: number;
let total: number;
const shippingAddress: string = '575 Broadway, New York City, New York';

const product = products.filter(product => product.name === productName)[0];

if(product.preOrder === true) {
  console.log(`We will notify you when your order is on its way!`);
}

if(Number(product.price) >= 25) {
  shipping = 0;
  console.log(`Free Shipping`);
} else {
  shipping = 5;
}

if(shippingAddress.match('New York')) {
  taxPercent = 0.1;
} else {
  taxPercent = .05;
}

taxTotal = Number(product.price) * taxPercent;
total = Number(product.price) + taxTotal + shipping;

console.log(`
Product:  ${product.name}
Address:  ${shippingAddress}
Price:    $${product.price}
Tax:      $${taxTotal.toFixed(2)}
Shipping: $${shipping.toFixed(2)}
Total:    $${total.toFixed(2)}
`);