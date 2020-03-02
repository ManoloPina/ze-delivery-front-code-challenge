import React, { useState, useEffect } from "react";
import axios from "axios";
import { API } from "constants/index";

type Hook = (id: string, search?: string, categoryId?: string) => any[];

export const useProducts: Hook = (id, search, categoryId) => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const fetchProducts = async (
    id: string,
    search: string = "",
    categoryId: string | null = null
  ) => {
    try {
      setLoading(true);
      if (id) {
        let res = await axios.post(API, {
          query: `query poc($id: ID!, $categoryId: Int, $search: String){
            poc(id: $id) {
              id
              products(categoryId: $categoryId, search: $search) {
                id
                title
                rgb
                images {
                  url
                }
                productVariants {
                  availableDate
                  productVariantId
                  price
                  inventoryItemId
                  shortDescription
                  title
                  published
                  volume
                  volumeUnit
                  description
                  subtitle
                  components {
                    id
                    productVariantId
                    productVariant {
                      id
                      title
                      description
                      shortDescription
                    }
                  }
                }
              }
            }
          }
        `,
          variables: {
            id,
            search,
            categoryId
          }
        });
        const products = res.data.data.poc.products;

        setProducts(products);
      }

      setLoading(false);
    } catch (error) {
      console.error("Fetch products errors:", error);
      setError(true);
    }
  };

  useEffect(() => {
    fetchProducts(id, search, categoryId);
  }, [id, search, categoryId]);

  return products;
};
