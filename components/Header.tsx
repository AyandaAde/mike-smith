"use client";

import Link from "next/link"
import DarkModeButton from "./DarkModeButton";
import styles from "@/app/scss/header.module.scss";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { fadeIn } from "@/public/animations";

export default function Header() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    function handleClick() {
        setOpen(!open);
    }
    return (
        <motion.header
            initial="initial"
            animate="animate"
            variants={fadeIn}
            transition={{ duration: 1, delay: 2 }}
        >
            <div className={`${styles.menu__btn}`}>
                <span
                    onClick={handleClick}
                    className={`${styles.menu__btn__burger} ${open && styles.open}`}></span>
            </div>
            <nav className={`${styles.nav} ${open && styles.open}`}>
                <ul className={`${styles.menu_nav} ${open && styles.open} flex flex-row items-center gap-2`}>
                    <li className={`${styles.menu_nav__item} ${open && styles.open} ${pathname === "/" && styles.active}`}>
                        <Link
                            href="/"
                            className={`${styles.menu_nav__link}`}
                        >
                            Home
                        </Link>
                    </li>
                    <li className={`${styles.menu_nav__item} ${open && styles.open} ${pathname === "/about" && styles.active}`}>
                        <Link
                            href="/about"
                            className={`${styles.menu_nav__link}`}
                        >
                            About Me
                        </Link>
                    </li>
                    <li className={`${styles.menu_nav__item} ${open && styles.open} ${pathname === "/projects" && styles.active}`}>
                        <Link
                            href="/projects"
                            className={`${styles.menu_nav__link}`}
                        >
                            Projects
                        </Link>
                    </li>
                    <li className={`${styles.menu_nav__item} ${open && styles.open} ${pathname === "/contact" && styles.active}`}>
                        <Link
                            href="/contact"
                            className={`${styles.menu_nav__link}`}
                        >
                            Contact Me
                        </Link>
                    </li>
                </ul>
            </nav>
        </motion.header>
    )
}