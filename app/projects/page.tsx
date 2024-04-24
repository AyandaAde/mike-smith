"use client";

import styles from "../scss/main.module.scss";
import Header from "@/components/Header";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faInstagram, faFacebookF, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import Footer from "@/components/Footer";
import Image from "next/image";



export default function Projects() {
    return (
        <>
            <Header />
            <main className={`${styles.main_div}`}>
                <section className={`${styles.projects}`}>
                    <div className={`${styles.projects__bio_image}`}>
                        <h1 className={`${styles.orange_text} text-xl`}>My Projects</h1>
                    </div>
                    <div className={`${styles.projects__items}`}>
                        <div className={`${styles.projects__item}`}>
                            <Image
                                src="/images/project-1.jpg"
                                alt="my first project"
                                width={1920}
                                height={1281}
                            />
                            <div className={`${styles.projects__btns}`}>
                                <Link href="#!">
                                    <i className="fas fa-eye" />
                                    Preview
                                </Link>
                                <Link href="#!">
                                    <i className="fa-brands fa-github" />
                                    Github
                                </Link>
                            </div>
                        </div>
                        <div className={`${styles.projects__item}`}>
                            <Image
                                src="/images/project-2.jpg"
                                alt="my second project"
                                width={1920}
                                height={1281}
                            />
                            <div className={`${styles.projects__btns}`}>
                                <Link href="#!">
                                    <i className="fa-solid fa-eye" />
                                    Preview
                                </Link>
                                <Link href="#!">
                                    <i className="fa-brands fa-github" />
                                    Github
                                </Link>
                            </div>
                        </div>
                        <div className={`${styles.projects__item}`}>
                            <Image
                                src="/images/project-3.jpg"
                                alt="my third project"
                                width={960}
                                height={640.5}
                            />
                            <div className={`${styles.projects__btns}`}>
                                <Link href="#!">
                                    <i className="fa-solid fa-eye" />
                                    Preview
                                </Link>
                                <Link href="#!">
                                    <i className="fa-brands fa-github"></i>
                                    Github
                                </Link>
                            </div>
                        </div>
                        <div className={`${styles.projects__item}`}>
                            <Image
                                src="/images/project-4.jpg"
                                alt="my fourth project"
                                width={1920}
                                height={1281}
                            />
                            <div className={`${styles.projects__btns}`}>
                                <Link href="#!">
                                    <i className="fas fa-eye" />
                                    Preview
                                </Link>
                                <Link href="#!">
                                    <i className="fa-brands fa-github" />
                                    Github
                                </Link>
                            </div>
                        </div>
                        <div className={`${styles.projects__item}`}>
                            <Image
                                src="/images/project-5.jpg"
                                alt="my fifth project"
                                width={1920}
                                height={1281}
                            />
                            <div className={`${styles.projects__btns}`}>
                                <Link href="#!">
                                    <i className="fas fa-eye" />
                                    Preview
                                </Link>
                                <Link href="#!">
                                    <i className="fa-brands fa-github" />
                                    Github
                                </Link>
                            </div>
                        </div>
                        <div className={`${styles.projects__item}`}>
                            <Image
                                src="/images/project-6.jpg"
                                alt="my sixth project"
                                width={1920}
                                height={1281}
                            />
                            <div className={`${styles.projects__btns}`}>
                                <Link href="#!">
                                    <i className="fas fa-eye" />
                                    Preview
                                </Link>
                                <Link href="#!">
                                    <i className="fa-brands fa-github" />
                                    Github
                                </Link>
                            </div>
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
