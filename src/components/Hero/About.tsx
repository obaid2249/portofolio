import { Button } from "@/components/ui/moving-border";
import Socials from "../Socials/Socials";
// import { Clipboard } from "lucide-react";
// import handleCopy from "./HandleCopy";
import Clock from "./Clock";
const About = () => {
    return (
        <div className="grid sm:grid-cols-1 items-center justify-center md:grid-cols-2 gap-8">
            <div className="text-white flex md:flex-row flex-col items-center justify-center gap-8 sm:min-w-[450px] md:min-w-[900px] text-xl">
                <div className="min-w-[200px] mx-20 items-center justify-center flex flex-col">
                    <div className="w-full m-2">
                        <Button className="rounded-full">
                            <img
                                src="https://i.ibb.co/KxpwdSW/obaid.jpg"
                                width="400"
                                height="400"
                                alt="Obaid"
                                className="p-3 rounded-full w-48 h-48 object-cover shadow-lg hover:shadow-xl transition-shadow"
                            />
                        </Button>
                    </div>
                    <div className="flex w-full text-blue-300">
                        <Clock />
                    </div>
                    {/* <div className="w-52 h-12 mt-5 rounded-lg bg-slate-900 flex items-center justify-between pr-6">
                        <span className="bg-blue-300 rounded-l-lg h-full w-8 font-bold" />
                        npx nihal
                        <button onClick={handleCopy}>
                            <Clipboard />
                        </button>
                    </div> */}
                    <Socials />
                </div>
                <h2 className="font-condensed">
                    A passionate web developer and competitive programmer. I have a strong background in Mern-stack development, with expertise in modern web technologies and problem-solving. I'm
                    constantly learning and exploring new technologies to improve my skills and deliver high-quality solutions. In my free time, I enjoy participating in coding challenges and
                    competitions to sharpen my problem-solving abilities. Feel free to explore my portfolio and get in touch if you'd like to collaborate on a project or discuss my qualifications
                    further.
                </h2>
            </div>
        </div>
    );
};

export default About;
