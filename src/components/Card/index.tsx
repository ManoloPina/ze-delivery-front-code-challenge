import React, { useState } from "react";
import * as S from "./index.styles";
import { Product } from "types/Product";
import { ButtonGroup } from "styles";
import ProductCart from "types/ProductCart";

interface Props {
  product: Product;
  maxWidth?: string | number;
  addProduct?: (product: ProductCart) => void;
  removeProduct?: (product: ProductCart) => void;
}

const Card: React.FC<Props> = ({
  product,
  maxWidth,
  addProduct,
  removeProduct,
  ...props
}) => {
  const {
    id,
    title,
    images: [{ url }] = [{ url: null }],
    productVariants: [{ price }]
  } = product;
  const [imageUrl, setImageUrl] = useState<string | null>(url);
  const [imageError, setImageError] = useState<boolean>(false);

  const onImageError = () => {
    if (!imageError) {
      setImageUrl("/assets/images/image_not_found.png");
      setImageError(true);
    }
  };

  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2
  });

  return (
    <S.CardContainer maxWidth={maxWidth}>
      {url && <S.Image src={imageUrl?.toString()} onError={onImageError} />}
      <S.Title>{title}</S.Title>
      <S.Price>{formatter.format(price)}</S.Price>
      <S.Actions>
        <ButtonGroup>
          <button onClick={addProduct as any}>+</button>
          <button onClick={removeProduct as any}>-</button>
        </ButtonGroup>
      </S.Actions>
    </S.CardContainer>
  );
};

export default Card;
