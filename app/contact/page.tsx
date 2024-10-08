"use client";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Téléphone portable",
        description: "(+33) 698 79 29 48",
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: <Link href="mailto:achraf.kalchi@gmail.com">achraf.kalchi@gmail.com</Link>,
    },
    {
        icon: <FaMapMarkerAlt />,
        title: "Mobilité",
        description: "France",
    },
];

const Contact = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
            className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col items-center">
                    <div className="min-h-[80vh] flex flex-col justify-center py-112 xl:px-0">
                        <h3 className="text-5xl text-accent">Contactez-moi, c’est facile !</h3>
                        <div className="shadow-md rounded-lg p-6 mt-10">
                            <ul className="flex flex-col gap-6">
                                {info.map((item, index) => {
                                    return (
                                        <li key={index} className="flex items-center gap-4">
                                            <div className="w-[52px] h-[52px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                                <div className="text-[28px]">{item.icon}</div>
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-white/60">{item.title}</p>
                                                <h3 className="text-xl">{item.description}</h3>
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;
