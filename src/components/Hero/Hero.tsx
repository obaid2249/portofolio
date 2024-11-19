import { useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import About from "./About";
import SkillsSection from "./SkillsSection";
import ProjectsSection from "./ProjectsSection";
import ContactMeSection from "./ContactMeSection";
import Resume from "@/components/Resume/Resume";
import Footer from "./Footer";
const Hero = () => {
    const [text] = useTypewriter({
        words: ["Mern Stack Developer", "Competitive Programmer"],
        loop: false,
    });

    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
            },
        },
    };

    return (
        <div className="flex flex-col my-5 gap-y-20 w-full h-full text-white items-center">
            <div id="about" className="w-full max-w-screen-lg px-4">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: false }} variants={sectionVariants}>
                    <section className="w-full">
                        <div>
                            <h1 className="text-4xl font-bold text-orange-300">Hi, I'm Obaid Mohammad.</h1>
                            <h1 className="sm:text-4xl text-2xl font-bold text-white py-6">
                                I am a{" "}
                                <span className="sm:text-3xl text-xl py-6 font-bold">
                                    <span className="text-[#FF0000]">{text}</span>
                                </span>
                            </h1>
                        </div>
                        <About />
                    </section>
                    <div className="flex sm:flex-row flex-col mt-12 my-8 items-center gap-3 justify-center">
                        <Resume />
                    </div>
                </motion.div>
            </div>
            <div id="skills" className="w-full max-w-screen-lg px-4">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: false }} variants={sectionVariants} transition={{ delay: 0.2 }}>
                    <section className="w-full">
                        <SkillsSection />
                    </section>
                </motion.div>
            </div>
            <div id="work" className="w-full max-w-screen-lg px-4">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: false }} variants={sectionVariants} transition={{ delay: 0.4 }}>
                    <section className="w-full">
                        <ProjectsSection />
                    </section>
                </motion.div>
            </div>
            <div id="contact" className="w-full max-w-screen-lg px-4">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: false }} variants={sectionVariants} transition={{ delay: 0.6 }}>
                    <section className="w-full">
                        <ContactMeSection />
                    </section>
                </motion.div>
            </div>
            <div className="w-full max-w-screen-lg px-4">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: false }} variants={sectionVariants} transition={{ delay: 0.6 }}>
                    <section className="w-full">
                        <Footer />
                    </section>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
