"use client";

import styles from "../scss/main.module.scss";
import Header from "@/components/Header";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faInstagram, faFacebookF, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import Footer from "@/components/Footer";


export default function About() {
    return (
        <>
            <Header />
            <main className={`${styles.main_div}`}>
                <section className={`${styles.about}`}>
                    <div className={`${styles.about__bio_image}`}>
                        <div className={`${styles.about__bio}`}>
                            <h2 className={`${styles.orange_text} text-xl`}>
                                BIO
                            </h2>
                            <p className="text-base">
                                I&apos;m Mike Smith, a passionate web developer, designer and programmer with a knack for crafting
                                beautiful  and functional digital experiences. I thrive on the challenge of taking your ideas and turning them into reality, whether
                                it&apos;s a stunning website, an intuitive user interface, or a powerful web application.
                            </p>
                        </div>
                    </div>

                    <div className={`${styles.jobs}`}>
                        <div className={`${styles.jobs__job}`}>
                            <h2 className={`${styles.orange_text}`}>
                                2017-current
                            </h2>
                            <h3>Google</h3>
                            <h6>Full Stack Developer</h6>
                            <p>During my tenure at Google, I&apos;ve had the incredible opportunity to contribute to some of the world&apos; most impactful web experiences.
                                Working alongside talented colleagues, I&apos;ve honed my skills in large-scale development, user-centered design and collaboration.
                            </p>
                        </div>
                        <div className={`${styles.jobs__job}`}>
                            <h2 className={`${styles.orange_text}`}>
                                2015-2017
                            </h2>
                            <h3>Microsoft</h3>
                            <h6>Frontend Developer</h6>
                            <p>During my time at microsoft, I contributed to some of the company&apos; most recognizable web experiences. This experience exposed me to industry best practices, large-scale project management, and the intricacies of working within a global tech giant.
                                This foundation equipped me with the technical expertise and problem-solving skills to tackle any web development challenge.
                            </p>
                        </div>
                        <div className={`${styles.jobs__job}`}>
                            <h2 className={`${styles.orange_text}`}>
                                2012-2015
                            </h2>
                            <h3>Web Design Co</h3>
                            <h6>Graphic Designer</h6>
                            <p>My creative journey began at Web Design Co., where I started off as a graphic designer. This experience instilled in me a strong foundation in visual communication,
                                allowing me to translate ideas into captivating designs. I honed my skills in crafting user interfaces (UIs) that are not only aesthetically pleasing but also intuitive and user-friendly.
                                The collaborative environment at Web Design Co. fostered my ability to understand client needs and translate them into impactful visuals, a skill that undoubtedly benefits me in my web development career today.
                            </p>
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
