import { Eye, Github } from "lucide-react";
const TechStack = [
    ["ci ci-html","ci ci-css","ci ci-js","ci ci-react","ci ci-expressjs bg-white rounded-full","ci ci-nodejs","ci ci-mongodb","ci ci-ts"],
    ["ci ci-html","ci ci-css","ci ci-js","ci ci-react"],
    ["ci ci-html","ci ci-css","ci ci-js","ci ci-ts","ci ci-react"]
];

const Projects = () => {
    const projects = [
        {
            title: "CarrerConnect",
            description: "A resource Management Website Where Users can Add/Remove resource/resumes",
            link: "https://careerconnect-neon.vercel.app/",
            code: "https://github.com/NithinAmbati/Mini_Project",
            image:"https://i.ibb.co/GJpThdy/career-Connect.png",
        },
        {
            title: "portfolio",
            description: "My Porfolio Website crafted  with aceternity ui and tailwind and framer motion and shadcn",
            link: "https://obaidmohammad.netlify.app/",
            code: "https://github.com/obaid2249/portofolio",
            image:"https://i.ibb.co/zbKtZR5/obaidd.png",
        },
    ];

    return (
        <div className="py-12 grid items-start gap-8 sm:max-w-2xl sm:mx-auto mx-[10%] sm:grid-cols-1 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
            {projects.map((item, key) => (
                <div key={key} className="bg-gray-950 no-underline relative shadow-2xl shadow-zinc-900 rounded-lg p-px text-xs  font-semibold leading-6  text-white inline-block">
                <span className="absolute inset-0 overflow-hidden rounded-lg">
                    <span className="absolute inset-0 rounded-lg bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 hover:opacity-100" />
                </span>

                    <div className="grid gap-1 p-4">
                        <button className="px-6 py-2 bg-slate-900 text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
                          <h3 className="text-lg uppercase rounded-full flex items-center justify-center font-bold text-white">{item.title}</h3>
                        </button>
                        <img className="m-1" src={item.image} />
                        <p className="text-[1.3em] text-white py-2">{item.description}</p>
                        <div className="w-full h-4 text-white">
                            TechStack Used: {TechStack[key].map((stack, i) => (
                                <i key={i} className={`${stack} text-3xl text-white`}></i>
                            ))}
                        </div>
                        <div className="flex gap-2 mt-2 z-10">
                            <a
                                href={item.link}
                                className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 bg-gray-900 px-4 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Eye className="mr-2 h-4 w-4" />
                                Live Demo
                            </a>
                            <a
                                href={item.code}
                                className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 bg-gray-900 px-4 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Github className="mr-2 h-4 w-4" />
                                GitHub
                            </a>
                        </div>
                        </div>  
                      <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />

                </div>
            ))}
        </div>
    );
};

export default Projects;
