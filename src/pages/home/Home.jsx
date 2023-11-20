import React, { useEffect, useState } from "react";
import CardComponent from "../../components/common/card/CardComponent";
import PlaceholderComponent from "../../components/common/PlaceholderComponent";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState({
    name: "",
    message: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Reredering...");
    setLoading(true);
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleClickCard = (item) => {
    navigate("/detail", { state: item });
  };

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {loading &&
        [1, 2, 3, 4, 5, 6, 8, 9, 10].map((index, item) => (
          <PlaceholderComponent key={index} />
        ))}
      {!loading &&
        products.map((item, index) => (
          <CardComponent
            title={item.title}
            price={item.price}
            image={item.images[0]}
            onClick={() => {
              handleClickCard(item);
            }}
            key={index}
          />
        ))}
    </div>
  );
}
