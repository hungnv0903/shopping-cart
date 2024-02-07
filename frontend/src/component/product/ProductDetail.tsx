import React, { Fragment, useEffect, useState } from "react";
import { IproductsItem } from "../../redux/types/model";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/productsAction";
import { toast } from "react-toastify";

const ProductDetail: React.FC<{ productProps: IproductsItem }> = ({
  productProps,
}) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState<number>(1);
  useEffect(() => {
    setQuantity(1);
  }, [productProps]);

  const handleChangeQuantity = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!isNaN(event.target.valueAsNumber)) {
      setQuantity(event.target.valueAsNumber);
    }
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    if (quantity < 99) {
      setQuantity(quantity + 1);
    }
  };

  const handleAddprodct = () => {
    const newAddproduct: any = {
      ...productProps,
      quantity: quantity,
    };
    dispatch(addToCart(newAddproduct));

    toast.success("Added successfully!!", {
      position: "bottom-right",
    });
  };
  return (
    <Fragment>
      <div className="col-6 m-auto">
        <div className="my-4">
          <img
            src={productProps.imageUrl}
            alt=""
            style={{ width: "100%", height: "350px" }}
          />
        </div>
      </div>
      <div className="m-4">
        <h2>{productProps.productName}</h2>
        <p>{productProps.description}</p>
        <div className="d-flex justify-content-between">
          <div
            className="input-group"
            style={{ width: "120px", cursor: "pointer" }}
          >
            <span className="input-group-text" onClick={handleDecrease}>
              -
            </span>
            <input
              type="text"
              className="form-control text-center "
              value={quantity}
              aria-label="Quantity"
              aria-describedby="decrement increment"
              onChange={handleChangeQuantity}
            />
            <span className="input-group-text" onClick={handleIncrease}>
              +
            </span>
          </div>
          <div className="d-flex align-items-center">
            <span className="fw-bold fs-4">${productProps.price}</span>
            <button
              type="button"
              className="btn btn-primary ms-4"
              onClick={handleAddprodct}
            >
              <i className="fa-solid fa-cart-shopping me-1"></i> Add to cart
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductDetail;
