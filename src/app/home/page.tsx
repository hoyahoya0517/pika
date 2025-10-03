"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";
import { AnimatePresence, motion, useInView } from "motion/react";
import { productsData } from "../_data/data";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const products = productsData;
  const [isHandOpen, setIsHandOpen] = useState(false);
  const [isEarOpen, setIsEarOpen] = useState(false);
  const [isNeckOpen, setIsNeckOpen] = useState(false);
  const [isDragMeOpen, setIsDragMeOpen] = useState(true);
  const [isGoodOpen, setIsGoodOpen] = useState(true);
  const [isWhamOpen, setIsWhamOpen] = useState(true);
  // const [isKeepOpen, setIsKeepOpen] = useState(true);
  // const [isWowOpen, setIsWowOpen] = useState(true);
  // const [isNeedNewEarRingOpen, setIsNeedNewEarRingOpen] = useState(true);
  const [isNeedNewNecklaceOpen, setIsNeedNewNecklaceOpen] = useState(true);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const ringObserverRef = useRef<HTMLDivElement>(null);
  const ringObserverInView = useInView(ringObserverRef);
  const earRingObserverRef = useRef<HTMLDivElement>(null);
  const earRingObserverInView = useInView(earRingObserverRef);
  const necklaceObserverRef = useRef<HTMLDivElement>(null);
  const necklaceObserverInView = useInView(necklaceObserverRef);
  useEffect(() => {
    if (ringObserverInView && earRingObserverInView) {
      setIsHandOpen(false);
      setIsEarOpen(true);
      setIsNeckOpen(false);
    } else if (ringObserverInView && necklaceObserverInView) {
      setIsHandOpen(false);
      setIsEarOpen(false);
      setIsNeckOpen(true);
    } else if (necklaceObserverInView) {
      setIsHandOpen(false);
      setIsEarOpen(false);
      setIsNeckOpen(true);
    } else if (earRingObserverInView) {
      setIsHandOpen(false);
      setIsEarOpen(true);
      setIsNeckOpen(false);
    } else if (ringObserverInView) {
      setIsHandOpen(true);
      setIsEarOpen(false);
      setIsNeckOpen(false);
    }
  }, [ringObserverInView, earRingObserverInView, necklaceObserverInView]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setWidth(window?.innerWidth);
    }
    if (typeof window !== "undefined") {
      window.addEventListener("resize", () => {
        if (typeof window !== "undefined") {
          setWidth(window?.innerWidth);
        }
      });
    }
  }, []);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHeight(window?.innerHeight);
    }
    if (typeof window !== "undefined") {
      window.addEventListener("resize", () => {
        if (typeof window !== "undefined") {
          setHeight(window?.innerHeight);
        }
      });
    }
  }, []);
  return (
    <div className={styles.page}>
      <div className={styles.main}>
        <div className={styles.ring}>
          <div className={styles.ringObserver} ref={ringObserverRef}></div>
          <div className={styles.ringProductContainer}>
            {products
              .filter((product) => product.category === "ring")
              .map((ring, index) => {
                if (index === 2) {
                  return (
                    <div className={styles.ringProduct} key={ring.id}>
                      <div className={styles.ringProductImg}>
                        <motion.img
                          src={ring.image}
                          drag
                          onDragStart={() => {
                            setIsDragMeOpen(false);
                          }}
                          whileDrag={{ scale: 1.2 }}
                          dragMomentum={false}
                        />
                        {isDragMeOpen && (
                          <div
                            className={styles.dragMe}
                            onClick={() => {
                              setIsDragMeOpen(false);
                            }}
                          >
                            <img src="https://res.cloudinary.com/hoyahoya/image/upload/v1758204411/pika/dragme_dtadqk.png" />
                          </div>
                        )}
                      </div>
                      <div className={styles.ringProductDetail}>
                        <div className={styles.ringProductDetailName}>
                          <span
                            onClick={() => {
                              router.push(`/product/${ring.id}`);
                            }}
                          >
                            {ring.name}
                          </span>
                        </div>
                        <div className={styles.ringProductDetailPrice}>
                          <span
                            onClick={() => {
                              router.push(`/product/${ring.id}`);
                            }}
                          >{`KRW ${ring.price}`}</span>
                        </div>
                      </div>
                    </div>
                  );
                } else if (index === 9) {
                  return (
                    <div className={styles.ringProduct} key={ring.id}>
                      <div className={styles.ringProductImg}>
                        <motion.img
                          src={ring.image}
                          drag
                          onDragStart={() => {
                            setIsGoodOpen(false);
                          }}
                          whileDrag={{ scale: 1.2 }}
                          dragMomentum={false}
                        />
                        {isGoodOpen && (
                          <div
                            className={styles.good}
                            onClick={() => setIsGoodOpen(false)}
                          >
                            <img src="https://res.cloudinary.com/hoyahoya/image/upload/v1758027895/pika/good_l9ubzu.png" />
                          </div>
                        )}
                      </div>
                      <div className={styles.ringProductDetail}>
                        <div className={styles.ringProductDetailName}>
                          <span
                            onClick={() => {
                              router.push(`/product/${ring.id}`);
                            }}
                          >
                            {ring.name}
                          </span>
                        </div>
                        <div className={styles.ringProductDetailPrice}>
                          <span
                            onClick={() => {
                              router.push(`/product/${ring.id}`);
                            }}
                          >{`KRW ${ring.price}`}</span>
                        </div>
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div className={styles.ringProduct} key={ring.id}>
                      <div className={styles.ringProductImg}>
                        <motion.img
                          src={ring.image}
                          drag
                          whileDrag={{ scale: 1.2 }}
                          dragMomentum={false}
                        />
                      </div>
                      <div className={styles.ringProductDetail}>
                        <div className={styles.ringProductDetailName}>
                          <span
                            onClick={() => {
                              router.push(`/product/${ring.id}`);
                            }}
                          >
                            {ring.name}
                          </span>
                        </div>
                        <div className={styles.ringProductDetailPrice}>
                          <span
                            onClick={() => {
                              router.push(`/product/${ring.id}`);
                            }}
                          >{`KRW ${ring.price}`}</span>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
          </div>
          <div className={styles.hand}>
            <AnimatePresence>
              {isHandOpen && (
                <motion.div
                  initial={{ transform: "translateX(-50%) translateY(1000px)" }}
                  animate={{ transform: "translateX(-50%) translateY(0px)" }}
                  exit={{ transform: "translateX(-50%) translateY(1000px)" }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  className={styles.handImg}
                  style={
                    width > 768 && height < 737
                      ? {
                          bottom: `calc(${height}px - 737px)`,
                        }
                      : {}
                  }
                >
                  <img src="https://res.cloudinary.com/hoyahoya/image/upload/v1757675478/pika/pikahand_jttmam.png" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        <div className={styles.earRing}>
          <div
            className={styles.earRingObserver}
            ref={earRingObserverRef}
          ></div>
          <div className={styles.ear}>
            <AnimatePresence>
              {isEarOpen && (
                <motion.div
                  initial={{ x: -1000 }}
                  animate={{ x: 0 }}
                  exit={{ x: -1000 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  className={styles.earImgContainer}
                >
                  <div className={styles.earImg}>
                    {width > 768 && height > 430 ? (
                      <img src="https://res.cloudinary.com/hoyahoya/image/upload/v1757935267/pika/ear_fkwpbf.png" />
                    ) : (
                      <img src="https://res.cloudinary.com/hoyahoya/image/upload/v1758691515/pika/ear2_xgshgj.png" />
                    )}
                  </div>
                  {/* {isNeedNewEarRingOpen && (
                    <div
                      className={styles.needNewEarRing}
                      onClick={() => setIsNeedNewEarRingOpen(false)}
                    >
                      <img src="https://res.cloudinary.com/hoyahoya/image/upload/v1758041742/pika/needNewEarRing_samibn.png" />
                    </div>
                  )} */}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className={styles.earRingProductContainer}>
            {products
              .filter((product) => product.category === "earRing")
              .map((earRing, index) => {
                if (index === 6) {
                  return (
                    <div className={styles.earRingProduct} key={earRing.id}>
                      <div className={styles.earRingProductImg}>
                        <motion.img
                          src={earRing.image}
                          drag
                          onDragStart={() => {
                            setIsWhamOpen(false);
                          }}
                          whileDrag={{ scale: 1.2 }}
                          dragMomentum={false}
                        />
                        {isWhamOpen && (
                          <div
                            className={styles.wham}
                            onClick={() => setIsWhamOpen(false)}
                          >
                            <img src="https://res.cloudinary.com/hoyahoya/image/upload/v1758041743/pika/wham2_rmuq2s.png" />
                          </div>
                        )}
                      </div>
                      <div className={styles.earRingProductDetail}>
                        <div className={styles.earRingProductDetailName}>
                          <span
                            onClick={() => {
                              router.push(`/product/${earRing.id}`);
                            }}
                          >
                            {earRing.name}
                          </span>
                        </div>
                        <div className={styles.earRingProductDetailPrice}>
                          <span
                            onClick={() => {
                              router.push(`/product/${earRing.id}`);
                            }}
                          >{`KRW ${earRing.price}`}</span>
                        </div>
                      </div>
                    </div>
                  );
                }
                return (
                  <div className={styles.earRingProduct} key={earRing.id}>
                    <div className={styles.earRingProductImg}>
                      <motion.img
                        src={earRing.image}
                        drag
                        whileDrag={{ scale: 1.2 }}
                        dragMomentum={false}
                      />
                    </div>
                    <div className={styles.earRingProductDetail}>
                      <div className={styles.earRingProductDetailName}>
                        <span
                          onClick={() => {
                            router.push(`/product/${earRing.id}`);
                          }}
                        >
                          {earRing.name}
                        </span>
                      </div>
                      <div className={styles.earRingProductDetailPrice}>
                        <span
                          onClick={() => {
                            router.push(`/product/${earRing.id}`);
                          }}
                        >{`KRW ${earRing.price}`}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className={styles.necklace}>
          <div
            className={styles.necklaceObserver}
            ref={necklaceObserverRef}
          ></div>
          <div className={styles.neck}>
            <AnimatePresence>
              {isNeckOpen && (
                <>
                  <motion.div
                    initial={{ transform: "translateX(-2000px)" }}
                    animate={{ transform: "translateX(-50%)" }}
                    exit={{ transform: "translateX(-2000px)" }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className={styles.neckImg}
                    style={
                      width > 768 && height > 430
                        ? {
                            bottom: `calc(${height}px - 737px)`,
                          }
                        : {}
                    }
                  >
                    <img src="https://res.cloudinary.com/hoyahoya/image/upload/v1758255605/pika/neck_vevnjt.png" />
                  </motion.div>
                  <motion.div
                    className={styles.neck2Main}
                    initial={{ transform: "translateX(-2000px)" }}
                    animate={{ transform: "translateX(-50%)" }}
                    exit={{ transform: "translateX(-2000px)" }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    style={
                      width > 768 && height > 430
                        ? {
                            bottom: `calc(${height}px - 737px + 300px)`,
                          }
                        : {}
                    }
                  >
                    {isNeedNewNecklaceOpen && (
                      <div
                        className={styles.needNewNecklaceContainer}
                        onClick={() => setIsNeedNewNecklaceOpen(false)}
                      >
                        <div className={styles.needNewNecklace}>
                          <img src="https://res.cloudinary.com/hoyahoya/image/upload/v1758392808/pika/needNew_ftwzmz.png" />
                        </div>
                      </div>
                    )}
                    <motion.div className={styles.neckImg2}>
                      <img src="https://res.cloudinary.com/hoyahoya/image/upload/v1758255605/pika/neck_vevnjt.png" />
                    </motion.div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
          <div className={styles.necklaceProductContainer}>
            {products
              .filter((product) => product.category === "necklace")
              .map((necklace, index) => {
                if (index === 3) {
                  return (
                    <div className={styles.necklaceProduct} key={necklace.id}>
                      <div className={styles.necklaceProductImg}>
                        <motion.img
                          src={necklace.image}
                          drag
                          // onDragStart={() => {
                          //   setIsKeepOpen(false);
                          // }}
                          whileDrag={{ scale: 1.2 }}
                          dragMomentum={false}
                        />
                        {/* {isKeepOpen && (
                        <div
                          className={styles.keep}
                          onClick={() => setIsKeepOpen(false)}
                        >
                          <img src="https://res.cloudinary.com/hoyahoya/image/upload/v1758265214/pika/keep_lt9zrs.png" />
                        </div>
                      )} */}
                      </div>
                      <div className={styles.necklaceProductDetail}>
                        <div className={styles.necklaceProductDetailName}>
                          <span
                            onClick={() => {
                              router.push(`/product/${necklace.id}`);
                            }}
                          >
                            {necklace.name}
                          </span>
                        </div>
                        <div className={styles.necklaceProductDetailPrice}>
                          <span
                            onClick={() => {
                              router.push(`/product/${necklace.id}`);
                            }}
                          >{`KRW ${necklace.price}`}</span>
                        </div>
                      </div>
                    </div>
                  );
                } else if (index === 8) {
                  return (
                    <div className={styles.necklaceProduct} key={necklace.id}>
                      <div className={styles.necklaceProductImg}>
                        <motion.img
                          src={necklace.image}
                          drag
                          // onDragStart={() => {
                          //   setIsWowOpen(false);
                          // }}
                          whileDrag={{ scale: 1.2 }}
                          dragMomentum={false}
                        />
                        {/* {isWowOpen && (
                          <div
                            className={styles.wow}
                            onClick={() => setIsWowOpen(false)}
                          >
                            <img src="https://res.cloudinary.com/hoyahoya/image/upload/v1758264620/pika/wow_bpehbg.png" />
                          </div>
                        )} */}
                      </div>
                      <div className={styles.necklaceProductDetail}>
                        <div className={styles.necklaceProductDetailName}>
                          <span
                            onClick={() => {
                              router.push(`/product/${necklace.id}`);
                            }}
                          >
                            {necklace.name}
                          </span>
                        </div>
                        <div className={styles.necklaceProductDetailPrice}>
                          <span
                            onClick={() => {
                              router.push(`/product/${necklace.id}`);
                            }}
                          >{`KRW ${necklace.price}`}</span>
                        </div>
                      </div>
                    </div>
                  );
                }
                return (
                  <div className={styles.necklaceProduct} key={necklace.id}>
                    <div className={styles.necklaceProductImg}>
                      <motion.img
                        src={necklace.image}
                        drag
                        whileDrag={{ scale: 1.2 }}
                        dragMomentum={false}
                      />
                    </div>
                    <div className={styles.necklaceProductDetail}>
                      <div className={styles.necklaceProductDetailName}>
                        <span
                          onClick={() => {
                            router.push(`/product/${necklace.id}`);
                          }}
                        >
                          {necklace.name}
                        </span>
                      </div>
                      <div className={styles.necklaceProductDetailPrice}>
                        <span
                          onClick={() => {
                            router.push(`/product/${necklace.id}`);
                          }}
                        >{`KRW ${necklace.price}`}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
