import styles from './style.module.css';

const ProductCard = (props: any) => {
  return (
    <div className="p-[10px] bg-white relative rounded-[15px] min-h-[200px] pb-[30px] shadow-lg">
      <div className="w-full min-h-[200px] max-h-[250px] mb-4">
        <img
          src="/assets/images/product/photo_2022-09-28_21-58-51.jpg"
          className="w-full h-full object-cover"
          alt=""
        />
      </div>
      <h3 className={styles.product_name}>
        iPhone 13 Pro Max 128GB | Chính hãng VN/A
      </h3>
      <div className={styles.box_price}></div>
      <p></p>
    </div>
  );
};

export default ProductCard;
