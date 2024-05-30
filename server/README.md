endpoints list what to send and what to return

req:  GET /allProducts 
res: [products…]

req: POST /signUp body: {email:””, password: “”}
res: success or failed

req: POST /login body: {email:””, password: “”}
res: {message: “success or failed”, token: “when success”}

req GET /user/:id params: user id
res: {user info…}

req: GET /category/:id params: category id
res: [products…]

req: GET /product/:id params: product id
res: {product…}

req: GET /allCategories
res: [allCategories…]

req: POST /addProduct body: {userid:””, productid: “”}
res: success or failed

req: GET /topFiveCategories 
res: [categories…]

req: GET /topFiveProducts 
res: [products…]


all the types:

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
  _id: string,
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



