const PRODUCTS_LIST = [
  {
    id: 0,
    type: "single",
    name: "Single Product #1",
    price: 20,
    term: "day",
    duration: 2
  },
  {
    id: 1,
    type: "single",
    name: "Single Product #2",
    price: 28,
    term: "day",
    duration: 2
  },
  {
    id: 2,
    type: "single",
    name: "Single Product #3",
    price: 32,
    term: "day",
    duration: 2
  },
  {
    id: 3,
    type: "single",
    name: "Single Product #4",
    price: 45,
    term: "day",
    duration: 2
  },
  {
    id: 4,
    type: "single",
    name: "Single Product #5",
    price: 60,
    term: "day",
    duration: 2
  },
  {
    id: 5,
    type: "bundle",
    name: "Bundle Product #1",
    price: 50,
    term: "day",
    duration: 2,
    bundleItems: [
        {
            name: "Bundle Item #1",
            price: 28,
        },
        {
            name: "Bundle Item #2",
            price: 22,
        }
    ]
  },
  {
    id:6,
    type: "bundle",
    name: "Bundle Product #2",
    price: 20,
    term: "day",
    duration: 2,
    bundleItems: [
        {
            name: "Bundle Item #1",
            price: 11,
        },
        {
            name: "Bundle Item #2",
            price: 11,
        }
    ]
  },
  {
    id: 7,
    type: "single",
    name: "Single Product #6",
    price: 11,
    term: "day",
    duration: 2
  },
  {
    id: 8,
    type: "bundle",
    name: "Bundle Product #3",
    price: 80,
    term: "day",
    duration: 2,
    bundleItems: [
        {
            name: "Bundle Item #1",
            price: 33,
        },
        {
            name: "Bundle Item #2",
            price: 47,
        }
    ]
  },
  {
    id: 9,
    type: "single",
    name: "Single Product #7",
    price: 22,
    term: "day",
    duration: 2
  },
];

export { PRODUCTS_LIST };
