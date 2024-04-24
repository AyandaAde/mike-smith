
"use client";

import styles from "./scss/main.module.scss";
import Header from "@/components/Header";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faInstagram, faFacebookF, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { scaleX, fadeUp, fadeDown, fadeIn } from "@/public/animations";
export default function Home() {
  return (
    <>
      <Header />
      <main className={`${styles.main_div}`}>
        <section className={`${styles.home}`}>
          <motion.h2
            initial="initial"
            animate="animate"
            variants={fadeUp}
            transition={{ duration: 1, delay: 1 }}
          > Hi! My Name Is</motion.h2>
          <motion.h1
            initial="initial"
            animate="animate"
            variants={scaleX}
            transition={{ duration: 1 }}
            className={`${styles.home__name}`}>
            Mike <span className={`${styles.home__name__last}`}>Smith</span>
          </motion.h1>
          <motion.h2
            initial="initial"
            animate="animate"
            variants={fadeDown}
            transition={{ duration: 1, delay: 1 }}
          >Web Developer, Designer & Programmer.</motion.h2>
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeIn}
            transition={{ duration: 1, delay: 2 }}
            className={`${styles.social_icons}`}
          >
            <Link href="#!">
              <FontAwesomeIcon className="w-4" icon={faXTwitter} />
            </Link>
            <Link href="#!">
              <FontAwesomeIcon className="w-4" icon={faInstagram} />
            </Link>
            <Link href="#!">
              <FontAwesomeIcon className="w-4" icon={faFacebookF} />
            </Link>
            <Link href="#!">
              <FontAwesomeIcon className="w-4" icon={faLinkedinIn} />
            </Link>
            <Link href="#!">
              <FontAwesomeIcon className="w-4" icon={faGithub} />
            </Link>
          </motion.div>
          <Footer />
        </section>
      </main>
    </>
  );
}
