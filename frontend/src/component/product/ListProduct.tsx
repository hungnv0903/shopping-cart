import React, { Fragment, useState } from "react";
import { IListProduct, IproductsItem } from "../../redux/types/model";
import ProductDetail from "./ProductDetail";

const ListProduct = ({ listProduct }: IListProduct) => {
  const [selectedProduct, setSelectedProduct] = useState<
    IproductsItem | undefined
  >();

  const handleProductDetail = (productDetail: IproductsItem) => {
    setSelectedProduct(productDetail);
  };

  //   console.log(selectedProduct);
  return (
    <Fragment>
      <div className="row">
        <div className="col-7">
          {selectedProduct && (
            <ProductDetail productProps={selectedProduct}></ProductDetail>
          )}
        </div>
        <div className="col-5 overflow-scroll" style={{ height: "100vh" }}>
          {listProduct.map((item: IproductsItem, index: number) => (
            <div key={index} className="bg-light m-2" style={{ cursor:'pointer' }}>
              <div className="d-flex">
                <div className="col-4 p-3">
                  <img
                    src={item.imageUrl}
                    alt=""
                    style={{ width: "100px", height: "100px" }}
                  />
                </div>
                <div className="col-8 p-3">
                  <h5 onClick={() => handleProductDetail(item)}>
                    {item.productName}
                  </h5>
                  <p>{item.description}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <h5>${item.price}</h5>
                    <button
                      className="mb-1 text-primary"
                      onClick={() => handleProductDetail(item)}
                    >
                      Detail
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default ListProduct;
