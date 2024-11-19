import {  RiGithubLine, RiLinkedinFill } from "react-icons/ri";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Link } from "react-router-dom";
const icons = [
    { icon: <RiGithubLine size={28} color="violet" />, delay: 0, link: "https://github.com/obaid2249", name: "ObaidMohammad" },
    { icon: <RiLinkedinFill size={30} color="violet" />, delay: 0.5, link: "https://www.linkedin.com/in/obaid-mohammad-66429924b/", name: "ObaidMohammad" },
    // { icon: <RiDiscordLine size={30} color="violet" />, delay: 1.5, link: "https://discord.com/users/997531619105714297", name: "ObaidMohammad" },
];
const Footer = () => {
    return (
        <>
            <div className="flex p-6 flex-col items-center justify-center">
                <div className="flex gap-4 items-center justify-center m-2">
                    {icons.map((icon, key) => (
                        <TooltipProvider delayDuration={90} key={key}>
                            <Tooltip>
                                <TooltipTrigger>
                                    <Link to={icon.link} target="_blank">
                                        {icon.icon}
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent className="bg-purple-400">
                                    <p className="text-sm font-bold">{icon.name}</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    ))}
                </div>
                <h1 className="text-2xl text-blue-400 font-bold"> Made With &lt;3, Thank You</h1>
            </div>
        </>
    );
};
export default Footer;
