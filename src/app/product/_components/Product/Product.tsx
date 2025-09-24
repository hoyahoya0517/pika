"use client";

import { productsData } from "@/app/_data/data";
import styles from "./Product.module.css";

export default function ProductPage({ id }: { id: string }) {
  const products = productsData;
  const product = products.find((product) => product.id === parseInt(id));
  return (
    <div className={styles.product}>
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.left}>
            <div className={styles.leftImg}>
              <img src={product?.image} alt={product?.name} />
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.rightMain}>
              <div className={styles.name}>
                <span>{product?.name}</span>
              </div>
              <div className={styles.price}>
                <span>{`KRW ${product?.price}`}</span>
              </div>
              <div className={styles.color}>
                <span>One Color</span>
              </div>
              <div className={styles.size}>
                <span>One Size</span>
              </div>
              <div className={styles.buy}>
                <span>BUY</span>
              </div>
              <div className={styles.detail}>
                <span>DETAIL</span>
              </div>
              <div className={styles.sizeGuide}>
                <span>SIZE GUIDE </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
