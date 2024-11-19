import Navbar from "./components/Navbar/Navbar";
import { Toaster } from "react-hot-toast";
import Hero from "./components/Hero/Hero";
import { HeroHighlight } from "./components/ui/HeroHighlight";
import { motion } from "framer-motion";
import "./index.css";
import AnimatedCursor from "react-animated-cursor";

const App = () => {
    return (
        <>
            <HeroHighlight>
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    animate={{
                        opacity: 1,
                        y: [20, -5, 0],
                    }}
                    transition={{
                        duration: 0.5,
                        ease: [0.4, 0.0, 0.2, 1],
                    }}
                    className="w-screen h-screen overflow-x-hidden overflow-y-scroll flex flex-col items-center"
                >
                    <AnimatedCursor innerSize={13} outerSize={35} innerScale={1} outerScale={1.2} />
                    <Navbar />
                    <Hero />
                    <Toaster position="top-center" />
                </motion.div>
            </HeroHighlight>
        </>
    );
};

export default App;
