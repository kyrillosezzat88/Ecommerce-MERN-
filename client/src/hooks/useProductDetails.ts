import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetProductDetails } from "@store/products/productsSlice";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useProductDetails = () => {
  const { productId } = useParams();
  const { productDetails, loading, error } = useAppSelector(
    (state) => state.products
  );
  const dispatch = useAppDispatch();
  const [selectedQuantity, setSelectedQuantity] = useState<number>(1);
  const [activeTab, setActiveTab] = useState("Description");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  useEffect(() => {
    //check if product id changed or not
    if (Number(productId) !== Number(productDetails?.id)) {
      dispatch(actGetProductDetails(productId as string));
    }
  }, [dispatch, productDetails?.id, productId]);

  const tabHandler = useCallback((tab: string) => {
    setActiveTab(tab);
  }, []);
  const ratingData = [
    { rate: 5, percentage: 60 },
    { rate: 4, percentage: 25 },
    { rate: 3, percentage: 10 },
    { rate: 2, percentage: 3 },
    { rate: 1, percentage: 2 },
  ];

  return {
    productDetails,
    loading,
    error,
    selectedQuantity,
    setSelectedQuantity,
    activeTab,
    tabHandler,
    ratingData,
  };
};

export default useProductDetails;
