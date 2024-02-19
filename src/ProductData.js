const videoCards = [
  {
    name: "NVIDIA GeForce RTX 3080",
    price: 799.99,
    quantity: 0,
    isSoldout: true,
    picture: "https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ampere/rtx-3080/images/design/geforce-rtx-3080-4-960.jpg",
  },
  {
    name: "AMD Radeon RX 6700 XT",
    price: 499.99,
    quantity: 15,
    picture: "https://www.amd.com/system/files/2021-03/700302-amd-radeon-6700xt-1260x709.jpg",
  },
  {
    name: "NVIDIA GeForce GTX 1660 Super",
    price: 249.99,
    quantity: 8,
    picture: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.gigabyte.com%2Fph%2FGraphics-Card%2FGV-N166SGAMING-OC-6GD&psig=AOvVaw0bbIviptjaWOUvCtrJIRX4&ust=1707800761142000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCLi4_d-DpYQDFQAAAAAdAAAAABAD",
  },
  {
    name: "AMD Radeon RX 6800",
    price: 649.99,
    quantity: 12,
    picture: "url/to/rx6800.jpg",
  },
  {
    name: "NVIDIA GeForce RTX 3070",
    price: 599.99,
    quantity: 18,
    picture: "url/to/rtx3070.jpg",
  },
  {
    name: "AMD Radeon RX 6600 XT",
    price: 349.99,
    quantity: 20,
    picture: "url/to/rx6600xt.jpg",
  },
  {
    name: "NVIDIA GeForce GTX 1650",
    price: 149.99,
    quantity: 25,
    picture: "url/to/gtx1650.jpg",
  },
  {
    name: "AMD Radeon RX 6900 XT",
    price: 999.99,
    quantity: 5,
    picture: "url/to/rx6900xt.jpg",
  },
  {
    name: "NVIDIA GeForce RTX 3060",
    price: 299.99,
    quantity: 15,
    picture: "url/to/rtx3060.jpg",
  },
  {
    name: "AMD Radeon RX 5500 XT",
    price: 199.99,
    quantity: 10,
    picture: "url/to/rx5500xt.jpg",
  },
  // Add more video cards as needed
];

// Accessing information for the first video card
console.log("Name:", videoCards[0].name);
console.log("Price:", videoCards[0].price);
console.log("Quantity:", videoCards[0].quantity);
console.log("Picture:", videoCards[0].picture);

export default videoCards;