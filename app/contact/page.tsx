"use client";

import styles from "../scss/main.module.scss";
import Header from "@/components/Header";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faInstagram, faFacebookF, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import Footer from "@/components/Footer";

export default function Contact() {
    return (
        <>
            <Header />
            <main className={`${styles.main_div}`}>
                <section className={`${styles.contact}`}>
                    <h2>Contact Me..</h2>

                    <div className={`${styles.contact__list}`}>
                        <div className={`${styles.contact__email}`}>
                            <i className={`fa-solid fa-envelope`} /> Email
                            <div className={`${styles.orange_text}`}>msmith@email.com</div>
                        </div>
                        <div className={`${styles.contact__phone}`}>
                            <i className={`fa-solid fa-phone`} /> Phone
                            <div className={`${styles.orange_text}`}>+2341234567</div>
                        </div>
                        <div className={`${styles.contact__address}`}>
                            <i className={`fa-solid fa-location-dot`} /> Address
                            <div className={`${styles.orange_text}`}>123 Houston Rd. Zanzibar, TZ</div>
                        </div>
                    </div>
                    <div className={`${styles.social_icons}`}>
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
                    </div>
                    <Footer />
                </section>
            </main>
        </>
    );
}
