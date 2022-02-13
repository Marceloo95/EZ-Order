export interface Props {
  productName: string;
}

const Product = ({ productName }: Props) => {
  return (
    <div>
      <div>{productName}</div>
    </div>
  );
};

export default Product;
