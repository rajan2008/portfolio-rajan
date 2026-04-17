import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  openai: {
    title: "OpenAI",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />, // Placeholder
  },
  html: {
    title: "HTML5",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />, // Placeholder
  },
  opencv: {
    title: "OpenCV",
    bg: "black",
    fg: "white",
    icon: <SiPython />, // Placeholder
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "voice-agents",
    category: "AI & Machine Learning",
    title: "10 AI Voice Agents",
    src: "/assets/projects-screenshots/10 ai voice agents.jpg",
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.framerMotion],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.node, PROJECT_SKILLS.openai],
    },
    live: "https://github.com/rajan2008/voice-agent-day1",
    github: "https://github.com/rajan2008/voice-agent-day1",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Conversational AI Challenge
          </TypographyP>
          <TypographyP className="font-mono mt-4">
            Developed 10 unique AI voice agents in 10 days, exploring real-time speech-to-text, LLM context handling, and low-latency voice synthesis.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
  {
    id: "courier-web",
    category: "Full-Stack Web",
    title: "Courier Logistics Web",
    src: "/assets/projects-screenshots/courier.png",
    screenshots: [],
    live: "https://github.com/rajan2008/courier-service-web",
    github: "https://github.com/rajan2008/courier-service-web",
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind],
      backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.express, PROJECT_SKILLS.mongo],
    },
    get content(): JSX.Element {
      return (
        <div>
          <TypographyP className="font-mono ">
            A comprehensive courier management system featuring multi-role portals (Super Admin, Admin, Driver, User) for streamlined logistics operations.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
  {
    id: "omnichannel",
    category: "SaaS & Automation",
    title: "Omnichannel Project",
    src: "/assets/projects-screenshots/omnichannel.jpeg",
    screenshots: [],
    live: "https://github.com/rajan2008/Omnichannel-project",
    github: "https://github.com/rajan2008/Omnichannel-project",
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.ts],
      backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.sockerio],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Unified communication platform designed to manage customer interactions across multiple channels seamlessly.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
  {
    id: "dream11",
    category: "Data Science",
    title: "Dream11 Predictor",
    src: "/assets/projects-screenshots/dream11.png",
    screenshots: [],
    live: "https://github.com/rajan2008/Dream11_predictor",
    github: "https://github.com/rajan2008/Dream11_predictor",
    skills: {
      frontend: [PROJECT_SKILLS.html, PROJECT_SKILLS.js],
      backend: [PROJECT_SKILLS.python],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Machine learning model trained to predict optimal team combinations for fantasy sports based on historical performance data.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
  {
    id: "face-recognition",
    category: "Computer Vision",
    title: "Face Recognition Engine",
    src: "/assets/projects-screenshots/face recognization.jpg",
    screenshots: [],
    live: "https://github.com/rajan2008/face-recognition",
    github: "https://github.com/rajan2008/face-recognition",
    skills: {
      frontend: [],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.opencv],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Advanced biometric identification system utilizing deep learning for real-time face detection and verification.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
];
export default projects;


