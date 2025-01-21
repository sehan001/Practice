const products = [
  {
    id: 1,
    name: "Laptop",
    category: "Electronics",
    price: 1200,
    inStock: true,
  },
  {
    id: 2,
    name: "Smartphone",
    category: "Electronics",
    price: 800,
    inStock: false,
  },
  { id: 3, name: "Table", category: "Furniture", price: 150, inStock: true },
  { id: 4, name: "Chair", category: "Furniture", price: 85, inStock: false },
  {
    id: 5,
    name: "Headphones",
    category: "Accessories",
    price: 50,
    inStock: true,
  },
  { id: 6, name: "Book", category: "Stationery", price: 15, inStock: true },
  { id: 7, name: "Pen", category: "Stationery", price: 5, inStock: false },
  {
    id: 8,
    name: "Backpack",
    category: "Accessories",
    price: 60,
    inStock: true,
  },
  {
    id: 9,
    name: "Monitor",
    category: "Electronics",
    price: 300,
    inStock: true,
  },
  {
    id: 10,
    name: "Desk Lamp",
    category: "Furniture",
    price: 40,
    inStock: false,
  },
];
// const a = products.filter(({ id, name, category, price, inStock }) => id == 10);
// console.log(name);
const productName = products.filter(({ id }) => id < 10)[0]?.name;
console.log(productName);
