import React, { useEffect, useState } from "react";
import CardDetailComponent from "../../components/common/card/CardDetailComponent";
import { useLocation } from "react-router-dom";

export default function ProductDetail() {
  const [product, setProduct] = useState();
  const location = useLocation();
  useEffect(() => {
    if (location.state) {
      setProduct(location.state);
    }
  }, []);
  return (
    <>
      {product && (
        <CardDetailComponent
          title={product.title}
          description={product.description}
          image={product.images[0]}
        />
      )}
    </>
  );
}
