

const initialState = [
  {
    id: 1,
    name: "Iphone 11 Pro Max",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ-Dv5LGe47cxETtXhc1auHwYenBgNeTs16Mduq3au_7JXTZtxsvw0&usqp=CAc",
    description: "Sản phẩm của Apple",
    price: 27800000,
    inventory: 10,
    rating: 4,
  },
  {
    id: 2,
    name: "Samsung Galaxy S20 Ultra 5G",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTO8nVPLk6rllIXbmuoYBH6ZOrph2TY1sFn3Ri5LkiNzSw9-UfMlfHOHtoTW5I&usqp=CAc",
    description: "Sản phẩm của Samsung",
    price: 32990000,
    inventory: 10,
    rating: 3,
  },
  {
    id: 3,
    name: "Oppo Find X2 Pro",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS7j186zjGxCNIx4kClH01YIdoQVFUNzCLdTw&usqp=CAU",
    description: "Sản phẩm của Xiaomi",
    price: 25900000,
    inventory: 10,
    rating: 5,
  },
];

const productList = (state = initialState, action) => {
  switch (action.type) {
    default:
      return [...state];
  }
};

export default productList;
