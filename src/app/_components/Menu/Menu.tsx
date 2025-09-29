"use client";

import { useEffect, useState } from "react";
import styles from "./Menu.module.css";
import { VscClose } from "react-icons/vsc";
import { motion } from "motion/react";
import { usePathname, useRouter } from "next/navigation";

export default function Menu() {
  const [isFirstPage, setIsFirstPage] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  useEffect(() => {
    if (pathname === "/") {
      setIsFirstPage(true);
    } else {
      setIsFirstPage(false);
    }
  }, [pathname]);
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);
  return (
    <>
      {!isFirstPage && (
        <>
          {!isMenuOpen ? (
            <motion.div
              whileHover={{
                scale: 0.9,
                transition: {
                  duration: 0.3,
                  type: "spring",
                  ease: "easeInOut",
                },
              }}
              onClick={() => setIsMenuOpen(true)}
              className={styles.menu}
            ></motion.div>
          ) : (
            <div className={styles.menuClose}>
              <VscClose
                color="#000000"
                size={32}
                onClick={() => setIsMenuOpen(false)}
              />
            </div>
          )}

          {isMenuOpen && (
            <div className={styles.menuMain}>
              <span
                onClick={() => {
                  if (pathname === "/home") return;
                  router.push("/home");
                }}
              >
                HOME
              </span>
              <span>LOGIN</span>
              <span>CART</span>
              <span>FAQS</span>
              <span>SUBSCRIBE</span>
              <span>SHOPLIST</span>
              <span>CONTACT</span>
              <span>LOCATION</span>
            </div>
          )}
        </>
      )}
    </>
  );
}
