import React, { useEffect, useContext } from "react";
import * as S from "./index.styles";
import { RouteChildrenProps, useHistory } from "react-router-dom";
import { useProducts } from "shared/customHooks";
import { Product } from "types/Product";
import Card from "components/Card";
import { Container } from "styles";
import { useCategories } from "shared/customHooks/useCategories";
import Categories from "components/Categories";
import Cart from "components/Cart";
import { observer } from "mobx-react-lite";
import { autorun } from "mobx";
import { cartStoreContext } from "stores/CartStore";
import { Cart as CartType } from "types/Cart";

interface Props extends RouteChildrenProps<Params> {}

const Products: React.FC<Props> = observer(({ match, ...props }) => {
  const history = useHistory();
  const pocId = match?.params.pocId;
  const [products, loading, error, fetchProducts] = useProducts(pocId);
  const [categories, loadingCategories, errorCategories] = useCategories();
  const cartStore = useContext<CartType>(cartStoreContext);

  const handleSelectedCategory = (id: string) => {
    history.push({
      pathname: `/products/${pocId}`,
      search: `categoryId=${id}`
    });
    fetchProducts(pocId, "", id);
  };

  autorun(() => {
    console.log({ cartStore });
  });

  return (
    <Container>
      <h2>Products</h2>
      <Categories
        categories={categories}
        handleSelected={handleSelectedCategory}
      />
      <Cart products={cartStore.products} />
      {loading ? (
        <span>Loading...</span>
      ) : products.length ? (
        <S.ProductsList>
          {products.map((product: Product) => (
            <Card
              key={product.id}
              product={product}
              addProduct={() =>
                cartStore.addProduct({ ...product, itemQty: 1 })
              }
              removeProduct={() => {
                const { id } = product;
                if (cartStore.products.length > 0) {
                  const itemQty = cartStore.products.find(
                    product => product.id === id
                  )?.itemQty;

                  cartStore.removeProduct({
                    ...product,
                    itemQty: itemQty ? itemQty : 0
                  });
                }
              }}
            />
          ))}
        </S.ProductsList>
      ) : (
        <span>Any item was found</span>
      )}
    </Container>
  );
});

export default Products;
