interface Icategory {
  _id: string
  title: string,
  clicks: number,
  items: string
}

interface Iuser {
  _id: string,
  name: string,
  email: string,
  password: string,
  cart: {
    items?: Array<{ product: any; quantity: number }>,
    totalPrice: number
  }
}

interface Iproduct {
  name: string,
  price: number,
  clicks: number,
  specifications: [
    color: string,
    size: string,
    weight: number
  ]
  category: string,
}