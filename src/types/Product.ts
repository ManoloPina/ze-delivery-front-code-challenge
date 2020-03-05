interface Variant {
  price?: number;
}

interface Url {
  url?: string;
}

export interface Product {
  id: string;
  title: string;
  price: number;
  images: Url[];
  productVariants: Variant[];
}
