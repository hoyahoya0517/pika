"use client";

import { useState } from "react";
import styles from "./Menu.module.css";
import { VscClose } from "react-icons/vsc";
import { motion } from "motion/react";

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      {!isMenuOpen ? (
        <motion.div
          whileHover={{
            scale: 0.9,
            transition: { duration: 0.3, type: "spring", ease: "easeInOut" },
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
  );
}
