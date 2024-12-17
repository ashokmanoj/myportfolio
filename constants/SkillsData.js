import { AiFillHtml5 } from "react-icons/ai";
import {
  SiNodedotjs,
  SiNextdotjs,
  SiVercel,
  SiNetlify,
  SiExpress,
  SiRedux,
  SiTailwindcss,
  SiMui,
  SiChakraui,
  SiFirebase,
  SiTypescript,
  SiJquery,
  SiPhp,
  SiSupabase
} from "react-icons/si";
import { DiJavascript1, DiReact, DiMongodb, DiSass } from "react-icons/di";
import { BsGit, BsGithub } from "react-icons/bs";
import { FaBootstrap, FaCss3Alt, FaAngular, FaPhp, FaShopify, FaJava } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { GrMysql } from "react-icons/gr";

export const TechStackData = [
  {
    Advance: [
      {
        name: "ReactJS",
        icon: <DiReact className="text-2xl md:text-4xl" color="#53c1de" />,
      },
      {
        name: "JavaScript",
        icon: <DiJavascript1 className="text-2xl md:text-4xl" color="#ffd600" />,
      },
      {
        name: "Redux-toolkit",
        icon: <SiRedux className="text-2xl md:text-4xl" color="#7e57c2" />,
      },
      {
        name: "HTML5",
        icon: <AiFillHtml5 className="text-2xl md:text-4xl" color="#fa6700" />,
      },
      {
        name: "CSS3",
        icon: <FaCss3Alt className="text-2xl md:text-4xl" color={"#039be5"} />,
      },
      {
        name: "Bootstrap",
        icon: <FaBootstrap className="text-2xl md:text-4xl" color="#673ab7" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-2xl md:text-4xl" color="#4caf50" />,
      },
      {
        name: "Meterial UI",
        icon: <SiMui className="text-2xl md:text-4xl" color="#29b6f6" />,
      },
      {
        name: "Chakra UI",
        icon: <SiChakraui className="md:text-4xl text-2xsl" color="#50cbc0" />
      },
      {
        name: "Vercel",
        icon: <SiVercel className="text-2xl text-black dark:text-white md:text-4xl" />
      },
      {
        name: "Github",
        icon: <BsGithub className="text-2xl md:text-4xl" color="#c9d1d9" />
      },
    ],
    Good: [
      {
        name: "NextJS",
        icon: <SiNextdotjs className="text-2xl text-black md:text-4xl dark:text-white" />
      },
      {
        name: "NodeJS",
        icon: <SiNodedotjs className="text-2xl md:text-4xl" color="#4caf50" />,
      },
      {
        name: "PHP",
        icon: <SiPhp className="text-2xl md:text-4xl" color="#555555" />,
      },
      {
        name: "MongoDB",
        icon: <DiMongodb className="text-2xl md:text-4xl" color="#4caf50" />,
      },
      {
        name: "firebase",
        icon: <SiFirebase className="text-2xl md:text-4xl" color="#ffcd33" />
      },{
        name: "Supabase",
        icon: <SiSupabase className="text-2xl md:text-4xl" color="#ffcd33" />
      },
      {
        name: "jQuery",
        icon: <SiJquery className="md:text-4xl text-2xsl" color="#106dae" />
      },
      // {
      //   name: "netlify",
      //   icon: <SiNetlify className="text-2xl md:text-4xl" color={"#31b5ba"} />
      // },
      {
        name: "Git",
        icon: <BsGit className="text-2xl md:text-4xl" color="#f4511e" />
      },

    ],
    Familiar: [
      {
        name: "TypeScript",
        icon: <SiTypescript className="text-2xl md:text-4xl" color="#377cc8" />
      },
      {
        name: "Angular",
        icon: <FaAngular className="text-2xl md:text-4xl" color="#c50836" />
      },
      {
        name: "React Native",
        icon: <TbBrandReactNative className="text-2xl md:text-4xl" color="#66dbfb" />
      },
      {
        name: "PHP",
        icon: <FaPhp className="text-2xl md:text-4xl" color="#7b7fb5" />
      },
      // {
      //   name: "JAVA",
      //   icon: <FaJava className="text-2xl md:text-4xl" color="#547c99" />
      // },
      {
        name: "SASS",
        icon: <DiSass className="text-2xl md:text-4xl" color="#f06292" />,
      },
      {
        name: "MySQL",
        icon: <GrMysql className="text-2xl md:text-4xl" color="#08668e" />
      },
      // {
      //   name: "Shopify",
      //   icon: <FaShopify className="text-2xl md:text-4xl" color="#99c14f" />
      // }
    ]

  }
]