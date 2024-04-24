
import { motion } from "framer-motion";
import { fadeIn } from "@/public/animations";
export default function Footer() {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <motion.footer
            initial="initial"
            animate="animate"
            variants={fadeIn}
            transition={{ duration: 1, delay: 2 }}
        >&copy; Copyright {year} Ayanda Kinyambo</motion.footer>
    )
}