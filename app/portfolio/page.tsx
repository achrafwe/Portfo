"use client";

import {
    FaHtml5,
    FaCss3,
    FaJava,
    FaReact,
    FaFigma,
    FaPhp, FaJs,
    FaLeaf,FaGit,FaWordpress,FaLaravel,
} from "react-icons/fa";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import {ScrollArea} from "@/components/ui/scroll-area";
import {motion} from "framer-motion";

const about = {
    title: "A propos de moi",
    description: "Passionné par le développement web, je suis un développeur full stack dédié à la création d'interfaces élégantes et intuitives. Je cherche actuellement un stage de fin d'études pour mettre en pratique mes compétences en ingénierie et contribuer à des projets innovants. Mon objectif est de concevoir des expériences utilisateur" +
        " mémorables, qui allient créativité et technologie pour une satisfaction optimale",
    info: [
        {
            fieldName: "je suis",
            fieldValue: "Achraf Elkalchy"
        },
        {
            fieldName: "Experience",
            fieldValue: "+1 Ans"
        },
        {
            fieldName: "LinkedIn",
            fieldValue: "Achraf Elkalchy"
        },
        {
            fieldName: "Email",
            fieldValue: "achraf.kalchi@gmail.com"
        },
        {
            fieldName: "Freelance",
            fieldValue: "Available"
        },
        {
            fieldName: "Langues",
            fieldValue: "Anglais, Français, Arabe, Russe"
        },

    ]
}

const experience = {
    icon: '/assets/portfolio/',
    title: 'Mes experiences',
    description: "Au fil des années, j'ai eu l'opportunité de collaborer " +
        "avec diverses entreprises en tant que développeur web, me permettant de renforcer mes compétences techniques et de contribuer à des projets innovants.",
    items: [
        {
            company: "Esante Service Maroc",
            position: "Développeur web (Freelance)",
            duration: "2020-2021 (une année)",

        }, {
            company: "Optimum Strategy",
            position: "Développeur web",
            duration: "Juillet-Aoùt 2019 (2 mois)",

        }, {
            company: "Multinfra",
            position: "Développeur web",
            duration: "Aoùt 2018 (un mois)",

        },

    ]
}

const education = {
    icon: '/assets/portfolio/',
    title: 'Education',
    description: "",
    items: [
        {
            institution: "Ensim",
            degre: "Informatique: Intéractions Personne-Système(IPS)",
            duration: "2022-Présent",

        }, {
            institution: "Faculté d'informatique appliquée",
            degre: "Bachelor en informatique appliquée",
            duration: "2021-2022",

        }, {
            institution: "CesaSup",
            degre: "Bachelor en développement informatique et bases de données",
            duration: "2018-2019",

        },

    ]
}

const skills = {
    title: "Mes compétences",
    description: "Une combinaison unique de compétences techniques et interpersonnelles, axées sur l'innovation et la résolution de problèmes",
    skillist: [
        {
            icon: <FaHtml5/>,
            name: "html 5",
        },
        {
            icon: <FaCss3/>,
            name: "Css",
        },
        {
            icon: <FaJs/>,
            name: "JavaScript",
        },
        {
            icon: <FaPhp/>,
            name: "Php",
        },
        {
            icon: <FaLaravel/>,
            name: "Laravel",
        },
         {
            icon: <FaReact/>,
            name: "React.js",
        }, {
            icon: <FaJava/>,
            name: "java",
        }, 
        {
            icon: <FaLeaf/>,
            name: "SpringBoot",
        },{
            icon: <FaFigma/>,
            name: "Figma",
        },
        {
            icon: <FaGit/>,
            name: "Git",
        },
        {
            icon: <FaWordpress/>,
            name: "Wordpress",
        },
       

    ]
}
const Portfolio = () => {
    return (
        <motion.div initial={{opacity: 0}} animate={{
            opacity: 1, transition: {
                delay: 2.4, duration: 0.4, ease: 'easeIn'
            },
        }}
                    className="min-h-[80vh] flex items-center justify-center
        py-12 xl:py-0">
            <div className="container mx-auto">
                <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0
                    gap-6">
                        <TabsTrigger value="experience">Experiences</TabsTrigger>
                        <TabsTrigger value="education">Educations</TabsTrigger>
                        <TabsTrigger value="skills">Compétences</TabsTrigger>
                        <TabsTrigger value="about">Apropos de moi</TabsTrigger>
                    </TabsList>
                    <div className="min-h-[70vh] w-full">
                        <TabsContent value="experience" className="w-full ">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{experience.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 ">{experience.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item, index) => {
                                            return (
                                                <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex
                                            flex-col justify-center items-center lg:items-start gap-1">
                                            <span className="text-accent">
                                                {item.duration}
                                            </span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left"> {item.position}</h3>
                                                    <div>

                                                        <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent">
                                                         </span>
                                                            <p className="text-white/60">
                                                                {item.company}
                                                            </p>
                                                        </div>

                                                    </div>

                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>

                        </TabsContent>
                        <TabsContent value="education" className="w-full ">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-3xl font-bold">{education.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 ">{education.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index) => {
                                            return (
                                                <li key={index} className="bg-[#232329] h-auto py-6 px-10 rounded-xl flex
                                            flex-col justify-center items-center lg:items-start gap-1">
                                            <span className="text-accent">
                                                {item.duration}
                                            </span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left"> {item.degre}</h3>
                                                    <div>

                                                        <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent">
                                                         </span>
                                                            <p className="text-white/60">
                                                                {item.institution}
                                                            </p>
                                                        </div>

                                                    </div>

                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        <TabsContent value="skills" className="w-full h-full ">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-4 xl:gap-[30px]">
                                    {skills.skillist.map((skill, index) => {
                                        return <li key={index}>
                                            <TooltipProvider delayDuration={100}>
                                                <Tooltip>
                                                    <TooltipTrigger
                                                        className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                        <div
                                                            className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p className="capitalize">{skill.name}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </li>;
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                        <TabsContent value="about" className="w-full text-center xl:text-left ">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">
                                    {about.title}
                                </h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {about.description}
                                </p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                    {about.info.map((item, index) => {
                                            return <li key={index}
                                                       className="flex items-center justify-center xl:justify-start gap-4">
                                            <span className="text-white/60">{item.fieldName}
                                            </span>
                                                <span className="text-xl/30 ">{item.fieldValue}</span></li>;
                                        }
                                    )}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>

            </div>
        </motion.div>
    )
}
export default Portfolio;
