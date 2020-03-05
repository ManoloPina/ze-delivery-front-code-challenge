import React, { useState, useEffect } from "react";
import { Category } from "types/Category";
import axios from "axios";
import { API } from "constants/index";

type Hook = () => [Category[], boolean, boolean];

export const useCategories: Hook = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      let res = await axios.post(API, {
        query: `query allCategoriesSearch {
          allCategory{
            title
            id
          }
        }  
      `
      });
      setCategories(res.data.data.allCategory);
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return [categories, loading, error];
};
