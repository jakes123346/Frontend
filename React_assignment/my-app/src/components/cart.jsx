import React , {useState} from 'react'

function Cart (){
    const productItems = [
    { item:"Apple",
      price:15,
      quantity:0
    },
    {
      item: "Mangoes",
      price:20,
      quantity:0
    },
    {
      item:"Bananas",
      price:10,
      quantity:0
    }
  ]
  const [products, setProducts] = useState(productItems)

 const increaseQuantity = (index) => {
    const newProducts = [...products];
    newProducts[index].quantity += 1;
    setProducts(newProducts);
  };


  const decreaseQuantity = (index) => {
    const newProducts = [...products];
    if (newProducts[index].quantity > 0) {
      newProducts[index].quantity -= 1;
    }
    setProducts(newProducts);
  };

  const total = products.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );

return (
    <div className="container mt-4">
      <h3 className="mb-4 text-center">Shopping Cart</h3>

      <div className="row fw-bold border-bottom pb-2 mb-2">
        <div className="col-3">Item</div>
        <div className="col-3">Price</div>
        <div className="col-3">Quantity</div>
        <div className="col-3">Total</div>
      </div>

      {products.map((p, index) => (
        <div className="row align-items-center mb-3" key={index}>
          <div className="col-3">{p.item}</div>
          <div className="col-3">₹{p.price}</div>
          <div className="col-3 d-flex align-items-center">
            <button
              className="btn btn-sm btn-outline-danger me-2"
              onClick={() => decreaseQuantity(index)}
            >
              -
            </button>
            <span>{p.quantity}</span>
            <button
              className="btn btn-sm btn-outline-success ms-2"
              onClick={() => increaseQuantity(index)}
            >
              +
            </button>
          </div>
          <div className="col-3">₹{p.price * p.quantity}</div>
        </div>
      ))}

      <div className="row border-top pt-3 mt-3">
        <div className="col-9 text-end fw-bold">Grand Total:</div>
        <div className="col-3 fw-bold">₹{total}</div>
      </div>
    </div>
  );
}

export default Cart;