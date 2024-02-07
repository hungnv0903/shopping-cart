import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductAction } from "../../redux/actions/productsAction";
import { rootState } from "../../redux/types/model";
import ListProduct from "./ListProduct";
import newImage from "../../assets/imageUrl.json";
const Product = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductAction());
  }, []);

  const listProduct = useSelector((state: rootState) => state.productReducer);
  const newListProduct = listProduct.map((item:any, index:number) => ({
    ...item,
    imageUrl: newImage[index],
  }));

  console.log(newListProduct);
  return (
    <Fragment>
        <ListProduct listProduct={newListProduct}></ListProduct>
    </Fragment>
  );
};

export default Product;
