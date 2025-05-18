import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";

export const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Add error state

  const fetchProduct = async (productId) => {
    try {
      setLoading(true);
      setError(null); // Reset any previous errors

      const res = await fetch(`/api/products/id:${productId}`);
      
      // Check if the response is ok
      if (!res.ok) {
        throw new Error(`Error: ${res.statusText}`);
      }

      const data = await res.json();
      setProduct(data); // Update product state
    } catch (err) {
      console.error("Failed to fetch product:", err);
      setError(err.message); // Set error message
    } finally {
      setLoading(false); // Set loading to false after fetching
    }
  };

  useEffect(() => {
    fetchProduct(id); // Call the function when component mounts or `id` changes
  }, [id]);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center">Error: {error}</p>; // Show error if any
  if (!product) return <p className="text-center">Product not found.</p>;

  return (
    <div className="max-w-3xl min-h-screen p-4 mx-auto">
      <h1 className="mb-6 text-3xl font-bold text-center">{product.name}</h1>
      <ProductCard product={product} />
    </div>
  );
};
