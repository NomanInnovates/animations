import { pageAnimation } from "animation/index";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import "../styles/globals.css";
import 'swiper/css';

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={router.pathname}
        variants={pageAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
}

export default MyApp;
