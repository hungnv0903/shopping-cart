import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ICheckout, IOrder, rootState } from "../../redux/types/model";
import {
  deteteProducCart,
  quantityDecrease,
  quantityIncrease,
  resetAction,
  sendProductAction,
} from "../../redux/actions/productsAction";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export function resultProdcutAddtoCart(arr: any) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i].quantity != 0 && arr[i].productId === arr[j].productId) {
        arr[i].quantity += arr[j].quantity;
        arr[j].quantity = 0;
      }
    }
    if (arr[i].quantity !== 0) {
      result.push(arr[i]);
    }
  }
  return result;
}

const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [listProductCart, setListProductCart] = useState<any[]>([]);
  const [subTotal, setSubTotal] = useState<number>(0);
  const [shpingCost, setShippingCost] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const productAddtoCart = useSelector(
    (state: rootState) => state.AddtoCartreducer
  );

  const responsePayOrder = useSelector(
    (state: rootState) => state.productSendDataReducer
  );

  useEffect(() => {
    if (responsePayOrder.success === true) {
      navigate("/products");
      dispatch(resetAction());
      setListProductCart([]);
      responsePayOrder.success = false;
    }
    console.log(responsePayOrder);
  }, [responsePayOrder]);

  useEffect(() => {
    setListProductCart(resultProdcutAddtoCart(productAddtoCart));
  }, [productAddtoCart]);

  useEffect(() => {
    const total = listProductCart.reduce(
      (sum: number, item: any) => sum + item.quantity * item.price,
      0
    );
    if (listProductCart.length !== 0) {
      setShippingCost(10);
    }
    setSubTotal(Math.round(total * 100) / 100);
  }, [listProductCart]);

  useEffect(() => {
    if (subTotal === 0) {
      setTotal(0);
      setShippingCost(0);
    } else {
      setTotal(Math.round((subTotal + shpingCost) * 100) / 100);
    }
  }, [subTotal]);

  const handleChangeQuantity = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };

  const handleCheckout = () => {
    const popup = confirm("Do you want to purchase ?");
    if (popup) {
      const productsInOrder: IOrder[] = listProductCart.map((item: any) => ({
        productId: item.productId,
        quantity: item.quantity,
      }));

      const sendData: ICheckout = {
        paySuccess: true,
        productsInOrder: productsInOrder,
      };
      dispatch(sendProductAction(sendData));

      toast.success("Thank your for purchased!!", {
        position: "bottom-right",
      });
    }
  };

  return (
    <div className="row my-4">
      <div className="col-10 m-auto">
        <div className="text-center py-3 rounded bg-light fw-bold">
          My Shopping Cart
        </div>
        <div className="my-4 d-flex justify-content-around">
          <div className="col-8">
            {listProductCart.length === 0 ? (
              <div className="col-12 text-center fw-bold mt-4">
                You have no products in cart
              </div>
            ) : (
              ""
            )}
            {listProductCart.map((item: any) => (
              <div
                key={item.productId}
                className="rounded bg-light d-flex mb-4"
              >
                <div className="p-4 col-2">
                  <img
                    src={item.imageUrl}
                    alt=""
                    style={{ width: "100%", height: "80px" }}
                  />
                </div>
                <div className="p-4 col-10">
                  <div>
                    <span className="fw-bold">{item.productName}</span>
                    <i
                      className="fa-solid fa-trash float-end text-danger"
                      onClick={() => dispatch(deteteProducCart(item))}
                    ></i>
                  </div>
                  <p>{item.description}</p>
                  <div className="d-flex justify-content-between">
                    <div
                      className="input-group"
                      style={{ width: "120px", cursor: "pointer" }}
                    >
                      <span
                        className="input-group-text"
                        onClick={() => dispatch(quantityDecrease(item))}
                      >
                        -
                      </span>
                      <input
                        type="text"
                        className="form-control text-center "
                        value={item.quantity}
                        aria-label="Quantity"
                        aria-describedby="decrement increment"
                        onChange={handleChangeQuantity}
                      />
                      <span
                        className="input-group-text"
                        onClick={() => dispatch(quantityIncrease(item))}
                      >
                        +
                      </span>
                    </div>
                    <div className="d-flex align-items-center">
                      <span className="fw-bold fs-4">
                        ${Math.round(item.price * item.quantity * 100) / 100}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-3">
            <div
              className="rounded bg-light p-2 mb-4"
              style={{ height: "181px" }}
            >
              <span className="fw-bold">Order Info</span>
              <div className="mt-3">
                <span>Subtotal:</span>
                <span className="float-end fw-bold">${subTotal}</span>
              </div>
              <div>
                <span>Shipping Cost:</span>
                <span className="float-end fw-bold">${shpingCost}</span>
              </div>
              <div className="mt-2">
                <span className="fw-bold fs-3">Total:</span>
                <span className="float-end fw-bold fs-3">${total}</span>
              </div>
            </div>
            <button
              type="button"
              className="btn btn-primary col-12 mb-4"
              onClick={handleCheckout}
              disabled={listProductCart.length === 0}
            >
              Checkout
            </button>
            <button
              type="button"
              className="btn btn-outline-info col-12"
              onClick={() => navigate("/products")}
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
