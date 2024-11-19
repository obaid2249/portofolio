import Projects from "@/components/Projects/Projects";

const ProjectsSection = () => (
	<div className="text-left space-y-6">
		<h1 className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-bold font-2xl text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
			PROJECTS
		</h1>
		<div className="text-white text-2xl font-bold">Check out some of the projects I've worked on.</div>
		<Projects />
	</div>
);

export default ProjectsSection;
